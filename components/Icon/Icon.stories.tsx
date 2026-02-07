import type { Meta, StoryObj } from '@storybook/react';
import Icon, { iconNames } from './Icon';
import type { IconName, IconWeight } from './Icon';

/**
 * Icon component wrapping Phosphor Icons. Select from the curated registry
 * by name. Defaults to **fill** weight for the acid design aesthetic.
 *
 * To add icons: import from `@phosphor-icons/react` and add to the registry
 * in `Icon.tsx`.
 */
const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Phosphor icon wrapper. Takes a `name` string from the curated registry, plus optional `size`, `color`, and `weight` props. Defaults to fill weight.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
      description: 'Icon name from the registry',
    },
    size: {
      control: { type: 'number', min: 12, max: 96, step: 4 },
      description: 'Pixel size',
    },
    color: {
      control: 'color',
      description: 'CSS color (defaults to currentColor)',
    },
    weight: {
      control: 'select',
      options: ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'] as IconWeight[],
      description: 'Phosphor weight variant',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ------------------------------------------------------------------ */
/*  Interactive playground                                              */
/* ------------------------------------------------------------------ */

export const Playground: Story = {
  args: {
    name: 'cube',
    size: 48,
    weight: 'fill',
  },
};

/* ------------------------------------------------------------------ */
/*  All weights                                                        */
/* ------------------------------------------------------------------ */

const weights: IconWeight[] = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'];

export const AllWeights: Story = {
  args: { name: 'cube', size: 48 },
  render: (args) => (
    <div className="flex gap-6 items-end">
      {weights.map((w) => (
        <div key={w} className="flex flex-col items-center gap-2">
          <Icon {...args} weight={w} />
          <span className="text-[10px] text-theme-black/60 font-mono">{w}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Same icon in all six Phosphor weight variants. Fill is the default for the acid design style.',
      },
    },
  },
};

/* ------------------------------------------------------------------ */
/*  Theme colors                                                       */
/* ------------------------------------------------------------------ */

const themeColors = [
  { name: 'black', value: 'var(--theme-black)' },
  { name: 'cyan', value: 'var(--theme-cyan)' },
  { name: 'orange', value: 'var(--theme-orange)' },
  { name: 'purple', value: 'var(--theme-purple)' },
  { name: 'magenta', value: 'var(--theme-magenta)' },
  { name: 'green', value: 'var(--theme-green)' },
];

export const ThemeColors: Story = {
  args: { name: 'lightning', size: 48, weight: 'fill' },
  render: (args) => (
    <div className="flex gap-6 items-end">
      {themeColors.map((c) => (
        <div key={c.name} className="flex flex-col items-center gap-2">
          <Icon {...args} color={c.value} />
          <span className="text-[10px] text-theme-black/60 font-mono">{c.name}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon rendered in each theme color. Pass any CSS color value via the `color` prop.',
      },
    },
  },
};

/* ------------------------------------------------------------------ */
/*  Size scale                                                         */
/* ------------------------------------------------------------------ */

const sizes = [16, 24, 32, 48, 64, 96];

export const Sizes: Story = {
  args: { name: 'rocket', weight: 'fill' },
  render: (args) => (
    <div className="flex gap-6 items-end">
      {sizes.map((s) => (
        <div key={s} className="flex flex-col items-center gap-2">
          <Icon {...args} size={s} />
          <span className="text-[10px] text-theme-black/60 font-mono">{s}px</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon at various pixel sizes. Size sets both width and height.',
      },
    },
  },
};

/* ------------------------------------------------------------------ */
/*  Full registry                                                      */
/* ------------------------------------------------------------------ */

/** Group icons by category for the gallery. */
const iconGroups: { label: string; icons: IconName[] }[] = [
  {
    label: 'XR / Tech',
    icons: ['cube', 'cube-transparent', 'virtual-reality', 'globe', 'globe-hemisphere', 'monitor', 'device-mobile', 'wifi', 'lightning', 'broadcast', 'atom', 'circuit-board'],
  },
  {
    label: 'Creative / Work',
    icons: ['pencil', 'paintbrush', 'camera', 'image', 'video-camera', 'film-strip', 'code', 'browsers', 'palette'],
  },
  {
    label: 'Communication / News',
    icons: ['newspaper', 'megaphone', 'envelope', 'chat', 'play-circle', 'video', 'rss'],
  },
  {
    label: 'Navigation / UI',
    icons: ['arrow-right', 'arrow-left', 'arrow-up', 'arrow-down', 'x', 'check', 'plus', 'minus', 'gear', 'search', 'house', 'list', 'user', 'users', 'eye', 'share'],
  },
  {
    label: 'Fun / Misc',
    icons: ['paw-print', 'smiley', 'star', 'heart', 'rocket', 'sparkle', 'planet', 'alien'],
  },
];

export const FullRegistry: Story = {
  args: { name: 'cube', size: 32, weight: 'fill' },
  render: (args) => (
    <div className="flex flex-col gap-6 max-w-2xl">
      {iconGroups.map((group) => (
        <div key={group.label}>
          <div className="text-xs font-bold text-theme-black/60 mb-2 uppercase tracking-wider">
            {group.label}
          </div>
          <div className="flex flex-wrap gap-3">
            {group.icons.map((iconName) => (
              <div
                key={iconName}
                className="flex flex-col items-center gap-1 w-16"
                title={iconName}
              >
                <Icon name={iconName} size={args.size} weight={args.weight} />
                <span className="text-[8px] text-theme-black/50 font-mono text-center leading-tight truncate w-full">
                  {iconName}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All icons in the curated registry, grouped by category. Use the weight control to preview different variants.',
      },
    },
  },
};
