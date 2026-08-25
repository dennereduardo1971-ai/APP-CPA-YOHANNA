import { useState } from 'react'
import { Card, Secao } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Pill } from '@/components/ui/Badge'
import { Campo, ListaLinhas, Marcador } from '@/components/ui/Campo'
import { AdminShell } from '@/components/domain/AdminShell'
import { MACROTEMAS } from '@/lib/content'
import { useStore } from '@/lib/store'
import type { Macrotema, Microtema } from '@/lib/types'

/**
 * Estrutura do programa: macrotemas e microtemas.
 *
 * Sem editor de conceito aqui — conceito tem tela própria, porque é onde mora
 * a aula. Esta página cuida só do esqueleto oficial.
 */

const novoId = (prefixo: string) => `${prefixo}-${Math.random().toString(36).slice(2, 8)}`

/** Converte texto de campo numérico sem transformar vazio em zero. */
const numeroOuNulo = (texto: string): number | null => {
  const limpo = texto.trim().replace(',', '.')
  if (!limpo) return null
  const n = Number(limpo)
  return Number.isFinite(n) ? n : null
}

function EditorMicrotema({ micro, aoFechar }: { micro: Microtema; aoFechar: () => void }) {
  const editar = useStore((s) => s.editarMicrotema)
  const remover = useStore((s) => s.removerItem)
  const reverter = useStore((s) => s.reverterItem)
  const editado = useStore((s) => Boolean(s.overlay.microtemas[micro.id]))
  const [confirmar, setConfirmar] = useState(false)

  return (
    <div className="mt-2 rounded-xl border border-line bg-bg p-3.5">
      <Campo
        rotulo="Código no programa"
        dica="Como aparece no Programa Detalhado da ANBIMA, ex.: 2.1."
        valor={micro.codigo}
        onChange={(v) => editar(micro.id, { codigo: v })}
      />
      <Campo rotulo="Nome" valor={micro.nome} onChange={(v) => editar(micro.id, { nome: v })} />
      <Campo
        rotulo="Ordem"
        tipo="number"
        valor={String(micro.ordem)}
        onChange={(v) => editar(micro.id, { ordem: numeroOuNulo(v) ?? micro.ordem })}
      />
      <ListaLinhas
        rotulo="Pré-requisitos"
        dica="Ids de microtemas que precisam chegar a 60% antes deste. Um por linha."
        valor={micro.preRequisitos}
        onChange={(v) => editar(micro.id, { preRequisitos: v })}
        linhas={3}
      />

      <div className="flex flex-wrap gap-2">
        <Button tamanho="sm" variante="secundaria" onClick={aoFechar}>
          Fechar
        </Button>
        {editado && (
          <Button
            tamanho="sm"
            variante="secundaria"
            onClick={() => reverter('microtema', micro.id)}
          >
            Desfazer edições
          </Button>
        )}
        {confirmar ? (
          <Button
            tamanho="sm"
            variante="perigo"
            onClick={() => {
              remover('microtema', micro.id)
              aoFechar()
            }}
          >
            Apagar mesmo
          </Button>
        ) : (
          <Button tamanho="sm" variante="perigo" onClick={() => setConfirmar(true)}>
            Apagar
          </Button>
        )}
      </div>

      {confirmar && micro.conceitos.length > 0 && (
        <p className="mt-2.5 text-xs leading-relaxed text-danger">
          Apagar leva junto {micro.conceitos.length}{' '}
          {micro.conceitos.length === 1 ? 'aula' : 'aulas'} e as questões delas. Dá para desfazer
          em Dados.
        </p>
      )}
    </div>
  )
}

function EditorMacrotema({ macro, aoFechar }: { macro: Macrotema; aoFechar: () => void }) {
  const editar = useStore((s) => s.editarMacrotema)
  const reverter = useStore((s) => s.reverterItem)
  const editado = useStore((s) => Boolean(s.overlay.macrotemas[macro.id]))

  return (
    <div className="mt-2 rounded-xl border border-line bg-bg p-3.5">
      <Campo
        rotulo="Código"
        valor={macro.codigo}
        onChange={(v) => editar(macro.id, { codigo: v })}
      />
      <Campo rotulo="Nome" valor={macro.nome} onChange={(v) => editar(macro.id, { nome: v })} />
      <Campo rotulo="Resumo" valor={macro.resumo} onChange={(v) => editar(macro.id, { resumo: v })} />
      <Campo
        rotulo="Peso na prova"
        dica="Fração de 0 a 1. Em branco quando o peso oficial não é conhecido — o app distribui o resíduo em vez de inventar um número."
        valor={macro.peso == null ? '' : String(macro.peso)}
        onChange={(v) => editar(macro.id, { peso: numeroOuNulo(v) })}
      />
      <Marcador
        rotulo="Peso conferido em documento oficial"
        dica="Enquanto desmarcado, a trilha exibe o aviso de dado não verificado."
        ativo={macro.pesoVerificado}
        onChange={(v) => editar(macro.id, { pesoVerificado: v })}
      />

      <div className="flex flex-wrap gap-2">
        <Button tamanho="sm" variante="secundaria" onClick={aoFechar}>
          Fechar
        </Button>
        {editado && (
          <Button
            tamanho="sm"
            variante="secundaria"
            onClick={() => reverter('macrotema', macro.id)}
          >
            Desfazer edições
          </Button>
        )}
      </div>
    </div>
  )
}

