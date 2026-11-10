let nextId = 0;

export function el(tag, className, ...children) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  node.append(...children.filter(child => child !== null && child !== undefined));
  return node;
}

export function stage(...content) {
  return el('div', 'eco eco-stage', el('div', 'eco-stack', ...content));
}

export function action(label, { variant = 'primary', disabled = false, onClick } = {}) {
  const button = el('button', variant === 'primary' ? 'eco-button' : 'eco-button eco-button--' + variant, label);
  button.type = 'button';
  button.disabled = disabled;
  if (onClick) button.addEventListener('click', onClick);
  return button;
}

export function accessibilityIcon() {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '24');
  svg.setAttribute('height', '24');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(ns, 'path');
  path.setAttribute('fill', 'currentColor');
  path.setAttribute('d', 'M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z');
  svg.append(path);
  return svg;
}

export function accessibilityAction(onClick) {
  const button = action('Acessibilidade', { variant: 'access', onClick });
  button.prepend(accessibilityIcon());
  return button;
}

export function chip(label, selected = false) {
  const check = el('span', 'eco-chip__check', '✓');
  check.setAttribute('aria-hidden', 'true');
  const button = el('button', 'eco-chip', check, label);
  button.type = 'button';
  button.setAttribute('aria-pressed', String(selected));
  button.addEventListener('click', () => {
    button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') === 'false'));
  });
  return button;
}

export function status(label, variant = 'success') {
  return el('span', 'eco-badge eco-badge--' + variant, label);
}

export function card({ title, meta, lines = [], statusLabel, statusVariant }) {
  const header = el('div', 'eco-card__head', el('h3', '', title), meta ? el('strong', 'eco-caption', meta) : null);
  return el('article', 'eco-card', header,
    ...lines.map(line => el('p', 'eco-caption', line)),
    statusLabel ? status(statusLabel, statusVariant) : null);
}

export function field({ label, value = '', hint = '', error = '', multiline = false, numeric = false }) {
  const id = 'eco-campo-' + ++nextId;
  const title = el('label', '', label);
  title.htmlFor = id;
  const input = el(multiline ? 'textarea' : 'input', '');
  input.id = id;
  input.value = value;
  if (numeric) input.inputMode = 'decimal';
  if (error) input.setAttribute('aria-invalid', 'true');
  const message = error || hint;
  const description = message ? el('span', error ? 'eco-caption eco-error' : 'eco-caption', message) : null;
  if (description) {
    description.id = id + '-ajuda';
    input.setAttribute('aria-describedby', description.id);
  }
  return { node: el('div', 'eco-field', title, input, description), input };
}

export function feedback(title, message, variant = 'success') {
  const result = el('div', variant === 'error' ? 'eco-feedback eco-feedback--error' : 'eco-feedback',
    el('strong', '', title), el('p', '', message));
  result.setAttribute('role', variant === 'error' ? 'alert' : 'status');
  return result;
}

