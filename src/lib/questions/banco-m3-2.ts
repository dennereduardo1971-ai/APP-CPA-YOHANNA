import { q } from './builder'

/**
 * Questões autorais — microtema 3.2 (Orientações financeiras para o cliente).
 *
 * Duas famílias de distrator dominam este bloco, e as duas descrevem condutas
 * que acontecem todo dia: atender ao pedido do cliente sem diagnóstico, e
 * apresentar rentabilidade passada como expectativa. Nenhuma das duas parece
 * grave na hora — e é exatamente por isso que precisam aparecer como
 * alternativa plausível.
 */
export const BANCO_M3_2 = [
  /* ---- c-processo-consultivo -------------------------------------------- */
  q('q-pc2-01', {
    c: 'c-processo-consultivo', tipo: 'situacao_pratica', dif: 'facil',
    hab: 'Ordenar coleta e recomendação',
    ctx: 'Um cliente chega pedindo diretamente a indicação de um fundo de investimento.',
    e: 'A conduta correta do profissional é:',
    alt: [
      ['Coletar objetivos, prazo e situação financeira antes de qualquer indicação.', true, 'Correta. Atender ao pedido sem diagnóstico é venda, não orientação.'],
      ['Indicar o fundo de melhor desempenho recente da prateleira.', false, 'Desempenho recente não é critério de adequação e nem sequer indica resultado futuro.'],
      ['Indicar o fundo mais conservador disponível, por precaução.', false, 'Conservador em excesso também pode ser inadequado ao objetivo do cliente.'],
      ['Encaminhá-lo para escolher sozinho pelo aplicativo.', false, 'Transferir a decisão não afasta o dever de orientar adequadamente.'],
    ],
    exp: 'A coleta antecede a recomendação sempre — inclusive quando o cliente já chega com o produto escolhido.',
    tags: ['processo-consultivo', 'coleta', 'atendimento'],
  }),
  q('q-pc2-02', {
    c: 'c-processo-consultivo', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer o acompanhamento como etapa do processo',
    e: 'No processo de orientação financeira, o acompanhamento periódico:',
    alt: [
      ['É etapa do processo e deve ocorrer também fora do calendário diante de evento de vida relevante.', true, 'Correta. Casamento, filho, troca de emprego e herança alteram o diagnóstico.'],
      ['É cortesia comercial, sem relação com o dever técnico.', false, 'Plano não revisado envelhece e deixa de refletir a realidade do cliente.'],
      ['Só é necessário quando o cliente solicita.', false, 'A iniciativa da revisão é do profissional, não do cliente.'],
      ['Substitui a necessidade de nova coleta em caso de mudança de situação.', false, 'É justamente a mudança de situação que exige nova coleta.'],
    ],
    exp: 'Um diagnóstico vencido não protege ninguém — nem o cliente, nem quem recomendou.',
    tags: ['processo-consultivo', 'acompanhamento', 'conceitual'],
  }),
  q('q-pc2-03', {
    c: 'c-processo-consultivo', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Identificar o gatilho de revisão fora do calendário',
    ctx: 'Um cliente com perfil traçado há três anos volta para aportar. Nesse período ele trocou de emprego e teve um filho.',
    e: 'A conduta adequada é:',
    alt: [
      ['Refazer a coleta antes do aporte, pois ambos os eventos alteram capacidade de poupança, horizonte e necessidade de proteção.', true, 'Correta. Aportar sobre o perfil antigo é usar um diagnóstico vencido.'],
      ['Executar o aporte conforme o perfil registrado, que ainda está dentro do prazo de validade.', false, 'Evento de vida relevante dispara revisão independentemente do prazo formal.'],
      ['Executar o aporte e agendar a revisão para o próximo ciclo anual.', false, 'A revisão precisa preceder a decisão que ela deveria fundamentar.'],
      ['Solicitar apenas a atualização de renda, mantendo o restante do perfil.', false, 'A chegada de um dependente altera também proteção e horizonte, não só renda.'],
    ],
    exp: 'A revisão não é formalidade: evita recomendar sobre uma realidade que já não existe.',
    tags: ['processo-consultivo', 'revisao', 'atendimento'],
  }),
  q('q-pc2-04', {
    c: 'c-processo-consultivo', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer a função do registro da coleta',
    e: 'O registro formal das informações coletadas do cliente cumpre a função de:',
    alt: [
      ['Fundamentar tecnicamente a recomendação e demonstrar, depois, em que informação ela se baseou.', true, 'Correta. São duas funções: uma técnica e outra probatória.'],
      ['Cumprir exigência burocrática sem efeito prático sobre a recomendação.', false, 'Sem os dados registrados, a recomendação vira preferência pessoal do assessor.'],
      ['Transferir ao cliente a responsabilidade integral pela decisão.', false, 'O registro documenta a base da recomendação; não transfere o dever de adequação.'],
      ['Substituir a necessidade de comunicar os riscos do produto.', false, 'São deveres distintos e cumulativos.'],
    ],
    exp: 'A defesa de quem recomendou depende de demonstrar que a informação veio do cliente e estava atualizada.',
    tags: ['processo-consultivo', 'registro', 'conceitual'],
  }),

  /* ---- c-comunicacao-risco ------------------------------------------------ */
  q('q-cr-01', {
    c: 'c-comunicacao-risco', tipo: 'conceitual', dif: 'facil',
    hab: 'Reconhecer o tratamento correto da rentabilidade passada',
    e: 'Ao apresentar um fundo de investimento a um cliente, é correto afirmar que:',
    alt: [
      ['A rentabilidade passada não constitui garantia nem indicativo de rentabilidade futura.', true, 'Correta. E o dever é substantivo, não se esgota na frase do material.'],
      ['O fundo tende a repetir a rentabilidade dos últimos doze meses.', false, 'Usar histórico como previsão é promessa disfarçada.'],
      ['O histórico permite estimar com segurança o retorno do próximo ano.', false, 'Nenhum histórico permite estimativa segura de retorno futuro.'],
      ['Fundos com bom histórico não apresentam risco relevante de perda.', false, 'Histórico favorável não elimina risco; em alguns casos o mascara.'],
    ],
    exp: 'Incluir a frase no material e usar o histórico como promessa na conversa é descumprir o dever.',
    tags: ['comunicacao', 'rentabilidade', 'conceitual'],
  }),
  q('q-cr-02', {
    c: 'c-comunicacao-risco', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Comunicar risco de forma completa',
    ctx: 'Um profissional vai apresentar um fundo multimercado a um cliente com pouca experiência em produtos de risco.',
    e: 'A comunicação de risco adequada inclui:',
    alt: [
      ['O que pode dar errado, quanto o fundo já caiu em períodos ruins e quanto tempo levou para recuperar.', true, 'Correta. Magnitude e duração, não apenas a existência do risco.'],
      ['A frase de que todo investimento tem risco, presente no material.', false, 'Frase genérica não informa e não protege ninguém.'],
      ['A rentabilidade dos últimos doze meses, para dar parâmetro.', false, 'Apresentar retorno sem contrapartida é o que calibra mal a expectativa.'],
      ['A classificação de risco atribuída pela instituição, sem detalhamento.', false, 'A classificação é ponto de partida, não substitui a explicação concreta.'],
    ],
    exp: 'Dizer "existe risco" não neutraliza vieses. O que funciona é magnitude e duração em termos concretos.',
    tags: ['comunicacao', 'risco', 'atendimento'],
  }),
  q('q-cr-03', {
    c: 'c-comunicacao-risco', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar a forma correta de confirmar a compreensão',
    e: 'Para confirmar que o cliente compreendeu os riscos apresentados, a conduta mais adequada é:',
    alt: [
      ['Pedir que ele descreva, com as próprias palavras, o que entendeu sobre o produto e seus riscos.', true, 'Correta. A reformulação expõe a lacuna antes da aplicação.'],
      ['Perguntar se ficou claro e registrar a resposta afirmativa.', false, 'A pergunta fechada quase sempre recebe "sim" e não confirma compreensão.'],
      ['Solicitar a assinatura do termo de ciência de risco.', false, 'A assinatura documenta a entrega da informação, não a compreensão dela.'],
      ['Entregar a lâmina do produto para leitura posterior.', false, 'Entrega de material não é confirmação de entendimento.'],
    ],
    exp: 'Termo assinado sem compreensão real protege o papel, não o cliente — e não evita o resgate em pânico.',
    tags: ['comunicacao', 'compreensao', 'conceitual'],
  }),
  q('q-cr-04', {
    c: 'c-comunicacao-risco', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Diagnosticar falha de comunicação em conflito com cliente',
    ctx: 'Um cliente conservador aceitou um multimercado após ouvir que "historicamente rende mais que o CDI". Três meses depois, com a cota em queda, ele resgatou no prejuízo e reclamou formalmente.',
    e: 'A leitura tecnicamente correta do ocorrido é:',
    alt: [
      ['A falha foi de comunicação: apresentou-se o retorno sem a contrapartida, e a expectativa mal calibrada levou ao resgate na baixa.', true, 'Correta. O problema não foi o produto, foi a informação que sustentou a decisão.'],
      ['A falha foi do cliente, que assinou o termo de ciência de risco.', false, 'O termo não supre a comunicação inadequada nem a expectativa mal formada.'],
      ['Não houve falha: oscilação é normal em multimercado.', false, 'A oscilação é normal; a surpresa do cliente diante dela é que indica falha de comunicação.'],
      ['A falha foi do gestor do fundo, responsável pelo desempenho negativo.', false, 'Desempenho negativo dentro do risco do mandato não é falha de gestão.'],
    ],
    exp: 'A maior parte dos conflitos não nasce da perda: nasce da perda que o cliente não esperava.',
    tags: ['comunicacao', 'expectativa', 'atendimento'],
  }),
  q('q-cr-05', {
    c: 'c-comunicacao-risco', tipo: 'conceitual', dif: 'dificil',
    hab: 'Avaliar promessa aproximada de rentabilidade',
    e: 'Dizer a um cliente que determinado fundo de risco "costuma render em torno de 12% ao ano":',
    alt: [
      ['É inadequado, pois configura promessa de rentabilidade ainda que em termos aproximados.', true, 'Correta. Aproximar não descaracteriza a promessa quando o ativo é de risco.'],
      ['É adequado, desde que o número corresponda ao histórico real do fundo.', false, 'Histórico real apresentado como expectativa continua sendo promessa.'],
      ['É adequado, pois a expressão "em torno de" afasta o caráter de garantia.', false, 'A ressalva verbal não muda como a informação é processada pelo cliente.'],
      ['É adequado se acompanhado da assinatura do termo de ciência de risco.', false, 'O termo não legitima uma comunicação inadequada.'],
    ],
    exp: 'A ancoragem faz o primeiro número mencionado dominar a percepção. É por isso que a aproximação não é inofensiva.',
    tags: ['comunicacao', 'rentabilidade', 'conduta'],
  }),
]
