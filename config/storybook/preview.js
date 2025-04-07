import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Используем декоратор для всех историй
// export const decorators = [
//   (Story) => <StyleDecorator>{Story()}</StyleDecorator>,
// ];

export const decorators = [StyleDecorator];