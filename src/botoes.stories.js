import { action, el, stage } from './components.js';

export default {
  title: 'Componentes/Botões',
  tags: ['autodocs'],
  args: { label: 'Buscar pontos próximos', variant: 'primary', disabled: false },
  argTypes: { label: { control: 'text' }, variant: { control: 'select', options: ['primary', 'outline'] }, disabled: { control: 'boolean' } },
  parameters: { docs: { description: { component: 'Use o botão preenchido para a ação principal da tela. O botão com contorno atende ações secundárias, como voltar ou editar.' } } },
  render({ label, variant, disabled }) {
    const notice = el('p', 'eco-caption', 'Acione o botão para testar.');
    notice.setAttribute('role', 'status');
    return stage(el('div', 'eco-row', action(label, { variant, disabled, onClick() { notice.textContent = 'Ação selecionada: ' + label; } })), notice);
  },
};
export const Principal = {};
export const Secundario = { name: 'Secundário', args: { label: 'Editar categorias', variant: 'outline' } };
export const Desabilitado = { args: { label: 'Finalizar entrada', disabled: true } };