export default function AdminEstrutura() {
  const overlay = useStore((s) => s.overlay)
  const criarMicrotema = useStore((s) => s.criarMicrotema)
  const criarMacrotema = useStore((s) => s.criarMacrotema)
  const [aberto, setAberto] = useState<string | null>(null)

  const alternar = (chave: string) => setAberto((atual) => (atual === chave ? null : chave))

  function adicionarMicrotema(macro: Macrotema) {
    const ordem = Math.max(0, ...macro.microtemas.map((mt) => mt.ordem)) + 1
    const item: Microtema = {
      id: novoId('mt'),
      macrotemaId: macro.id,
      codigo: `${macro.ordem}.${ordem}`,
      nome: 'Novo microtema',
      ordem,
      preRequisitos: [],
      conceitos: [],
    }
    criarMicrotema(item)
    setAberto(item.id)
  }

  function adicionarMacrotema() {
    const ordem = Math.max(0, ...MACROTEMAS.map((m) => m.ordem)) + 1
    const item: Macrotema = {
      id: novoId('m'),
      codigo: String(ordem),
      nome: 'Novo macrotema',
      resumo: '',
      // Peso desconhecido é `null`, não zero: zero afirmaria que o módulo não
      // cai na prova, e isso é uma invenção (regra 4).
      peso: null,
      pesoVerificado: false,
      ordem,
      microtemas: [],
    }
    criarMacrotema(item)
    setAberto(item.id)
  }

  return (
    <AdminShell
      titulo="Estrutura"
      descricao="Os macrotemas e microtemas do programa oficial."
      acao={
        <Button tamanho="sm" variante="secundaria" onClick={adicionarMacrotema}>
          Novo módulo
        </Button>
      }
    >
      {MACROTEMAS.map((macro) => (
        <Secao key={macro.id} titulo={`${macro.codigo} · ${macro.nome}`}>
          <Card>
            <div className="flex flex-wrap items-center gap-2">
              <Pill tom={macro.pesoVerificado ? 'jade' : 'warn'}>
                {macro.peso == null
                  ? 'peso desconhecido'
                  : `${Math.round(macro.peso * 100)}% da prova`}
              </Pill>
              <Pill tom="neutro">
                {macro.microtemas.length}{' '}
                {macro.microtemas.length === 1 ? 'microtema' : 'microtemas'}
              </Pill>
              {overlay.criados.macrotemas.some((m) => m.id === macro.id) && (
                <Pill tom="aurora">criado aqui</Pill>
              )}
              <button
                type="button"
                onClick={() => alternar(macro.id)}
                className="ml-auto text-sm font-semibold text-aurora"
              >
                {aberto === macro.id ? 'Fechar' : 'Editar módulo'}
              </button>
            </div>

            {aberto === macro.id && (
              <EditorMacrotema macro={macro} aoFechar={() => setAberto(null)} />
            )}

            <ul className="mt-4 flex flex-col gap-2 border-t border-line pt-4">
              {macro.microtemas.map((micro) => (
                <li key={micro.id}>
                  <div className="rounded-xl border border-line bg-elevated p-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold">
                          <span className="tnum mr-1.5 text-muted">{micro.codigo}</span>
                          {micro.nome}
                        </p>
                        <p className="mt-0.5 text-xs text-muted">
                          {micro.conceitos.length === 0
                            ? 'sem aula escrita'
                            : `${micro.conceitos.length} ${micro.conceitos.length === 1 ? 'aula' : 'aulas'}`}
                          {micro.preRequisitos.length > 0 &&
                            ` · depende de ${micro.preRequisitos.join(', ')}`}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => alternar(micro.id)}
                        className="shrink-0 text-xs font-semibold text-aurora"
                      >
                        {aberto === micro.id ? 'Fechar' : 'Editar'}
                      </button>
                    </div>

                    {aberto === micro.id && (
                      <EditorMicrotema micro={micro} aoFechar={() => setAberto(null)} />
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <Button
              tamanho="sm"
              variante="secundaria"
              bloco
              className="mt-3"
              onClick={() => adicionarMicrotema(macro)}
            >
              Novo microtema
            </Button>
          </Card>
        </Secao>
      ))}
    </AdminShell>
  )
}
