import { el, stage } from './components.js';

export default { title: 'Fundamentos/Princípios', parameters: { controls: { disable: true } } };

const principles = [
  {
    title: 'Uma tarefa por tela, com a ação principal evidente',
    text: 'Cada tela tem um objetivo e um único botão principal, na base. Textos longos ficam fora do caminho até a tarefa.',
    origin: 'Benchmark (evitar textos longos antes da ação) · RNF01 · Design Rationale, mapa 1',
    examples: [['Botão principal', 'componentes-botões--principal'], ['Botão secundário', 'componentes-botões--secundario']],
  },
  {
    title: 'Mostrar o que importa antes de alguém se deslocar',
    text: 'Materiais aceitos, horário, distância e volume previsto aparecem antes de a pessoa sair de casa ou de o caminhão sair do galpão.',
    origin: 'Beatriz, sem carro, e Márcio, que quer evitar viagens perdidas · RF03 e RF07',
    examples: [['Cartão de ponto de descarte', 'componentes-cartões--ponto-de-descarte'], ['Cartão de coleta', 'componentes-cartões--coleta'], ['Resultados de descarte', 'padrões-fluxos-do-projeto--resultados']],
  },
  {
    title: 'Feito para mãos ocupadas e condições difíceis',
    text: 'Alvos de toque grandes, alto contraste, texto legível sob reflexo e ditado como alternativa à digitação.',
    origin: 'Márcio, com o celular no painel, e Valdir, de luvas · RNF04, RNF05, RF16 a RF18 · Design Universal: baixo esforço físico (Aula 2)',
    examples: [['Espaçamento e foco', 'fundamentos-tokens--espacamento-e-foco'], ['Cores', 'fundamentos-tokens--cores'], ['Ditado simulado', 'padrões-acessibilidade--ditado']],
  },
  {
    title: 'Tolerante a erros e interrupções',
    text: 'Revisão antes de finalizar, campos opcionais de fato opcionais e correção possível depois.',
    origin: 'Valdir, interrompido com frequência · RF14 e RNF03 · Design Rationale, mapa 2 · Design Universal: tolerância ao erro (Aula 2)',
    examples: [['Registro de triagem', 'padrões-fluxos-do-projeto--triagem'], ['Campo com erro', 'componentes-campos-de-formulário--com-erro'], ['Observação opcional', 'componentes-campos-de-formulário--observacao']],
  },
  {
    title: 'Toda ação termina com uma confirmação clara',
    text: 'A mensagem diz o que foi concluído, como “Coleta concluída” ou “Lote registrado”, e não só “Sucesso”.',
    origin: 'RNF06',
    examples: [['Confirmação', 'componentes-feedback--confirmacao'], ['Falha', 'componentes-feedback--falha']],
  },
  {
    title: 'Acessibilidade visível, não escondida',
    text: 'O atalho fica no cabeçalho, com ícone e rótulo. A informação nunca depende só da cor.',
    origin: 'Design Rationale, mapa 3 · RF16 a RF18 · Design Universal: informação perceptível (Aula 2)',
    examples: [['Atalho e preferências', 'padrões-acessibilidade--painel'], ['Seleção de materiais', 'componentes-seleção-e-estados--materiais']],
  },
];

function storyLink(label, id) {
  const link = el('a', '', label);
  link.href = './?path=/story/' + encodeURIComponent(id);
  link.target = '_top';
  return link;
}

export const Principios = {
  name: 'Princípios de design',
  render() {
    return stage(
      el('div', 'eco-stack',
        el('span', 'eco-kicker', 'Fundamentos'),
        el('h1', '', 'Princípios de design'),
        el('p', '', 'Seis princípios orientam as decisões do E-Coleta e do E-Coleta Profissional. Cada um indica de onde veio e onde aparece neste catálogo.')),
      el('ol', 'eco-principles',
        ...principles.map((item, index) => el('li', 'eco-card eco-principle',
          el('div', 'eco-principle__head',
            el('span', 'eco-principle__number', String(index + 1).padStart(2, '0')),
            el('h2', '', item.title)),
          el('p', '', item.text),
          el('p', 'eco-caption', el('strong', '', 'Origem: '), item.origin),
          el('p', 'eco-caption eco-principle__links', el('strong', '', 'No catálogo: '),
            ...item.examples.flatMap(([label, id], i) => [i ? ' · ' : null, storyLink(label, id)]))))),
      el('p', 'eco-caption', 'Os princípios partem das proto-personas, dos cenários e do Benchmark do Pacote 1. São hipóteses de projeto que ainda precisam ser validadas com usuários.'),
    );
  },
};
