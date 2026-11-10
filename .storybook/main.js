export default {
  stories: ['../src/**/*.stories.js'],
  framework: { name: '@storybook/html-vite', options: {} },
  addons: ['@storybook/addon-docs'],
  staticDirs: ['../public'],
  telemetry: false,
};

