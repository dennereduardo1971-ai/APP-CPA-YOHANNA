import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type {
  Conceito,
  Conquista,
  Dificuldade,
  EstadoConceito,
  EventoXP,
  Favoritos,
  Macrotema,
  Metas,
  Microtema,
  Origem,
  Perfil,
  Questao,
  Resposta,
  ResultadoSimulado,
  SessaoHistorico,
  Sequencia,
  VersaoConteudo,
} from './types'
import { CONCEITOS, getConceito, MACROTEMAS } from './content'
import type {
  OverlayConteudo,
  PatchConceito,
  PatchMacrotema,
  PatchMicrotema,
  PatchQuestao,
  TipoConteudo,
} from './content/overlay'
import { normalizarOverlay, overlayVazio } from './content/overlay'
import { aplicarOverlayLocal } from './pacote'
import { getQuestao } from './questions'
import {
  dominioEfetivo,
  estadoInicial,
  type MotivoErro,
  registrarResposta,
} from './engine/mastery'
import {
  atualizarSequencia,
  avaliarConquistas as avaliarNoMotor,
  diaLocal,
  nivelPorXP,
  type SnapshotGamificacao,
  XP,
  xpPorResposta,
} from './engine/gamification'
import { dominioMacrotema } from './engine/stats'
import { montarTrilha, progressoDaTrilha } from './engine/trilha'

/**
 * Camada única de I/O. Nenhum componente escreve em localStorage direto.
 *
 * O formato persistido é um documento simples e versionado — a mesma forma
 * que uma tabela `user_state` teria num backend. Isso permite plugar
 * sincronização entre dispositivos depois sem tocar em nenhum componente.
 */

export const VERSAO_ESTADO = 1
const CHAVE = 'preparatorio-cpa:v1'

export interface Preferencias {
  som: boolean
  animacoes: boolean
  mostrarExplicacaoAutomatica: boolean
  /** Modo véspera ativo — muda a experiência inteira. */
  modoVespera: boolean
}

export interface Estado {
  versao: number
  onboardingConcluido: boolean
  perfil: Perfil
  metas: Metas
  preferencias: Preferencias
  sequencia: Sequencia
  xpTotal: number
  eventosXP: EventoXP[]
  conquistas: string[]
  estados: Record<string, EstadoConceito>
  respostas: Resposta[]
  sessoes: SessaoHistorico[]
  simulados: ResultadoSimulado[]
  favoritos: Favoritos
  /** Minutos estudados por dia local — base da meta diária. */
  minutosPorDia: Record<string, number>
  questoesPorDia: Record<string, number>
  /** Edições locais de conteúdo feitas no painel `/admin`. */
  overlay: OverlayConteudo
  /** Histórico manual de versões de conteúdo (item 18 da especificação). */
  versoesConteudo: VersaoConteudo[]
}

export interface Acoes {
  concluirOnboarding: (perfil: Partial<Perfil>, metas: Partial<Metas>) => void
  atualizarPerfil: (dados: Partial<Perfil>) => void
  atualizarMetas: (dados: Partial<Metas>) => void
  atualizarPreferencias: (dados: Partial<Preferencias>) => void
  concluirAula: (conceitoId: string) => void
  responder: (params: RegistroResposta) => RetornoResposta
  registrarSessao: (sessao: Omit<SessaoHistorico, 'id'>) => void
  registrarSimulado: (resultado: Omit<ResultadoSimulado, 'id'>) => string
  alternarFavorito: (tipo: keyof Favoritos, id: string) => void
  adicionarMinutos: (minutos: number) => void
  resetarProgresso: () => void
  importar: (json: string) => boolean
  exportar: () => string
  /** Importa só o conteúdo editado, sem tocar no progresso de estudo. */
  importarConteudo: (json: string) => boolean

  /* Painel de conteúdo (`/admin`) */
  editarMacrotema: (id: string, patch: PatchMacrotema) => void
  editarMicrotema: (id: string, patch: PatchMicrotema) => void
  editarConceito: (id: string, patch: PatchConceito) => void
  editarQuestao: (id: string, patch: PatchQuestao) => void
  criarMacrotema: (item: Macrotema) => void
  criarMicrotema: (item: Microtema) => void
  criarConceito: (item: Conceito) => void
  criarQuestao: (item: Questao) => void
  removerItem: (tipo: TipoConteudo, id: string) => void
  /** Desfaz as edições locais de um item, voltando ao conteúdo do código. */
  reverterItem: (tipo: TipoConteudo, id: string) => void
  limparOverlay: () => void
  registrarVersao: (versao: Omit<VersaoConteudo, 'id'>) => void
  removerVersao: (id: string) => void
}

