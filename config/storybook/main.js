module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
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