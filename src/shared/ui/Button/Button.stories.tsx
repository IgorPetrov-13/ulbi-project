import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';


const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    children: 'CLEAR',
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'OUTLINE',
    theme: ThemeButton.OUTLINE,
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'CLEAR INVERTED',
    theme: ThemeButton.CLEAR_INVERTED,
  },
};
