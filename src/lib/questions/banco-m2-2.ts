import { q } from './builder'

/**
 * Questões autorais — microtema 2.2 (previdência complementar, aprofundamento).
 *
 * O lote é construído sobre três confusões que aparecem juntas no balcão:
 *
 * 1. **Portabilidade × resgate.** Economicamente parecidas, tributariamente
 *    opostas. O distrator é sempre a operação que "dá no mesmo".
 * 2. **Renda temporária × renda por prazo certo.** Nomes que sugerem a mesma
 *    coisa e resultados invertidos na morte do participante.
 * 3. **Momento da opção pelo regime tributário.** Aqui a alternativa que o
 *    candidato reconhece do cursinho é a errada: a Lei 14.803/2024 mudou a
 *    regra e o material antigo não acompanhou.
 *
 * Nenhuma questão fixa valor de faixa da tabela progressiva do IR, que é
 * reajustada por lei ordinária e envelhece.
 */
export const BANCO_M2_2 = [
  /* ---- c-prev-regimes ---------------------------------------------------- */
  q('q-preg-01', {
    c: 'c-prev-regimes', tipo: 'conceitual', dif: 'facil',
    hab: 'Reproduzir a escala do regime regressivo',
    e: 'No regime regressivo de tributação da previdência complementar, a alíquota mínima e o prazo necessário para alcançá-la são:',
    alt: [
      ['10%, para recursos com prazo de acumulação superior a 10 anos.', true, 'Correta. É o piso do art. 1º, VI, da Lei 11.053/2004.'],
      ['15%, para recursos com prazo superior a 10 anos.', false, '15% é a faixa de 8 a 10 anos; acima de 10 anos cai para 10%.'],
      ['10%, para recursos com prazo superior a 8 anos.', false, 'De 8 a 10 anos a alíquota é de 15%.'],
      ['5%, para recursos com prazo superior a 12 anos.', false, 'Não existe faixa de 5% nem faixa de 12 anos na tabela.'],
    ],
    exp: 'A escala começa em 35% e cai 5 pontos a cada dois anos, até o piso de 10% acima de dez anos.',
    tags: ['previdencia', 'tributacao', 'regressivo'],
  }),
  q('q-preg-02', {
    c: 'c-prev-regimes', tipo: 'conceitual', dif: 'dificil',
    hab: 'Situar o momento da opção pelo regime tributário',
    e: 'A opção pelo regime regressivo de tributação:',
    alt: [
      ['Pode ser exercida até a obtenção do benefício ou a requisição do primeiro resgate, tornando-se irretratável a partir daí.', true, 'Correta. Redação dada pela Lei 14.803/2024 ao § 6º do art. 1º da Lei 11.053/2004.'],
      ['Deve ser feita no momento da adesão ao plano e é irretratável desde então.', false, 'Era assim até a Lei 14.803/2024. Muito material ainda repete essa regra.'],
      ['Pode ser alterada a qualquer tempo, inclusive depois de iniciado o pagamento do benefício.', false, 'O art. 3º da Lei 14.803/2024 fecha a porta: valores já pagos não admitem mudança de regime.'],
      ['Aplica-se automaticamente a todo plano cujo prazo supere dez anos.', false, 'Não há automatismo: o regime regressivo depende de opção expressa.'],
    ],
    exp: 'A irretratabilidade continua existindo — o que mudou foi o marco a partir do qual ela vale.',
    tags: ['previdencia', 'tributacao', 'atualizacao'],
  }),
  q('q-preg-03', {
    c: 'c-prev-regimes', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir tributação exclusiva de antecipação',
    e: 'Sobre a natureza da tributação em cada regime, é correto afirmar que:',
    alt: [
      ['No regressivo o imposto é exclusivo na fonte e definitivo; no progressivo, o retido é antecipação e o valor entra no ajuste anual.', true, 'Correta. É a diferença que decide se há restituição ou não.'],
      ['Em ambos o imposto retido é definitivo e não entra na declaração.', false, 'No progressivo o valor compõe a base do ajuste anual.'],
      ['Em ambos o retido é mera antecipação e pode gerar restituição.', false, 'No regressivo a tributação é exclusiva na fonte: não gera restituição.'],
      ['No regressivo o imposto é apurado apenas na declaração de ajuste.', false, 'É exatamente o oposto: exclusivo na fonte, fora do ajuste.'],
    ],
    exp: 'Quem opta pelo regressivo abre mão de deduzir despesas médicas e dependentes contra aquele rendimento.',
    tags: ['previdencia', 'tributacao', 'comparacao'],
  }),
  q('q-preg-04', {
    c: 'c-prev-regimes', tipo: 'calculo', dif: 'media',
    hab: 'Calcular o IR no regime regressivo',
    ctx: 'Um participante no regime regressivo resgata R$ 80.000,00 correspondentes a aportes com prazo de acumulação de 7 anos.',
    e: 'O imposto de renda retido nesse resgate será de:',
    alt: [
      ['R$ 16.000,00, correspondentes à alíquota de 20%.', true, 'Correta. A faixa de mais de 6 e até 8 anos é de 20%: 80.000 × 0,20 = 16.000.'],
      ['R$ 12.000,00, correspondentes à alíquota de 15%.', false, '15% é a faixa de mais de 8 e até 10 anos.'],
      ['R$ 20.000,00, correspondentes à alíquota de 25%.', false, '25% é a faixa de mais de 4 e até 6 anos.'],
      ['R$ 12.000,00, correspondentes aos 15% de antecipação do regime progressivo.', false, 'A retenção de 15% como antecipação é do regime PROGRESSIVO, não do regressivo.'],
    ],
    exp: 'Sete anos cai na faixa "acima de 6 e até 8 anos" — 20%. A confusão frequente é somar a antecipação de 15% do outro regime.',
    tags: ['previdencia', 'tributacao', 'calculo'],
  }),
  q('q-preg-05', {
    c: 'c-prev-regimes', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar a unidade de contagem do prazo de acumulação',
    e: 'No regime regressivo, o prazo de acumulação que define a alíquota é contado:',
    alt: [
      ['Por aporte, a partir da data de cada contribuição até o pagamento.', true, 'Correta. Cada contribuição tem seu próprio relógio.'],
      ['A partir da data de abertura do plano, para toda a reserva.', false, 'Um plano antigo com aportes recentes carrega alíquotas mistas.'],
      ['A partir da data em que o participante optou pelo regime regressivo.', false, 'A opção define o regime; não reinicia a contagem dos aportes.'],
      ['A partir do primeiro dia do ano-calendário seguinte a cada aporte.', false, 'A contagem corre da data do aporte, não do início do exercício seguinte.'],
    ],
    exp: 'É por isso que um plano de dezoito anos pode ter parte da reserva tributada em 35%: aportes recentes não herdam o tempo dos antigos.',
    tags: ['previdencia', 'tributacao', 'prazo'],
  }),
  q('q-preg-06', {
    c: 'c-prev-regimes', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Avaliar o regime adequado ao perfil de renda no recebimento',
    ctx: 'Uma cliente prestes a se aposentar acumulou por dezoito anos e receberá cerca de R$ 3.500 mensais de benefício, sem outra renda tributável relevante. Ela tem despesas médicas dedutíveis significativas.',
    e: 'A orientação tecnicamente mais defensável é:',
    alt: [
      ['Comparar os dois regimes, pois nesse patamar de renda a tabela progressiva pode resultar em alíquota efetiva inferior a 10% e ainda admite deduções no ajuste.', true, 'Correta. O regressivo é piso de 10%, não "sempre o menor imposto".'],
      ['Optar pelo regressivo, pois com dezoito anos de plano a alíquota de 10% é sempre a mais vantajosa.', false, 'Não é: 10% incide sobre tudo e não permite dedução alguma.'],
      ['Optar pelo progressivo apenas se a cliente tiver dependentes declarados.', false, 'Dependentes ajudam, mas a comparação não depende disso — o nível de renda já é decisivo.'],
      ['Manter o regime atual, pois a opção não pode mais ser exercida tão perto da aposentadoria.', false, 'Ao contrário: é justamente até o benefício ou o primeiro resgate que a opção pode ser feita.'],
    ],
    exp: 'Mover a opção para o fim serviu exatamente para permitir esse cálculo com informação real.',
    tags: ['previdencia', 'tributacao', 'recomendacao'],
  }),
  q('q-preg-07', {
    c: 'c-prev-regimes', tipo: 'conceitual', dif: 'media',
    hab: 'Relacionar portabilidade e prazo de acumulação',
    e: 'Na portabilidade de recursos entre planos, para efeito do regime regressivo, o prazo de acumulação do participante:',
    alt: [
      ['É computado no plano receptor, preservando o tempo já acumulado.', true, 'Correta. É o § 4º do art. 1º da Lei 11.053/2004.'],
      ['É zerado, recomeçando na data da transferência.', false, 'Zerar o prazo é efeito do RESGATE, não da portabilidade.'],
      ['É reduzido pela metade, como penalidade pela transferência.', false, 'Não existe tal redução na legislação.'],
      ['Só é preservado se a portabilidade ocorrer dentro da mesma instituição.', false, 'A preservação vale inclusive entre instituições diferentes.'],
    ],
    exp: 'É esse dispositivo que torna a troca de instituição neutra do ponto de vista tributário — e derruba o argumento de retenção do distribuidor.',
    tags: ['previdencia', 'portabilidade', 'tributacao'],
  }),
  q('q-preg-08', {
    c: 'c-prev-regimes', tipo: 'conceitual', dif: 'dificil',
    hab: 'Reconhecer a condição de dedutibilidade do PGBL',
    e: 'A dedução das contribuições a plano do tipo PGBL, no limite de 12% da renda bruta tributável, está condicionada a que o contribuinte:',
    alt: [
      ['Recolha também contribuição ao regime geral de previdência social ou a regime próprio, salvo se for beneficiário de aposentadoria ou pensão desses regimes.', true, 'Correta. É o caput do art. 11 da Lei 9.532/1997, com a ressalva do § 5º.'],
      ['Apenas declare no modelo completo, sem qualquer outra exigência.', false, 'A declaração completa é necessária, mas não suficiente: falta a contribuição ao regime público.'],
      ['Tenha mais de 45 anos de idade na data do aporte.', false, 'Não há requisito etário para a dedução.'],
      ['Mantenha o plano por prazo mínimo de dez anos.', false, 'Prazo influencia a alíquota no regressivo, não o direito à dedução.'],
    ],
    exp: 'A previdência complementar é COMPLEMENTAR: o benefício fiscal pressupõe que exista a previdência básica sendo custeada.',
    tags: ['previdencia', 'pgbl', 'tributacao'],
  }),

  /* ---- c-prev-institutos ------------------------------------------------- */
  q('q-pins-01', {
    c: 'c-prev-institutos', tipo: 'situacao_pratica', dif: 'facil',
    hab: 'Escolher o instituto adequado à troca de instituição',
    ctx: 'Um cliente quer transferir seu VGBL para outra instituição por causa da taxa de administração.',
    e: 'A orientação correta é:',
    alt: [
      ['Solicitar a portabilidade, que não caracteriza resgate nem gera incidência de imposto de renda.', true, 'Correta. E o prazo de acumulação é preservado no plano receptor.'],
      ['Resgatar o saldo e aplicá-lo no novo plano, pois o efeito é o mesmo.', false, 'O efeito não é o mesmo: o resgate tributa e zera o prazo de acumulação.'],
      ['Aguardar completar dez anos, resgatar a 10% e então reaplicar.', false, 'Pagar 10% de imposto desnecessariamente e reiniciar o relógio é pior que portar.'],
      ['Manter o plano, pois a legislação não admite transferência entre instituições.', false, 'A portabilidade entre instituições é expressamente assegurada.'],
    ],
    exp: 'Portar e resgatar parecem a mesma coisa e custam valores muito diferentes.',
    tags: ['previdencia', 'portabilidade', 'atendimento'],
  }),
  q('q-pins-02', {
    c: 'c-prev-institutos', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer a vedação de trânsito dos recursos',
    e: 'Na portabilidade de plano de previdência complementar, é VEDADO:',
    alt: [
      ['Que os recursos financeiros transitem pelo participante, sob qualquer forma.', true, 'Correta. LC 109/2001, art. 15, II, e art. 27, § 2º, I. É o que sustenta a neutralidade tributária.'],
      ['Que a transferência ocorra entre instituições de grupos econômicos diferentes.', false, 'A portabilidade entre instituições distintas é justamente a hipótese típica.'],
      ['Que o participante porte apenas parte do direito acumulado.', false, 'A vedação da lei não é essa; condições de parcialidade seguem o regulamento e a norma do supervisor.'],
      ['Que o plano receptor tenha taxa de administração maior que o de origem.', false, 'Não há vedação normativa quanto ao custo do plano de destino.'],
    ],
    exp: 'Se o dinheiro passasse pela conta do cliente, a operação seria economicamente um resgate seguido de aplicação — e tributada como tal.',
    tags: ['previdencia', 'portabilidade', 'lc109'],
  }),
  q('q-pins-03', {
    c: 'c-prev-institutos', tipo: 'conceitual', dif: 'media',
    hab: 'Definir o benefício proporcional diferido',
    e: 'O benefício proporcional diferido (BPD) é o instituto que permite ao participante:',
    alt: [
      ['Manter no plano o direito acumulado ao cessar o vínculo antes de ficar elegível, recebendo o benefício quando cumprir os requisitos.', true, 'Correta. LC 109/2001, art. 14, I.'],
      ['Sacar imediatamente a totalidade das contribuições vertidas, inclusive as do patrocinador.', false, 'Isso descreve o resgate — e o resgate alcança as contribuições do participante, não necessariamente as do patrocinador.'],
      ['Transferir o direito acumulado para outro plano.', false, 'Esse é o instituto da portabilidade.'],
      ['Manter as contribuições próprias e as do patrocinador após perda de remuneração.', false, 'Esse é o autopatrocínio.'],
    ],
    exp: 'BPD congela o direito; portabilidade o move; resgate o retira; autopatrocínio o mantém crescendo.',
    tags: ['previdencia', 'bpd', 'lc109'],
  }),
  q('q-pins-04', {
    c: 'c-prev-institutos', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Aplicar a exigência de cessação de vínculo na entidade fechada',
    ctx: 'Um empregado participante do fundo de pensão da própria empresa, ainda em atividade, quer portar seu direito acumulado para um PGBL de banco.',
    e: 'Nos termos da LC 109/2001, essa portabilidade:',
    alt: [
      ['Não é admitida enquanto não houver cessação do vínculo empregatício com o patrocinador.', true, 'Correta. É o art. 14, § 1º — regra que só existe na entidade FECHADA.'],
      ['É admitida a qualquer tempo, pois a portabilidade é direito do participante.', false, 'Na entidade aberta sim; na fechada há a exigência de cessação de vínculo.'],
      ['É admitida desde que o participante mantenha as contribuições no plano de origem.', false, 'Não há essa figura híbrida.'],
      ['Depende de autorização individual da Previc para cada participante.', false, 'A norma estabelece a condição objetiva, sem autorização caso a caso.'],
    ],
    exp: 'A rigidez do regime fechado protege a natureza previdenciária da reserva. No aberto, essa disciplina fica por conta do cliente.',
    tags: ['previdencia', 'portabilidade', 'fechada'],
  }),
  q('q-pins-05', {
    c: 'c-prev-institutos', tipo: 'conceitual', dif: 'media',
    hab: 'Aplicar a regra de carência nas coberturas de risco',
    e: 'Nos planos de previdência complementar aberta, quanto à carência das coberturas de risco, é correto afirmar que:',
    alt: [
      ['Há prazo máximo fixado pela norma e a morte ou invalidez por acidente não se sujeita a carência.', true, 'Correta. O evento acidental é excepcionado justamente por não admitir antisseleção.'],
      ['A carência é livre e pode ser fixada em qualquer prazo pela entidade.', false, 'Há limite normativo; a liberdade do regulamento é balizada.'],
      ['Toda cobertura, inclusive acidental, sujeita-se a carência de 24 meses.', false, 'Morte e invalidez acidentais são justamente a exceção.'],
      ['Não existe carência em previdência complementar, apenas em seguros.', false, 'Existe carência tanto para coberturas de risco quanto entre movimentações.'],
    ],
    exp: 'Carência existe para evitar que alguém contrate já sabendo do sinistro. Acidente, por definição, não é previsível — daí a exceção.',
    tags: ['previdencia', 'carencia', 'risco'],
  }),
  q('q-pins-06', {
    c: 'c-prev-institutos', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir portabilidade de resgate pelo efeito tributário',
    e: 'A diferença tributária entre portabilidade e resgate é que:',
    alt: [
      ['A portabilidade não gera incidência de IR e preserva o prazo de acumulação; o resgate tributa e reinicia a contagem se houver reaplicação.', true, 'Correta. É a razão pela qual portar é quase sempre melhor que sacar para reaplicar.'],
      ['Ambos são tributados, variando apenas a alíquota aplicável.', false, 'A portabilidade não é fato gerador de imposto de renda.'],
      ['A portabilidade é tributada em 10% fixos e o resgate pela tabela do regime.', false, 'Não há incidência na portabilidade, em alíquota nenhuma.'],
      ['Nenhum dos dois é tributado, pois ambos movimentam reserva previdenciária.', false, 'O resgate é tributado conforme o regime escolhido.'],
    ],
    exp: 'Portabilidade move; resgate retira. Só a retirada é fato gerador.',
    tags: ['previdencia', 'portabilidade', 'comparacao'],
  }),
  q('q-pins-07', {
    c: 'c-prev-institutos', tipo: 'aplicacao', dif: 'dificil',
    hab: 'Comparar os caminhos disponíveis ao desligado do plano fechado',
    ctx: 'Um participante de plano fechado é demitido, tem reserva relevante, emprego já garantido e nenhuma necessidade imediata de caixa.',
    e: 'Entre os institutos disponíveis, a opção que preserva integralmente o direito acumulado e o benefício futuro é:',
    alt: [
      ['O benefício proporcional diferido, que mantém o direito no plano até que ele fique elegível.', true, 'Correta. Sem necessidade de caixa, não há razão para tributar nem para restringir a reserva.'],
      ['O resgate, que devolve as contribuições e permite reaplicar onde ele preferir.', false, 'Tributa, pode implicar perda da parcela do patrocinador conforme o regulamento e zera o prazo de acumulação.'],
      ['A portabilidade para entidade aberta, por dar mais liberdade de movimentação.', false, 'Se for para entidade aberta, a integralidade terá de contratar renda vitalícia ou por prazo determinado de no mínimo quinze anos.'],
      ['O autopatrocínio, que é a única alternativa após o desligamento.', false, 'O autopatrocínio existe, mas obrigaria a assumir também a contribuição do patrocinador sem necessidade.'],
    ],
    exp: 'Sem necessidade de caixa, o instituto que menos custa é o que não mexe em nada.',
    tags: ['previdencia', 'institutos', 'aplicacao'],
  }),
  q('q-pins-08', {
    c: 'c-prev-institutos', tipo: 'verdadeiro_falso', dif: 'facil',
    hab: 'Avaliar afirmação sobre a natureza da portabilidade',
    e: 'Avalie a afirmação: "A portabilidade caracteriza uma modalidade de resgate, pois retira recursos do plano de origem."',
    alt: [
      ['Falsa: a lei afirma expressamente que a portabilidade não caracteriza resgate.', true, 'Correta. LC 109/2001, arts. 15, I, e 27, § 1º.'],
      ['Verdadeira: economicamente há saída de recursos do plano de origem.', false, 'A lei é expressa em sentido contrário, e a consequência tributária acompanha a lei.'],
      ['Verdadeira apenas quando a portabilidade for entre instituições diferentes.', false, 'A natureza do instituto não muda conforme o destino.'],
      ['Falsa apenas nos planos de entidade fechada.', false, 'A regra vale para os dois regimes.'],
    ],
    exp: 'É uma daquelas definições que a lei dá de forma expressa justamente porque a intuição diria o contrário.',
    tags: ['previdencia', 'portabilidade', 'conceitual'],
  }),

  /* ---- c-prev-rendas ----------------------------------------------------- */
  q('q-prnd-01', {
    c: 'c-prev-rendas', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir renda temporária de renda por prazo certo',
    e: 'A diferença entre a renda mensal temporária e a renda mensal por prazo certo é que, na morte do participante durante o prazo contratado:',
    alt: [
      ['Na temporária o pagamento cessa; na de prazo certo os beneficiários seguem recebendo até o fim do prazo.', true, 'Correta. A temporária é exclusiva do participante.'],
      ['Em ambas os beneficiários seguem recebendo até o fim do prazo.', false, 'A temporária cessa com a morte — é a marca do instituto.'],
      ['Em ambas o pagamento cessa imediatamente.', false, 'A de prazo certo continua aos beneficiários.'],
      ['Na temporária o saldo é pago de uma vez aos herdeiros; na de prazo certo, mensalmente.', false, 'A temporária não deixa saldo a pagar.'],
    ],
    exp: 'Nomes parecidos, resultados opostos para a família. A pergunta que separa: alguém continua recebendo?',
    tags: ['previdencia', 'renda', 'comparacao'],
  }),
  q('q-prnd-02', {
    c: 'c-prev-rendas', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar a modalidade de maior valor mensal',
    e: 'Sobre a mesma reserva acumulada, a modalidade que resulta no maior valor de renda mensal é, em regra:',
    alt: [
      ['A renda mensal vitalícia pura, porque cessa com a morte e não gera pagamento a terceiros.', true, 'Correta. Nenhuma garantia adicional está sendo comprada.'],
      ['A renda vitalícia reversível ao cônjuge, por ter prazo indeterminado maior.', false, 'Justamente por precisar durar duas vidas, ela paga menos por mês.'],
      ['A renda vitalícia com prazo mínimo garantido, por combinar as duas proteções.', false, 'A garantia mínima é custeada com redução da renda mensal.'],
      ['O pagamento único, que entrega o maior valor.', false, 'Pagamento único não é renda mensal; entrega o saldo de uma vez.'],
    ],
    exp: 'Toda garantia embutida na renda é paga com mensalidade menor. Não existe proteção de graça.',
    tags: ['previdencia', 'renda', 'conceitual'],
  }),
  q('q-prnd-03', {
    c: 'c-prev-rendas', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Recomendar modalidade compatível com a dependência financeira',
    ctx: 'Cliente de 62 anos, casado, cujo cônjuge não tem renda própria e depende integralmente dele.',
    e: 'Escolher a renda mensal vitalícia pura, por ser a de maior valor mensal, é uma decisão:',
    alt: [
      ['Inadequada sem antes comparar alternativas, pois no falecimento a renda cessa e a pessoa dependente fica sem cobertura.', true, 'Correta. A renda que mais paga é a que menos protege — e há dependência declarada.'],
      ['Adequada, pois maximizar a renda mensal beneficia o casal enquanto ambos vivem.', false, 'Beneficia enquanto ele vive; o problema começa exatamente quando ele morre.'],
      ['Inadequada em qualquer hipótese: a única opção correta é a reversível ao cônjuge.', false, 'Vitalícia pura combinada a um seguro de vida pode proteger a mesma pessoa por custo menor. A comparação é que é obrigatória.'],
      ['Irrelevante, pois a modalidade pode ser alterada depois da concessão.', false, 'A escolha da modalidade é feita na concessão e não se desfaz.'],
    ],
    exp: 'O erro não é escolher a vitalícia pura: é escolhê-la sem ter feito a comparação com quem depende do dinheiro.',
    tags: ['previdencia', 'renda', 'recomendacao'],
  }),
  q('q-prnd-04', {
    c: 'c-prev-rendas', tipo: 'conceitual', dif: 'media',
    hab: 'Descrever a renda vitalícia com prazo mínimo garantido',
    e: 'Na renda mensal vitalícia com prazo mínimo garantido, se o participante falece antes de decorrido o prazo mínimo:',
    alt: [
      ['Os beneficiários recebem os pagamentos referentes ao restante do prazo mínimo contratado.', true, 'Correta. É exatamente a garantia que se compra ao aceitar renda mensal menor.'],
      ['O pagamento cessa, pois a renda é vitalícia e a vida terminou.', false, 'Isso descreve a vitalícia PURA, sem prazo mínimo garantido.'],
      ['Os beneficiários passam a receber a renda vitaliciamente.', false, 'Isso descreve a vitalícia REVERSÍVEL ao beneficiário indicado.'],
      ['O saldo remanescente da reserva é devolvido em pagamento único.', false, 'A garantia é de continuidade dos pagamentos, não de devolução de reserva.'],
    ],
    exp: 'Três figuras próximas: pura (acaba), prazo mínimo (completa o prazo) e reversível (segue vitaliciamente a outro).',
    tags: ['previdencia', 'renda', 'conceitual'],
  }),
  q('q-prnd-05', {
    c: 'c-prev-rendas', tipo: 'aplicacao', dif: 'media',
    hab: 'Avaliar o risco de sobrevivência no pagamento único',
    e: 'Ao optar pelo pagamento único em vez de renda mensal vitalícia, o participante:',
    alt: [
      ['Assume pessoalmente o risco de sobrevivência, isto é, o risco de o dinheiro acabar antes da vida.', true, 'Correta. A renda vitalícia é justamente o instrumento que transfere esse risco à entidade.'],
      ['Elimina todo risco, pois passa a controlar integralmente os recursos.', false, 'Elimina o risco de crédito da entidade e assume o de longevidade — troca, não eliminação.'],
      ['Garante maior valor total recebido, em qualquer cenário.', false, 'Depende de quanto tempo ele viverá, que é precisamente o que não se sabe.'],
      ['Mantém o direito de converter em renda vitalícia a qualquer momento futuro.', false, 'Recebido o pagamento único, o plano se encerra.'],
    ],
    exp: 'Renda vitalícia é seguro contra viver muito. Quem saca tudo cancela esse seguro.',
    tags: ['previdencia', 'renda', 'longevidade'],
  }),
  q('q-prnd-06', {
    c: 'c-prev-rendas', tipo: 'conceitual', dif: 'dificil',
    hab: 'Reconhecer o que determina o valor da renda convertida',
    e: 'O valor da renda mensal obtida na conversão da reserva depende, além do saldo acumulado, principalmente:',
    alt: [
      ['Da tábua biométrica e da taxa de juros garantida previstas no plano contratado.', true, 'Correta. Por isso comparar planos exige olhar o regulamento, não só o extrato.'],
      ['Exclusivamente da rentabilidade obtida durante a fase de acumulação.', false, 'A rentabilidade forma o saldo; a conversão em renda depende de tábua e taxa.'],
      ['Da taxa Selic vigente na data da concessão do benefício.', false, 'A taxa relevante é a garantida em contrato, não a taxa corrente de política monetária.'],
      ['Da alíquota do regime tributário escolhido pelo participante.', false, 'O regime tributário afeta o líquido recebido, não o cálculo atuarial da renda.'],
    ],
    exp: 'Tábua mais longeva distribui a mesma reserva por mais meses e reduz a renda. É informação de regulamento, e raramente aparece no material de venda.',
    tags: ['previdencia', 'renda', 'atuarial'],
  }),
  q('q-prnd-07', {
    c: 'c-prev-rendas', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Selecionar modalidade para dependentes menores',
    ctx: 'Um participante viúvo, com dois filhos menores, quer garantir renda a eles caso venha a falecer antes de completarem a maioridade.',
    e: 'Entre as modalidades disponíveis, a que atende diretamente a esse objetivo é:',
    alt: [
      ['A renda vitalícia reversível ao cônjuge com continuidade aos menores, ou a renda por prazo certo dimensionada até a maioridade.', true, 'Correta. Ambas mantêm pagamento aos dependentes após a morte do titular.'],
      ['A renda mensal temporária, que já prevê prazo definido.', false, 'A temporária cessa com a morte do participante: não deixa nada aos filhos.'],
      ['A renda vitalícia pura, por oferecer o maior valor mensal enquanto ele vive.', false, 'Cessa com a morte — é justamente o cenário do qual ele quer proteger os filhos.'],
      ['O pagamento único, para que os filhos herdem o saldo.', false, 'O pagamento único encerra o plano em vida; o que restar entra em inventário, sem renda programada.'],
    ],
    exp: 'A pergunta que resolve toda questão de modalidade: na morte do titular, alguém continua recebendo?',
    tags: ['previdencia', 'renda', 'atendimento'],
  }),
  q('q-prnd-08', {
    c: 'c-prev-rendas', tipo: 'verdadeiro_falso', dif: 'facil',
    hab: 'Avaliar afirmação sobre o custo das garantias',
    e: 'Avalie a afirmação: "Escolher uma renda reversível ao beneficiário não altera o valor mensal recebido pelo participante, pois a reversão só se aplica após a morte."',
    alt: [
      ['Falsa: a reversão é precificada desde o início e reduz o valor da renda mensal.', true, 'Correta. A mesma reserva precisa sustentar duas vidas em vez de uma.'],
      ['Verdadeira: como o pagamento ao beneficiário só começa depois, não há custo prévio.', false, 'O cálculo atuarial considera a expectativa de ambos desde a concessão.'],
      ['Verdadeira, desde que o beneficiário seja mais jovem que o participante.', false, 'Beneficiário mais jovem aumenta o custo, não o elimina.'],
      ['Falsa apenas nos planos de entidade fechada.', false, 'A lógica atuarial é a mesma nos dois regimes.'],
    ],
    exp: 'Toda proteção embutida na renda tem preço, e o preço é cobrado em mensalidade menor desde o primeiro pagamento.',
    tags: ['previdencia', 'renda', 'conceitual'],
  }),
]
