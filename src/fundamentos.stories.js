import { el, stage, action, card } from './components.js';

export default { title: 'Fundamentos/Visão geral', parameters: { controls: { disable: true }, layout: 'fullscreen' } };

export const Introducao = {
  name: 'Comece aqui',
  render() {
    const wrapper = stage(
      el('div', 'eco-hero eco-stack',
        el('span', 'eco-kicker', 'IHC · UFSCar · Grupo 4'),
        el('h1', '', 'Design System do E-Coleta'),
        el('p', '', 'Componentes usados para buscar pontos de descarte, registrar coletas e conferir lotes de resíduos eletroeletrônicos.'),
        el('p', 'eco-caption', 'Explore os exemplos e mude os estados no painel Controles. Os dados são fictícios.')),
      el('div', 'eco-grid',
        card({ title: 'Fundamentos', lines: ['Princípios, paleta, tipografia, espaçamento e foco.'] }),
        card({ title: 'Componentes', lines: ['Botões, campos, seleção, cartões e feedback.'] }),
        card({ title: 'Padrões', lines: ['Acessibilidade, busca e registro de triagem.'] })),
    );
    const link = el('a', '', 'Consultar diretrizes de acessibilidade do Material Design');
    link.href = 'https://m1.material.io/usability/accessibility.html';
    link.target = '_blank';
    link.rel = 'noopener';
    wrapper.firstChild.append(link);
    return wrapper;
  },
};

