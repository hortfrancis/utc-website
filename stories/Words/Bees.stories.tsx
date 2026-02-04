import type { Meta, StoryObj } from '@storybook/react';

function BeesWord() {
  return <span>Bees</span>;
}

const meta: Meta<typeof BeesWord> = {
  title: 'Words/Bees',
  component: BeesWord,
};

export default meta;

type Story = StoryObj<typeof BeesWord>;

export const Default: Story = {};
