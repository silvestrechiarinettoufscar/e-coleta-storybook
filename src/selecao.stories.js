import { chip, el, stage, status } from './components.js';

export default { title: 'Componentes/Seleção e estados', tags: ['autodocs'] };

export const Materiais = {
  name: 'Seleção de materiais',
  args: { label: 'Notebook', selected: true },
  argTypes: { label: { control: 'text' }, selected: { control: 'boolean' } },
  render: ({ label, selected }) => stage(el('h2', '', 'O que você quer descartar?'),
    el('div', 'eco-row', chip(label, selected), chip('Celular'), chip('Cabos'))),
};

export const Selo = {
  name: 'Selo de situação',
  args: { label: 'Aguardando triagem', variant: 'pending' },
  argTypes: { label: { control: 'text' }, variant: { control: 'select', options: ['pending','success','info'] } },
  render: ({ label, variant }) => stage(el('div', 'eco-row', status(label, variant))),
};

