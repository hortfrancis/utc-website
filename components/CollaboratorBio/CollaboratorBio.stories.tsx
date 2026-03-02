import type { Meta, StoryObj } from '@storybook/nextjs';
import CollaboratorBio from './CollaboratorBio';

/**
 * Collaborator bio card used for collaborators and partners.
 *
 * - Responsive stack: image column on top (mobile), left (desktop)
 * - Shared gradient header with name and role/org
 * - Configurable 3-icon strip and color tokens
 */
const meta = {
  title: 'Organisms/CollaboratorBio',
  component: CollaboratorBio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Collaborator profile card with image, role metadata, bio, and optional contact links. Implements the selected responsive shared-gradient layout.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-4 sm:p-12 bg-linear-to-r from-(--background-faded-orange) to-(--background-faded-cyan) min-h-64 flex items-center justify-center w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CollaboratorBio>;

export default meta;
type Story = StoryObj<typeof meta>;

const BASE_ARGS = {
  name: 'Bob Blobson',
  role: 'Technical Consultant',
  org: 'Freelancer',
  children: 'Bob Blobson is the premier viscosity consultant working in this field. He brings his whole self to work.',
  photoSrc: '/images/experiments/collaborator-bio-example01.png',
  email: 'bob@blobshappening.org.uk',
  web: 'blobshappening.org.uk',
} as const;

/** Default colour treatment (orange image + orange→purple gradient). */
export const Default: Story = {
  args: {
    ...BASE_ARGS,
  },
};

/** Green colour treatment matching the selected green experiment. */
export const GreenTreatment: Story = {
  args: {
    ...BASE_ARGS,
    imageBackground: 'theme-green',
    headerGradient: 'theme-green-theme-cyan',
    iconColor: 'theme-green',
  },
};

/** Contact row gracefully handles email-only input. */
export const EmailOnly: Story = {
  args: {
    ...BASE_ARGS,
    web: undefined,
  },
};

/** Contact row gracefully handles web-only input. */
export const WebOnly: Story = {
  args: {
    ...BASE_ARGS,
    email: undefined,
  },
};

/** Override the 3-icon strip using an exact 3-icon tuple. */
export const CustomIcons: Story = {
  args: {
    ...BASE_ARGS,
    icons: ['rocket', 'planet', 'sparkle'],
    iconColor: 'theme-cyan',
    headerGradient: 'theme-cyan-theme-purple',
  },
};
