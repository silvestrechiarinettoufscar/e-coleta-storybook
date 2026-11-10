import { accessibilityAction, action, el, field, stage } from './components.js';

export default {
  title: 'Padrões/Acessibilidade',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'O ícone accessibility_new do Material Design acompanha o rótulo. A demonstração aplica ampliação de texto e contraste ao exemplo local.' } } },
};

export const Painel = {
  name: 'Atalho e preferências',
  render() {
    const panel = el('section', 'eco-stack');
    panel.id = 'preferencias-acessibilidade';
    panel.hidden = true;
    panel.style.display = 'none';
    const toggle = accessibilityAction(() => {
      panel.hidden = !panel.hidden;
      panel.style.display = panel.hidden ? 'none' : '';
      toggle.setAttribute('aria-expanded', String(!panel.hidden));
    });
    toggle.setAttribute('aria-controls', panel.id);
    toggle.setAttribute('aria-expanded', 'false');
    const sample = el('p', '', 'Materiais aceitos: notebook, celular e cabos.');
    const demo = stage(el('div', 'eco-row', toggle), panel, sample);
    function preference(label, attribute) {
      const button = action(label, { variant: 'outline', onClick() {
        const active = demo.dataset[attribute] !== 'true';
        demo.dataset[attribute] = String(active);
        button.setAttribute('aria-pressed', String(active));
      } });
      button.setAttribute('aria-pressed','false');
      return button;
    }
    panel.append(el('h2', '', 'Preferências de leitura'),
      el('div', 'eco-row', preference('Aumentar texto', 'largeText'), preference('Alto contraste', 'contrast')));
    return demo;
  },
};

export const Ditado = {
  name: 'Ditado simulado',
  render() {
    const observation = field({ label: 'Observações (opcional)', multiline: true, hint: 'A transcrição fica editável antes de enviar.' });
    const message = el('p', 'eco-caption', 'Exemplo com transcrição de demonstração.');
    message.setAttribute('role', 'status');
    const button = action('Simular ditado', { variant: 'outline', onClick() {
      observation.input.value = 'Carcaça danificada.';
      message.textContent = 'Texto inserido. Você pode revisar e editar a observação.';
      observation.input.focus();
    } });
    return stage(el('h2', '', 'Observações da triagem'), observation.node, el('div','eco-row',button), message);
  },
};

