import type { Meta, StoryObj } from '@storybook/react';

function TheWord() {
  return <span>The</span>;
}

const meta: Meta<typeof TheWord> = {
  title: 'Words/The',
  component: TheWord,
};

export default meta;

type Story = StoryObj<typeof TheWord>;

export const Default: Story = {};
