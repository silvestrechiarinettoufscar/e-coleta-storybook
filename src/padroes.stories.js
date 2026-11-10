import { action, card, el, feedback, field, stage } from './components.js';

export default { title: 'Padrões/Fluxos do projeto', parameters: { controls: { disable: true } } };

export const Resultados = {
  name: 'Resultados de descarte',
  render() {
    return stage(el('h1', '', 'Pontos próximos'),
      el('p', 'eco-caption', '2 pontos aceitam todos os materiais. Ordenados por distância.'),
      card({ title: 'Ponto Campus', meta: '650 m', lines: ['Rua de exemplo, 100', 'Hoje, das 8h às 17h', 'Notebook · Celular · Cabos'] }),
      card({ title: 'Ponto Centro', meta: '1,4 km', lines: ['Rua de exemplo, 240', 'Hoje, das 9h às 16h', 'Notebook · Celular · Cabos'] }));
  },
};

export const Triagem = {
  name: 'Registro de triagem',
  render() {
    const category = field({ label: 'Categoria', value: 'Notebook' });
    const count = field({ label: 'Quantidade', value: '1', numeric: true });
    const weight = field({ label: 'Peso aferido (kg)', value: '2,4', numeric: true });
    const result = el('div','eco-stack');
    const button = action('Revisar categoria', { onClick() {
      const units = Number(count.input.value);
      const kilos = Number(weight.input.value.trim().replace(',', '.'));
      if (!category.input.value.trim() || !Number.isInteger(units) || units < 1 || !Number.isFinite(kilos) || kilos <= 0) {
        result.replaceChildren(feedback('Dados pendentes', 'Informe uma categoria, uma quantidade inteira e um peso positivo.', 'error'));
        return;
      }
      result.replaceChildren(feedback('Categoria pronta para revisão', category.input.value.trim() + ' · ' + units + ' un. · ' + kilos.toLocaleString('pt-BR') + ' kg'));
    } });
    return stage(el('h1', '', 'Triagem do lote'), category.node, count.node, weight.node, el('div','eco-row',button), result);
  },
};

