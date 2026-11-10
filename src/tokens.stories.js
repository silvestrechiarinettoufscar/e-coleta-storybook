import { el, stage, action } from './components.js';

export default { title: 'Fundamentos/Tokens', parameters: { controls: { disable: true } } };

const colors = [
  ['Primária', '--eco-primary', '#185B42'],
  ['Destaque', '--eco-highlight', '#D9F1E1'],
  ['Superfície', '--eco-surface', '#F6F9F5'],
  ['Texto principal', '--eco-ink', '#172521'],
  ['Texto secundário', '--eco-muted', '#465951'],
  ['Foco', '--eco-focus', '#284B74'],
  ['Erro', '--eco-error', '#A12326'],
  ['Borda', '--eco-border', '#C0CEC4'],
];

export const Cores = {
  render() {
    return stage(el('h1', '', 'Paleta'),
      el('div', 'eco-grid', ...colors.map(([name, token, hex]) => {
        const swatch = el('div', 'eco-swatch');
        swatch.style.background = 'var(' + token + ')';
        return el('div', 'eco-card', swatch, el('strong', '', name), el('code', 'eco-caption', hex));
      })));
  },
};

export const Tipografia = {
  render: () => stage(el('h1', '', 'Pontos próximos'),
    el('h2', '', 'Materiais aceitos'),
    el('p', '', 'Notebook, celular e cabos.'),
    el('p', 'eco-caption', 'Texto secundário · São Carlos, SP'),
    el('p', 'eco-caption', 'Inter com fontes de sistema como alternativa.')),
};

export const EspacamentoEFoco = {
  name: 'Espaçamento e foco',
  render: () => stage(el('h2', '', 'Alvos de toque e navegação'),
    el('p', '', 'Ações principais com altura mínima de 48 px e espaçamento de 12 px entre controles.'),
    el('p', 'eco-caption', 'Use Tab para ver o contorno de foco.'),
    el('div', 'eco-row', action('Continuar'), action('Voltar', { variant: 'outline' }))),
};

