import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import InputBox from './InputBox';
import { useState } from 'react';

const meta = {
  component: InputBox,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: { action: "changed" }, // 👈 shows event in Actions tab
  },
} satisfies Meta<typeof InputBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: "filled",
    size: "sm",
    label: "Small Filled Input"
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    size: "md",
    label: "Medium Outlined Input"
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "lg",
    label: "Large Ghost Input"
  },
};

export const Error: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    label: "Small Outlined Input",
    invalid: true,
    errorMessage: "Please provide a valid value"
  },
};

export const Disabled: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    label: "Disabled Input",
    disabled: true
  },
};

export const Password: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    label: "Password Input",
    type: "password",
    passwordToggle: true
  },
};


export const Clear: Story = {
  render: (args) => {
    const [value, setValue] = useState("Clear me");

    return (
      <InputBox
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    variant: "outlined",
    size: "sm",
    label: "Clear Input",
    clearable: true,
  },
};

export const HelperText: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    label: "Input with Helper Text",
    helperText: "This is some helper text"
  },
};

export const Loading: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    label: "Input with Loading",
    loading: true
  },
};
