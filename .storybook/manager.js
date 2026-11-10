import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'E-Coleta · Design System',
    brandImage: './marca.svg',
    colorPrimary: '#195941',
    colorSecondary: '#195941',
    appBg: '#F5F8F4',
    textColor: '#172521',
    fontBase: 'Inter, Segoe UI, sans-serif',
  }),
});

