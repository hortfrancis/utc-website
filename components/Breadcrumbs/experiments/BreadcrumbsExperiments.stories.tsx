import type { Meta, StoryObj } from '@storybook/nextjs';
import { Pressable } from '../../Pressable';
import Breadcrumbs from '..';

/**
 * Breadcrumbs design experiments. Each story explores a different visual or
 * layout approach for breadcrumb navigation — separators, typography, context.
 */
const meta = {
  title: 'Experiments/Breadcrumbs',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Breadcrumb layout and styling experiments. Compare visual approaches for hierarchical navigation context.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-8 bg-theme-white text-theme-black min-w-[320px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const SAMPLE_ITEMS = [
  { label: 'Work', path: '/work' },
  { label: 'Projects', path: '/work/projects' },
  { label: 'Construct AR', current: true },
];

/* ------------------------------------------------------------------ */
/*  1 · Default (reference)                                            */
/* ------------------------------------------------------------------ */

// ─── 1 · Default Reference ─────────────────────────────────────────────────
export const DefaultReference: Story = {
  name: '1 – Default Reference',
  render: () => <Breadcrumbs items={SAMPLE_ITEMS} />,
};

/* ------------------------------------------------------------------ */
/*  2 · In page header context                                           */
/* ------------------------------------------------------------------ */

// ─── 2 · Page Header Context ─────────────────────────────────────────────────
export const PageHeaderContext: Story = {
  name: '2 – Page Header Context',
  render: () => (
    <div className="space-y-4">
      <Breadcrumbs items={SAMPLE_ITEMS} />
      <h1 className="text-3xl font-black text-theme-black">Construct AR</h1>
      <p className="text-theme-black opacity-75">
        An augmented reality experience for construction workflows.
      </p>
    </div>
  ),
};

/* ------------------------------------------------------------------ */
/*  3 · With Frame wrapper                                              */
/* ------------------------------------------------------------------ */

// ─── 3 · With Frame ──────────────────────────────────────────────────────────
export const WithFrame: Story = {
  name: '3 – With Frame',
  render: () => (
    <div className="border-4 border-theme-black rounded-br-2xl p-4 bg-theme-white">
      <Breadcrumbs items={SAMPLE_ITEMS} />
    </div>
  ),
};

/* ------------------------------------------------------------------ */
/*  4 · Cyan hover variant (prototype)                                  */
/* ------------------------------------------------------------------ */

// ─── 4 · Cyan Hover Prototype ───────────────────────────────────────────────
export const CyanHoverPrototype: Story = {
  name: '4 – Cyan Hover Prototype',
  render: () => {
    const items = SAMPLE_ITEMS;
    return (
      <nav
        className="mb-4 flex space-x-1 text-sm text-theme-black opacity-90"
        aria-label="Breadcrumb"
      >
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-1">
            {item.current ? (
              <span className="font-semibold">{item.label}</span>
            ) : (
              <Pressable
                href={item.path || '#'}
                className="font-medium hover:text-theme-cyan transition-colors focus-visible:outline-4 focus-visible:outline-theme-magenta focus-visible:outline-offset-2"
              >
                {item.label}
              </Pressable>
            )}
            {index < items.length - 1 && (
              <span className="text-theme-black/50">/</span>
            )}
          </span>
        ))}
      </nav>
    );
  },
};

/* ------------------------------------------------------------------ */
/*  5 · Chevron separator (prototype)                                    */
/* ------------------------------------------------------------------ */

// ─── 5 · Chevron Separator Prototype ─────────────────────────────────────────
export const ChevronSeparatorPrototype: Story = {
  name: '5 – Chevron Separator Prototype',
  render: () => {
    const items = SAMPLE_ITEMS;
    return (
      <nav
        className="mb-4 flex items-center gap-2 text-sm text-theme-black opacity-80"
        aria-label="Breadcrumb"
      >
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            {item.current ? (
              <span className="font-semibold">{item.label}</span>
            ) : (
              <Pressable
                href={item.path || '#'}
                className="font-medium hover:underline focus-visible:outline-4 focus-visible:outline-theme-magenta focus-visible:outline-offset-2"
              >
                {item.label}
              </Pressable>
            )}
            {index < items.length - 1 && (
              <span className="text-theme-black/40" aria-hidden>
                ›
              </span>
            )}
          </span>
        ))}
      </nav>
    );
  },
};

/* ------------------------------------------------------------------ */
/*  6 · Chevron in dark Frame                                             */
/* ------------------------------------------------------------------ */

// ─── 6 · Chevron in Dark Frame (as shipped) ──────────────────────────────────
export const ChevronInDarkFrame: Story = {
  name: '6 – Chevron in Dark Frame (as shipped)',
  render: () => <Breadcrumbs items={SAMPLE_ITEMS} />,
};

/* ------------------------------------------------------------------ */
/*  7 · Deep hierarchy                                                   */
/* ------------------------------------------------------------------ */

// ─── 7 · Deep Hierarchy ──────────────────────────────────────────────────────
export const DeepHierarchy: Story = {
  name: '7 – Deep Hierarchy',
  render: () => (
    <Breadcrumbs
      items={[
        { label: 'Work', path: '/work' },
        { label: 'Projects', path: '/work/projects' },
        { label: 'XR Experiences', path: '/work/projects/xr' },
        { label: 'Construct AR', current: true },
      ]}
    />
  ),
};
