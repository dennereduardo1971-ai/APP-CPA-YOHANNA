import { Link } from 'react-router-dom'
import { Icone, type IconeNome } from '@/components/ui/Icone'
import { Barra } from '@/components/ui/Progress'
import type { Etapa, SituacaoEtapa, TipoEtapa } from '@/lib/engine/trilha'

/**
 * Um nó da jornada: LIÇÃO, MINIQUIZ, DESAFIO ou REVISÃO.
 *
 * O nó carrega três sinais e nenhum deles depende só de cor — o estado também
 * aparece na FORMA do marcador (traço cheio, tracejado, cadeado, visto) e no
 * texto de detalhe. É o que mantém a trilha legível para quem não distingue
 * verde de âmbar.
 */

const ICONE: Record<TipoEtapa, IconeNome> = {
  licao: 'livro',
  miniquiz: 'questao',
  // A lança é do Son Hak, o guardião dos desafios: o ícone diz de quem é o nó.
  desafio: 'lanca',
  revisao: 'revisao',
}

const MARCADOR: Record<SituacaoEtapa, string> = {
  concluida: 'border-jade bg-jade text-bg',
  disponivel: 'border-aurora text-aurora bg-aurora-soft',
  bloqueada: 'border-line text-muted bg-surface',
  vazia: 'border-dashed border-line/70 text-muted bg-surface',
}

const TEXTO: Record<SituacaoEtapa, string> = {
  concluida: 'text-ink-2',
  disponivel: 'text-ink',
  bloqueada: 'text-muted',
  vazia: 'text-muted',
}

export function EtapaTrilha({
  etapa,
  atual = false,
  ultima = false,
}: {
  etapa: Etapa
  atual?: boolean
  ultima?: boolean
}) {
  const icone: IconeNome =
    etapa.situacao === 'concluida'
      ? 'check'
      : etapa.situacao === 'bloqueada'
        ? 'cadeado'
        : ICONE[etapa.tipo]

  const corpo = (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <p className={`truncate text-[13px] font-semibold ${TEXTO[etapa.situacao]}`}>
          {etapa.rotulo}
        </p>
        <p className="mt-0.5 text-[11.5px] leading-snug text-muted">{etapa.detalhe}</p>
      </div>
      {etapa.tipo !== 'licao' && etapa.situacao !== 'vazia' && etapa.progresso != null && (
        <div className="mt-1 w-14 shrink-0">
          <Barra
            valor={etapa.progresso}
            tom={etapa.situacao === 'concluida' ? 'jade' : 'aurora'}
            altura="h-1"
          />
        </div>
      )}
    </div>
  )

  return (
    <li className="relative pl-8">
      {/* Fio que liga este nó ao próximo — é o que faz a lista virar caminho. */}
      {!ultima && (
        <span
          aria-hidden
          className={`absolute left-[13px] top-7 bottom-[-10px] w-px ${
            etapa.situacao === 'concluida' ? 'bg-jade/40' : 'bg-line'
          }`}
        />
      )}

      <span
        aria-hidden
        className={`absolute left-0 top-0.5 grid h-[26px] w-[26px] place-items-center rounded-full border ${
          MARCADOR[etapa.situacao]
        } ${atual ? 'shadow-alvorada' : ''}`}
      >
        <Icone nome={icone} tamanho={14} />
      </span>

      {atual && (
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-aurora">
          Você está aqui
        </p>
      )}

      {etapa.destino ? (
        <Link
          to={etapa.destino}
          className="block rounded-lg px-2 py-1.5 transition-colors hover:bg-elevated"
        >
          {corpo}
        </Link>
      ) : (
        <div className="px-2 py-1.5">{corpo}</div>
      )}
    </li>
  )
}
