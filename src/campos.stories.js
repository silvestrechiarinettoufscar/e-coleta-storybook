import { field, stage } from './components.js';

export default {
  title: 'Componentes/Campos de formulário',
  tags: ['autodocs'],
  args: { label: 'Peso aferido (kg)', value: '2,4', hint: 'Informe o peso em quilogramas.', error: '', multiline: false, numeric: true },
  argTypes: { label: { control: 'text' }, value: { control: 'text' }, hint: { control: 'text' }, error: { control: 'text' }, multiline: { control: 'boolean' }, numeric: { control: 'boolean' } },
  parameters: { docs: { description: { component: 'O rótulo fica visível acima do valor. Mensagens de erro descrevem o problema em texto e permanecem associadas ao campo.' } } },
  render: args => stage(field(args).node),
};
export const Preenchido = {};
export const ComErro = { args: { value: '-1', error: 'Informe um peso maior que zero.' } };
export const Observacao = { name: 'Observação opcional', args: { label: 'Observações (opcional)', value: '', hint: 'Exemplo: carcaça danificada.', multiline: true, numeric: false } };

