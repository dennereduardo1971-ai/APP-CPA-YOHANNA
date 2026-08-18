import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type {
  Conquista,
  Dificuldade,
  EstadoConceito,
  EventoXP,
  Favoritos,
  Metas,
  Origem,
  Perfil,
  Resposta,
  ResultadoSimulado,
  SessaoHistorico,
  Sequencia,
} from './types'
import { CONCEITOS, getConceito, MACROTEMAS } from './content'
import { getQuestao } from './questions'
import {
  dominioEfetivo,
  estadoInicial,
  type MotivoErro,
  registrarResposta,
} from './engine/mastery'
import {
  atualizarSequencia,
  CONQUISTAS,
  diaLocal,
  nivelPorXP,
  XP,
  xpPorResposta,
} from './engine/gamification'

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

/** Regras de conquista — cada uma é uma função pura sobre o estado. */
const REGRAS: Record<string, (e: Estado) => boolean> = {
  'primeira-aula': (e) => Object.values(e.estados).some((s) => s.aulaConcluida),
  'primeira-sessao': (e) => e.sessoes.length >= 1,
  'sequencia-3': (e) => e.sequencia.atual >= 3,
  'sequencia-7': (e) => e.sequencia.atual >= 7,
  'sequencia-30': (e) => e.sequencia.atual >= 30,
  'erro-superado-10': (e) =>
    e.respostas.filter((r) => r.acertou && r.tentativa > 1).length >= 10,
  'revisao-em-dia': (e) => {
    const agora = Date.now()
    const comHistorico = Object.values(e.estados).filter((s) => s.n > 0)
    return (
      comHistorico.length >= 5 && comHistorico.every((s) => s.revisarEm > agora && !s.errosAbertos)
    )
  },
  'macrotema-completo': (e) =>
    MACROTEMAS.some((m) => {
      const cs = m.microtemas.flatMap((mt) => mt.conceitos)
      return cs.length > 0 && cs.every((c) => e.estados[c.id]?.aulaConcluida)
    }),
  'dominado-5': (e) =>
    Object.values(e.estados).filter((s) => dominioEfetivo(s, Date.now()) >= 0.9).length >= 5,
  'simulado-aprovado': (e) => e.simulados.some((s) => s.aprovado && s.modo === 'completo'),
  'meta-7': (e) =>
    Object.entries(e.minutosPorDia).filter(([, min]) => min >= e.metas.minutosDia).length >= 7,
  'sem-pressa': (e) => {
    const ultima = e.sessoes.at(-1)
    if (!ultima || ultima.questoes < 5) return false
    return e.respostas
      .filter((r) => r.data >= ultima.inicio && r.data <= ultima.fim)
      .every((r) => r.tempoMs >= 3000)
  },
}

function avaliarConquistas(estado: Estado): Conquista[] {
  const novas: Conquista[] = []
  for (const conquista of CONQUISTAS) {
    if (estado.conquistas.includes(conquista.id)) continue
    if (REGRAS[conquista.id]?.(estado)) novas.push(conquista)
  }
  return novas
}

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

      resetarProgresso: () =>
        set({
          ...estadoInicialCompleto,
          onboardingConcluido: true,
          perfil: get().perfil,
          metas: get().metas,
          preferencias: get().preferencias,
        }),

      exportar: () => JSON.stringify(snapshot(get()), null, 2),

      importar: (json) => {
        try {
          const dados = JSON.parse(json) as Partial<Estado>
          if (typeof dados !== 'object' || dados === null) return false
          if (dados.versao !== VERSAO_ESTADO) return false
          set({ ...estadoInicialCompleto, ...dados })
          return true
        } catch {
          return false
        }
      },
    }),
    {
      name: CHAVE,
      version: VERSAO_ESTADO,
      storage: createJSONStorage(() => localStorage),
      // Lista explícita: garante que nenhuma ação vá parar no localStorage
      // e que adicionar um campo novo exija uma decisão consciente.
      partialize: (s): Estado => ({
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
      }),
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