export interface RegistroResposta {
  questaoId: string
  escolhida: string
  tempoMs: number
  origem: Origem
  motivoErro?: MotivoErro
}

export interface RetornoResposta {
  acertou: boolean
  xpGanho: number
  motivoXP: string
  deltaDominio: number
  novasConquistas: Conquista[]
  sequenciaAtualizada: boolean
  /** Cruzou um marco de sequência e ganhou um congelamento nesta resposta. */
  ganhouCongelamento: boolean
}

const perfilInicial: Perfil = { nome: '', avatar: null, criadoEm: Date.now() }

const metasIniciais: Metas = {
  minutosDia: 30,
  questoesDia: 20,
  diasSemana: 5,
  dataProva: null,
}

const preferenciasIniciais: Preferencias = {
  som: true,
  animacoes: true,
  mostrarExplicacaoAutomatica: true,
  modoVespera: false,
}

const sequenciaInicial: Sequencia = { atual: 0, recorde: 0, ultimoDia: null, congelamentos: 2 }

const estadoInicialCompleto: Estado = {
  versao: VERSAO_ESTADO,
  onboardingConcluido: false,
  perfil: perfilInicial,
  metas: metasIniciais,
  preferencias: preferenciasIniciais,
  sequencia: sequenciaInicial,
  xpTotal: 0,
  eventosXP: [],
  conquistas: [],
  estados: {},
  respostas: [],
  sessoes: [],
  simulados: [],
  favoritos: { conceitos: [], questoes: [], mapas: [] },
  minutosPorDia: {},
  questoesPorDia: {},
  overlay: overlayVazio(),
  versoesConteudo: [],
}

/**
 * Toda escrita no overlay passa por aqui: grava no estado E remonta o
 * conteúdo. Separar as duas coisas convidaria a um bug em que o painel diz
 * que salvou e o app continua mostrando o texto antigo.
 */
function aplicar(overlay: OverlayConteudo) {
  aplicarOverlayLocal(overlay)
  return { overlay }
}

/** O tipo é singular na interface; a chave do overlay é plural. */
const CHAVE_OVERLAY = {
  macrotema: 'macrotemas',
  microtema: 'microtemas',
  conceito: 'conceitos',
  questao: 'questoes',
} as const

/*
 * As duas funções abaixo montam objetos com chave computada, algo que o TS
 * não consegue estreitar sozinho — daí o único `as OverlayConteudo` de cada
 * uma. A alternativa seria repetir o mesmo corpo quatro vezes.
 */

function removerDoOverlay(
  overlay: OverlayConteudo,
  tipo: TipoConteudo,
  itemId: string,
): OverlayConteudo {
  const chave = CHAVE_OVERLAY[tipo]
  const criados = overlay.criados[chave] as { id: string }[]
  // Item criado no painel some de vez. Item que veio do código entra na lista
  // de removidos, para poder ser restaurado com `reverterItem`.
  const eraLocal = criados.some((item) => item.id === itemId)
  const patches: Record<string, unknown> = { ...overlay[chave] }
  delete patches[itemId]

  return {
    ...overlay,
    [chave]: patches,
    criados: { ...overlay.criados, [chave]: criados.filter((item) => item.id !== itemId) },
    removidos: {
      ...overlay.removidos,
      [chave]: eraLocal
        ? overlay.removidos[chave]
        : [...new Set([...overlay.removidos[chave], itemId])],
    },
  } as OverlayConteudo
}

function reverterNoOverlay(
  overlay: OverlayConteudo,
  tipo: TipoConteudo,
  itemId: string,
): OverlayConteudo {
  const chave = CHAVE_OVERLAY[tipo]
  const patches: Record<string, unknown> = { ...overlay[chave] }
  delete patches[itemId]

  return {
    ...overlay,
    [chave]: patches,
    removidos: {
      ...overlay.removidos,
      [chave]: overlay.removidos[chave].filter((removido) => removido !== itemId),
    },
  } as OverlayConteudo
}

const id = () => Math.random().toString(36).slice(2, 11)

/** Teto por item: evita creditar aba esquecida aberta como tempo de estudo. */
const TETO_MINUTOS_POR_ITEM = 5

