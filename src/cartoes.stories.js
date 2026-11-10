import { card, stage } from './components.js';

export default {
  title: 'Componentes/Cartões',
  tags: ['autodocs'],
  args: { title: 'Ponto Campus', meta: '650 m', lines: ['Rua de exemplo, 100', 'Hoje, das 8h às 17h', 'Notebook · Celular · Cabos'], statusLabel: '' },
  argTypes: { title: { control: 'text' }, meta: { control: 'text' }, lines: { control: 'object' }, statusLabel: { control: 'text' }, statusVariant: { control: 'select', options: ['success', 'pending', 'info'] } },
  parameters: { docs: { description: { component: 'O cartão reúne informações de uma entidade. Em resultados de descarte, use a mesma ordem de dados em cada ponto para facilitar a comparação.' } } },
  render: args => stage(card(args)),
};
export const PontoDeDescarte = { name: 'Ponto de descarte' };
export const Coleta = { args: { title: 'Coleta de exemplo', meta: '09:00', lines: ['Rua de exemplo, 80', '9h às 10h · 3 itens', 'Volume previsto: 1 caixa'], statusLabel: 'Agendada', statusVariant: 'info' } };
export const Lote = { args: { title: 'Lote EC-024', meta: '10h15', lines: ['Origem: coleta de exemplo', 'Entrada no galpão'], statusLabel: 'Aguardando triagem', statusVariant: 'pending' } };

