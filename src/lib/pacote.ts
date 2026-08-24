import { aplicarOverlay as aplicarNoConteudo } from './content'
import type { OverlayConteudo } from './content/overlay'
import { aplicarOverlayQuestoes } from './questions'

/**
 * Ponto único de aplicação do overlay de conteúdo.
 *
 * A ordem não é arbitrária: as questões são filtradas contra os conceitos que
 * existem DEPOIS da remontagem, para que apagar um conceito no painel não
 * deixe questões órfãs que o player não consegue explicar. Concentrar as duas
 * chamadas aqui evita que alguém as inverta em um ponto novo do código.
 */
export function aplicarOverlayLocal(overlay: OverlayConteudo) {
  aplicarNoConteudo(overlay)
  aplicarOverlayQuestoes(overlay)
}