/** Soma minutos ao dia local, com arredondamento de uma casa. */
function creditarMinutos(
  mapa: Record<string, number>,
  dia: string,
  minutos: number,
): Record<string, number> {
  const somados = (mapa[dia] ?? 0) + Math.min(minutos, TETO_MINUTOS_POR_ITEM)
  return { ...mapa, [dia]: Math.round(somados * 10) / 10 }
}

/**
 * Recorte do estado que a gamificação precisa ver.
 *
 * As regras de conquista moravam aqui, lendo o `Estado` inteiro. Foram para
 * `engine/gamification.ts` atrás deste contrato: lá são testáveis sem montar
 * um store, e a assinatura passa a dizer de que a gamificação realmente
 * depende. O store ficou só com a tradução.
 */
export function snapshotGamificacao(e: Estado): SnapshotGamificacao {
  const agora = Date.now()
  const conceitos = Object.values(e.estados)
  const comHistorico = conceitos.filter((c) => c.n > 0)
  const ultima = e.sessoes.at(-1)

  return {
    sessoes: e.sessoes.length,
    sequenciaAtual: e.sequencia.atual,
    sequenciaRecorde: e.sequencia.recorde,
    congelamentos: e.sequencia.congelamentos,
    aulasConcluidas: conceitos.filter((c) => c.aulaConcluida).length,
    macrotemasCompletos: MACROTEMAS.filter((m) => {
      const cs = m.microtemas.flatMap((mt) => mt.conceitos)
      return cs.length > 0 && cs.every((c) => e.estados[c.id]?.aulaConcluida)
    }).length,
    conceitosDominados: conceitos.filter((c) => dominioEfetivo(c, agora) >= 0.9).length,
    errosSuperados: e.respostas.filter((r) => r.acertou && r.tentativa > 1).length,
    // Cinco conceitos é o mínimo para "em dia" significar alguma coisa.
    revisaoEmDia:
      comHistorico.length >= 5 &&
      comHistorico.every((c) => c.revisarEm > agora && !c.errosAbertos),
    simuladoAprovado: e.simulados.some((r) => r.aprovado && r.modo === 'completo'),
    diasComMetaCumprida: Object.values(e.minutosPorDia).filter((min) => min >= e.metas.minutosDia)
      .length,
    ultimaSessaoSemPressa: Boolean(
      ultima &&
        ultima.questoes >= 5 &&
        e.respostas
          .filter((r) => r.data >= ultima.inicio && r.data <= ultima.fim)
          .every((r) => r.tempoMs >= 3000),
    ),
    dominioPorMacrotema: Object.fromEntries(
      MACROTEMAS.map((m) => [m.id, dominioMacrotema(m.id, e.estados, agora)]),
    ),
    dificeisAcertadas: e.respostas.filter((r) => r.acertou && r.dificuldade === 'dificil').length,
    etapasConcluidas: progressoDaTrilha(
      montarTrilha({ estados: e.estados, respostas: e.respostas, agora }),
    ).concluidas,
  }
}

const avaliarConquistas = (estado: Estado): Conquista[] =>
  avaliarNoMotor(snapshotGamificacao(estado), estado.conquistas)

function garantirEstado(
  estados: Record<string, EstadoConceito>,
  conceitoId: string,
): EstadoConceito {
  const existente = estados[conceitoId]
  if (existente) return existente
  const conceito = getConceito(conceitoId)
  const macro = MACROTEMAS.find((m) => m.microtemas.some((mt) => mt.id === conceito?.microtemaId))
  return estadoInicial(conceitoId, conceito?.microtemaId ?? '', macro?.id ?? '')
}

/** Extrai apenas os dados persistíveis, sem as ações. */
function snapshot(s: Estado & Acoes): Estado {
  return {
    versao: s.versao,
    onboardingConcluido: s.onboardingConcluido,
    perfil: s.perfil,
    metas: s.metas,
    preferencias: s.preferencias,
    sequencia: s.sequencia,
    xpTotal: s.xpTotal,
    eventosXP: s.eventosXP,
    conquistas: s.conquistas,
    estados: s.estados,
    respostas: s.respostas,
    sessoes: s.sessoes,
    simulados: s.simulados,
    favoritos: s.favoritos,
    minutosPorDia: s.minutosPorDia,
    questoesPorDia: s.questoesPorDia,
    overlay: s.overlay,
    versoesConteudo: s.versoesConteudo,
  }
}

