import { feedback, stage } from './components.js';

export default {
  title: 'Componentes/Feedback',
  tags: ['autodocs'],
  args: { title: 'Lote registrado', message: 'Entrada finalizada com sucesso.', variant: 'success' },
  argTypes: { title: { control: 'text' }, message: { control: 'text' }, variant: { control: 'select', options: ['success','error'] } },
  render: ({ title, message, variant }) => stage(feedback(title, message, variant)),
};
export const Confirmacao = { name: 'Confirmação' };
export const Falha = { args: { title: 'Entrada pendente', message: 'Confira o peso aferido antes de finalizar a entrada.', variant: 'error' } };

