module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
};

// const path = require('path');

// module.exports = {
//   stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: [
//     '@storybook/addon-essentials',
//     '@storybook/addon-links',
//     '@storybook/addon-interactions',
//     '@storybook/addon-a11y', // Рекомендуемый аддон для проверки доступности
//   ],
//   framework: '@storybook/react',
//   core: {
//     builder: 'webpack5',
//   },
//   typescript: {
//     reactDocgen: 'react-docgen-typescript',
//     reactDocgenTypescriptOptions: {
//       compilerOptions: {
//         allowSyntheticDefaultImports: false,
//         esModuleInterop: false,
//       },
//     },
//   },
// };