export const useStore = create<Estado & Acoes>()(
  persist(
    (set, get) => ({
      ...estadoInicialCompleto,

      concluirOnboarding: (perfil, metas) =>
        set((s) => ({
          onboardingConcluido: true,
          perfil: { ...s.perfil, ...perfil, criadoEm: Date.now() },
          metas: { ...s.metas, ...metas },
        })),

      atualizarPerfil: (dados) => set((s) => ({ perfil: { ...s.perfil, ...dados } })),
      atualizarMetas: (dados) => set((s) => ({ metas: { ...s.metas, ...dados } })),
      atualizarPreferencias: (dados) =>
        set((s) => ({ preferencias: { ...s.preferencias, ...dados } })),

      concluirAula: (conceitoId) =>
        set((s) => {
          const atual = garantirEstado(s.estados, conceitoId)
          if (atual.aulaConcluida) return s

          const estados = { ...s.estados, [conceitoId]: { ...atual, aulaConcluida: true } }
          const minutosPorDia = creditarMinutos(
            s.minutosPorDia,
            diaLocal(Date.now()),
            getConceito(conceitoId)?.minutosEstimados ?? 3,
          )
          const evento: EventoXP = {
            id: id(),
            pontos: XP.concluirAula,
            motivo: 'Aula concluída',
            data: Date.now(),
          }
          const parcial: Estado = {
            ...s,
            estados,
            minutosPorDia,
            xpTotal: s.xpTotal + evento.pontos,
            eventosXP: [...s.eventosXP, evento].slice(-500),
          }
          const novas = avaliarConquistas(parcial)
          return { ...parcial, conquistas: [...s.conquistas, ...novas.map((c) => c.id)] }
        }),

      responder: ({ questaoId, escolhida, tempoMs, origem, motivoErro }) => {
        const questao = getQuestao(questaoId)
        if (!questao) {
          return {
            acertou: false,
            xpGanho: 0,
            motivoXP: '',
            deltaDominio: 0,
            novasConquistas: [],
            sequenciaAtualizada: false,
            ganhouCongelamento: false,
          }
        }

        const agora = Date.now()
        const s = get()
        const correta = questao.alternativas.find((a) => a.correta)!
        const acertou = escolhida === correta.id

        const anterior = garantirEstado(s.estados, questao.conceitoId)
        const eraErroAberto = anterior.errosAbertos > 0
        const jaDominado = dominioEfetivo(anterior, agora) >= 0.9

        const { estado: novoEstado, deltaM } = registrarResposta(
          anterior,
          acertou,
          questao.b,
          agora,
          motivoErro,
        )

        const tentativa =
          s.respostas.filter((r) => r.questaoId === questaoId).length + 1

        const resposta: Resposta = {
          id: id(),
          questaoId,
          macrotemaId: questao.macrotemaId,
          microtemaId: questao.microtemaId,
          conceitoId: questao.conceitoId,
          dificuldade: questao.dificuldade,
          escolhida,
          correta: correta.id,
          acertou,
          tempoMs,
          tentativa,
          data: agora,
          origem,
        }

        const ganho = xpPorResposta({
          acertou,
          dificuldade: questao.dificuldade,
          tempoMs,
          eraErroAberto,
          jaDominado,
        })

        const hoje = diaLocal(agora)
        const seq = atualizarSequencia(
          s.sequencia.atual,
          s.sequencia.recorde,
          s.sequencia.ultimoDia,
          s.sequencia.congelamentos,
          hoje,
        )

        const evento: EventoXP = { id: id(), pontos: ganho.pontos, motivo: ganho.motivo, data: agora }

        const parcial: Estado = {
          ...s,
          estados: { ...s.estados, [questao.conceitoId]: novoEstado },
          respostas: [...s.respostas, resposta],
          xpTotal: s.xpTotal + ganho.pontos,
          eventosXP: [...s.eventosXP, evento].slice(-500),
          sequencia: {
            atual: seq.atual,
            recorde: seq.recorde,
            ultimoDia: seq.ultimoDia,
            congelamentos: seq.congelamentos,
          },
          questoesPorDia: { ...s.questoesPorDia, [hoje]: (s.questoesPorDia[hoje] ?? 0) + 1 },
          minutosPorDia: creditarMinutos(s.minutosPorDia, hoje, tempoMs / 60_000),
        }

        const novas = avaliarConquistas(parcial)
        set({ ...parcial, conquistas: [...s.conquistas, ...novas.map((c) => c.id)] })

        return {
          acertou,
          xpGanho: ganho.pontos,
          motivoXP: ganho.motivo,
          deltaDominio: deltaM,
          novasConquistas: novas,
          sequenciaAtualizada: s.sequencia.ultimoDia !== hoje,
          ganhouCongelamento: seq.ganhouCongelamento,
        }
      },

      registrarSessao: (sessao) =>
        set((s) => {
          const parcial: Estado = { ...s, sessoes: [...s.sessoes, { ...sessao, id: id() }].slice(-200) }
          const novas = avaliarConquistas(parcial)
          return { ...parcial, conquistas: [...s.conquistas, ...novas.map((c) => c.id)] }
        }),

      registrarSimulado: (resultado) => {
        const novoId = id()
        set((s) => {
          const evento: EventoXP = {
            id: id(),
            pontos: XP.concluirSimulado,
            motivo: 'Simulado concluído',
            data: Date.now(),
          }
          const parcial: Estado = {
            ...s,
            simulados: [...s.simulados, { ...resultado, id: novoId }].slice(-50),
            xpTotal: s.xpTotal + evento.pontos,
            eventosXP: [...s.eventosXP, evento].slice(-500),
          }
          const novas = avaliarConquistas(parcial)
          return { ...parcial, conquistas: [...s.conquistas, ...novas.map((c) => c.id)] }
        })
        return novoId
      },

      alternarFavorito: (tipo, favId) =>
        set((s) => {
          const lista = s.favoritos[tipo]
          return {
            favoritos: {
              ...s.favoritos,
              [tipo]: lista.includes(favId)
                ? lista.filter((x) => x !== favId)
                : [...lista, favId],
            },
          }
        }),

      adicionarMinutos: (minutos) =>
        set((s) => ({
          minutosPorDia: creditarMinutos(s.minutosPorDia, diaLocal(Date.now()), minutos),
        })),

      // Zera o PROGRESSO do estudante. As edições de conteúdo e o histórico
      // de versões sobrevivem: são trabalho editorial, não progresso — quem
      // recomeça os estudos não está pedindo para perder suas correções.
      resetarProgresso: () =>
        set({
          ...estadoInicialCompleto,
          onboardingConcluido: true,
          perfil: get().perfil,
          metas: get().metas,
          preferencias: get().preferencias,
          overlay: get().overlay,
          versoesConteudo: get().versoesConteudo,
        }),

      exportar: () => JSON.stringify(snapshot(get()), null, 2),

      importar: (json) => {
        try {
          const dados = JSON.parse(json) as Partial<Estado>
          if (typeof dados !== 'object' || dados === null) return false
          if (dados.versao !== VERSAO_ESTADO) return false
          const overlay = normalizarOverlay(dados.overlay)
          set({ ...estadoInicialCompleto, ...dados, overlay })
          // O backup pode trazer edições de conteúdo; sem isto o app ficaria
          // com o estado importado e o conteúdo antigo.
          aplicarOverlayLocal(overlay)
          return true
        } catch {
          return false
        }
      },

      importarConteudo: (json) => {
        try {
          const dados = JSON.parse(json) as {
            overlay?: Partial<OverlayConteudo>
            versoesConteudo?: VersaoConteudo[]
          }
          if (!dados || typeof dados !== 'object' || !dados.overlay) return false
          set({
            ...aplicar(normalizarOverlay(dados.overlay)),
            versoesConteudo: Array.isArray(dados.versoesConteudo)
              ? dados.versoesConteudo
              : get().versoesConteudo,
          })
          return true
        } catch {
          return false
        }
      },

      /* ---- Painel de conteúdo (`/admin`) ----------------------------- */

      editarMacrotema: (itemId, patch) =>
        set((s) =>
          aplicar({
            ...s.overlay,
            macrotemas: {
              ...s.overlay.macrotemas,
              [itemId]: { ...s.overlay.macrotemas[itemId], ...patch },
            },
          }),
        ),

      editarMicrotema: (itemId, patch) =>
        set((s) =>
          aplicar({
            ...s.overlay,
            microtemas: {
              ...s.overlay.microtemas,
              [itemId]: { ...s.overlay.microtemas[itemId], ...patch },
            },
          }),
        ),

      editarConceito: (itemId, patch) =>
        set((s) =>
          aplicar({
            ...s.overlay,
            conceitos: {
              ...s.overlay.conceitos,
              [itemId]: {
                ...s.overlay.conceitos[itemId],
                ...patch,
                // `versao`/`atualizadoEm` existem no tipo desde a fase 4 e
                // ninguém os preenchia. Uma revisão editorial é exatamente o
                // momento de carimbá-los.
                versao: (getConceito(itemId)?.versao ?? 1) + 1,
                atualizadoEm: new Date().toISOString().slice(0, 10),
              },
            },
          }),
        ),

      editarQuestao: (itemId, patch) =>
        set((s) =>
          aplicar({
            ...s.overlay,
            questoes: {
              ...s.overlay.questoes,
              [itemId]: { ...s.overlay.questoes[itemId], ...patch },
            },
          }),
        ),

      criarMacrotema: (item) =>
        set((s) =>
          aplicar({
            ...s.overlay,
            criados: { ...s.overlay.criados, macrotemas: [...s.overlay.criados.macrotemas, item] },
          }),
        ),

      criarMicrotema: (item) =>
        set((s) =>
          aplicar({
            ...s.overlay,
            criados: { ...s.overlay.criados, microtemas: [...s.overlay.criados.microtemas, item] },
          }),
        ),

      criarConceito: (item) =>
        set((s) =>
          aplicar({
            ...s.overlay,
            criados: { ...s.overlay.criados, conceitos: [...s.overlay.criados.conceitos, item] },
          }),
        ),

      criarQuestao: (item) =>
        set((s) =>
          aplicar({
            ...s.overlay,
            criados: { ...s.overlay.criados, questoes: [...s.overlay.criados.questoes, item] },
          }),
        ),

      removerItem: (tipo, itemId) =>
        set((s) => aplicar(removerDoOverlay(s.overlay, tipo, itemId))),

      reverterItem: (tipo, itemId) =>
        set((s) => aplicar(reverterNoOverlay(s.overlay, tipo, itemId))),

      limparOverlay: () => set(() => aplicar(overlayVazio())),

      registrarVersao: (versao) =>
        set((s) => ({ versoesConteudo: [{ ...versao, id: id() }, ...s.versoesConteudo] })),

      removerVersao: (versaoId) =>
        set((s) => ({ versoesConteudo: s.versoesConteudo.filter((v) => v.id !== versaoId) })),
    }),
    {
      name: CHAVE,
      version: VERSAO_ESTADO,
      storage: createJSONStorage(() => localStorage),
      // `snapshot` é a lista explícita de campos persistidos: nenhuma ação vai
      // parar no localStorage e um campo novo exige decisão consciente.
      // Reusar a mesma função aqui e no `exportar()` impede que as duas listas
      // divirjam — já foram duas cópias.
      partialize: snapshot,
      /*
       * O conteúdo precisa ser remontado com o overlay ANTES do primeiro
       * render: componentes leem `MACROTEMAS` na montagem, e aplicar depois
       * deixaria a primeira tela com o conteúdo do código.
       */
      onRehydrateStorage: () => (estado) => {
        if (estado) aplicarOverlayLocal(normalizarOverlay(estado.overlay))
      },
    },
  ),
)

