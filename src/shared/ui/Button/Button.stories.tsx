import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  children: 'CLEAR',
  theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'OUTLINE',
  theme: ThemeButton.OUTLINE,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'CLEAR INVERTED',
  theme: ThemeButton.CLEAR_INVERTED,
};
