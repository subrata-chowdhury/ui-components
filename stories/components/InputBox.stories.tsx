import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import InputBox from './InputBox';

const meta = {
  component: InputBox,
} satisfies Meta<typeof InputBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "filled",
    size: "sm"
  }
};