/* ------------------------------------------------------------------ */
/* Seletores derivados — evitam recomputar dentro dos componentes      */
/* ------------------------------------------------------------------ */

export const useNivel = () => {
  const xp = useStore((s) => s.xpTotal)
  return nivelPorXP(xp)
}

export function progressoDoDia(estado: Estado) {
  const hoje = diaLocal(Date.now())
  const minutos = estado.minutosPorDia[hoje] ?? 0
  const questoes = estado.questoesPorDia[hoje] ?? 0
  return {
    minutos,
    questoes,
    metaMinutos: estado.metas.minutosDia,
    metaQuestoes: estado.metas.questoesDia,
    progressoMinutos: Math.min(1, minutos / Math.max(1, estado.metas.minutosDia)),
    progressoQuestoes: Math.min(1, questoes / Math.max(1, estado.metas.questoesDia)),
    cumprida: minutos >= estado.metas.minutosDia || questoes >= estado.metas.questoesDia,
  }
}

/** Conceitos que o usuário ainda não estudou, em ordem de currículo. */
export function proximosConceitos(estado: Estado, limite = 4) {
  return CONCEITOS.filter((c) => !estado.estados[c.id]?.aulaConcluida).slice(0, limite)
}

export function diasParaProva(metas: Metas): number | null {
  if (!metas.dataProva) return null
  const alvo = Date.parse(`${metas.dataProva}T00:00:00`)
  if (Number.isNaN(alvo)) return null
  return Math.ceil((alvo - Date.now()) / 86_400_000)
}

export const dificuldades: Dificuldade[] = ['facil', 'media', 'dificil']
