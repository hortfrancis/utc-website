import type { Meta, StoryObj } from '@storybook/nextjs';
import Icon from '../../Icon/Icon';

/**
 * Button design experiments. Each story explores a different visual approach
 * for an opinionated, high-affordance Button molecule.
 *
 * Each experiment renders three variants: text-only, icon+text, and icon-only,
 * so we can evaluate how the pattern scales across content types.
 *
 * These are raw HTML/Tailwind prototypes — not using the existing Button
 * component — since we're exploring what Button *should* become.
 */
const meta = {
  title: 'Experiments/Buttons',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Button design experiments. Compare visual approaches for an opinionated Button molecule with clear affordance.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-12 bg-linear-to-r from-(--background-faded-orange) to-(--background-faded-cyan) min-h-64 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Renders text-only, icon+text, and icon-only variants in a row. */
function ButtonRow({ children }: { children: (variant: 'text' | 'icon-text' | 'icon') => React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        {children('text')}
        {children('icon-text')}
        {children('icon')}
      </div>
    </div>
  );
}

/** Standard content for each variant. */
function ButtonContent({ variant, iconClass = 'text-current' }: { variant: 'text' | 'icon-text' | 'icon'; iconClass?: string }) {
  switch (variant) {
    case 'text':
      return <span className="font-bold">Explore</span>;
    case 'icon-text':
      return (
        <span className="flex items-center gap-2 font-bold">
          Explore
          <Icon name="arrow-right" size={18} className={iconClass} />
        </span>
      );
    case 'icon':
      return <Icon name="arrow-right" size={20} className={iconClass} />;
  }
}

/* ------------------------------------------------------------------ */
/*  1. Accent Bar                                                      */
/* ------------------------------------------------------------------ */

/**
 * **Accent Bar** — Vertical gradient strip signals interactivity (the design
 * system's existing pattern). Content area is clean with shared border weight.
 *
 * Hover: accent shifts gradient, content area gets subtle background.
 */
export const AccentBar: Story = {
  render: () => (
    <ButtonRow>
      {(variant) => (
        <button
          key={variant}
          type="button"
          className="group flex items-stretch cursor-pointer"
        >
          {/* Accent strip */}
          <div className="w-3 border-4 border-r-0 border-theme-black bg-linear-to-b from-theme-magenta to-theme-green group-hover:from-theme-cyan group-hover:to-theme-purple transition-all duration-200" />
          {/* Content */}
          <div className="px-5 py-2.5 border-4 border-theme-black text-theme-black group-hover:bg-theme-black/5 transition-colors duration-200">
            <ButtonContent variant={variant} />
          </div>
        </button>
      )}
    </ButtonRow>
  ),
};

/* ------------------------------------------------------------------ */
/*  2. Filled Primary                                                  */
/* ------------------------------------------------------------------ */

/**
 * **Filled Primary** — Solid dark fill, white text. Thick border. Selective
 * rounded corner (stamp/badge). The bold, conventional CTA.
 *
 * Hover: shifts to cyan background, dark text.
 */
export const FilledPrimary: Story = {
  render: () => (
    <ButtonRow>
      {(variant) => (
        <button
          key={variant}
          type="button"
          className="px-5 py-2.5 border-4 border-theme-black rounded-br-2xl bg-theme-black text-theme-white font-bold cursor-pointer hover:bg-theme-cyan hover:text-theme-black transition-colors duration-200"
        >
          <ButtonContent variant={variant} />
        </button>
      )}
    </ButtonRow>
  ),
};

/* ------------------------------------------------------------------ */
/*  3. Outlined Secondary                                              */
/* ------------------------------------------------------------------ */

/**
 * **Outlined Secondary** — Transparent background, thick border, dark text.
 * The quieter counterpart to Filled.
 *
 * Hover: fills with dark background, white text.
 */
export const OutlinedSecondary: Story = {
  render: () => (
    <ButtonRow>
      {(variant) => (
        <button
          key={variant}
          type="button"
          className="px-5 py-2.5 border-4 border-theme-black rounded-bl-2xl bg-transparent text-theme-black font-bold cursor-pointer hover:bg-theme-black hover:text-theme-white transition-colors duration-200"
        >
          <ButtonContent variant={variant} />
        </button>
      )}
    </ButtonRow>
  ),
};

/**
 * **Outlined Cyan** — Same as Outlined Secondary but fills with cyan on hover
 * instead of black. Keeps dark text for contrast.
 */
export const OutlinedCyan: Story = {
  render: () => (
    <ButtonRow>
      {(variant) => (
        <button
          key={variant}
          type="button"
          className="px-5 py-2.5 border-4 border-theme-black rounded-bl-2xl bg-transparent text-theme-black font-bold cursor-pointer hover:bg-theme-cyan transition-colors duration-200"
        >
          <ButtonContent variant={variant} />
        </button>
      )}
    </ButtonRow>
  ),
};

/* ------------------------------------------------------------------ */
/*  4. Pill / Rounded                                                  */
/* ------------------------------------------------------------------ */

/**
 * **Pill** — Fully rounded, solid fill. Tests whether full rounding reads
 * as CTA in this design system or conflicts with the "selective curve"
 * philosophy.
 *
 * Hover: background shifts to cyan.
 */
export const Pill: Story = {
  render: () => (
    <ButtonRow>
      {(variant) => (
        <button
          key={variant}
          type="button"
          className="px-6 py-2.5 rounded-full border-4 border-theme-black bg-theme-black text-theme-white font-bold cursor-pointer hover:bg-theme-cyan hover:text-theme-black transition-colors duration-200"
        >
          <ButtonContent variant={variant} />
        </button>
      )}
    </ButtonRow>
  ),
};

/* ------------------------------------------------------------------ */
/*  Comparison: all approaches side by side                            */
/* ------------------------------------------------------------------ */

/**
 * **Comparison** — All approaches rendered together for quick visual
 * comparison. Each row is labelled with the approach name.
 */
export const Comparison: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* Accent Bar */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-theme-black/50 uppercase tracking-widest">Accent Bar</span>
        <div className="flex items-center gap-4">
          {(['text', 'icon-text', 'icon'] as const).map((variant) => (
            <button key={variant} type="button" className="group flex items-stretch cursor-pointer">
              <div className="w-3 border-4 border-r-0 border-theme-black bg-linear-to-b from-theme-magenta to-theme-green group-hover:from-theme-cyan group-hover:to-theme-purple transition-all duration-200" />
              <div className="px-5 py-2.5 border-4 border-theme-black text-theme-black group-hover:bg-theme-black/5 transition-colors duration-200">
                <ButtonContent variant={variant} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Filled Primary */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-theme-black/50 uppercase tracking-widest">Filled Primary</span>
        <div className="flex items-center gap-4">
          {(['text', 'icon-text', 'icon'] as const).map((variant) => (
            <button key={variant} type="button" className="px-5 py-2.5 border-4 border-theme-black rounded-br-2xl bg-theme-black text-theme-white font-bold cursor-pointer hover:bg-theme-cyan hover:text-theme-black transition-colors duration-200">
              <ButtonContent variant={variant} />
            </button>
          ))}
        </div>
      </div>

      {/* Outlined Secondary */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-theme-black/50 uppercase tracking-widest">Outlined Secondary</span>
        <div className="flex items-center gap-4">
          {(['text', 'icon-text', 'icon'] as const).map((variant) => (
            <button key={variant} type="button" className="px-5 py-2.5 border-4 border-theme-black rounded-bl-2xl bg-transparent text-theme-black font-bold cursor-pointer hover:bg-theme-black hover:text-theme-white transition-colors duration-200">
              <ButtonContent variant={variant} />
            </button>
          ))}
        </div>
      </div>

      {/* Outlined Cyan */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-theme-black/50 uppercase tracking-widest">Outlined Cyan</span>
        <div className="flex items-center gap-4">
          {(['text', 'icon-text', 'icon'] as const).map((variant) => (
            <button key={variant} type="button" className="px-5 py-2.5 border-4 border-theme-black rounded-bl-2xl bg-transparent text-theme-black font-bold cursor-pointer hover:bg-theme-cyan transition-colors duration-200">
              <ButtonContent variant={variant} />
            </button>
          ))}
        </div>
      </div>

      {/* Pill */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-theme-black/50 uppercase tracking-widest">Pill</span>
        <div className="flex items-center gap-4">
          {(['text', 'icon-text', 'icon'] as const).map((variant) => (
            <button key={variant} type="button" className="px-6 py-2.5 rounded-full border-4 border-theme-black bg-theme-black text-theme-white font-bold cursor-pointer hover:bg-theme-cyan hover:text-theme-black transition-colors duration-200">
              <ButtonContent variant={variant} />
            </button>
          ))}
        </div>
      </div>
    </div>
  ),
};

/* ------------------------------------------------------------------ */
/*  Focus Options                                                      */
/* ------------------------------------------------------------------ */

/**
 * **Focus Options** — Compare focus-visible treatments on the Filled Primary
 * button. Tab through to see each approach. Each row uses a different focus style.
 */
/** Shared base classes for focus experiment buttons. */
const focusBase = "px-5 py-2.5 border-4 border-theme-black rounded-br-2xl bg-theme-black text-theme-white font-bold cursor-pointer hover:bg-theme-cyan hover:text-theme-black transition-colors duration-200 outline-0";

export const FocusOptions: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* 1. Offset cyan outline */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-theme-black/50 uppercase tracking-widest">Offset Cyan Outline</span>
        <div className="flex items-center gap-4">
          {(['text', 'icon-text', 'icon'] as const).map((variant) => (
            <button
              key={variant}
              type="button"
              className={`${focusBase} focus-visible:outline-2 focus-visible:outline-[var(--theme-cyan)] focus-visible:outline-offset-4`}
            >
              <ButtonContent variant={variant} />
            </button>
          ))}
        </div>
      </div>

      {/* 2. Cyan ring (box-shadow based) */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-theme-black/50 uppercase tracking-widest">Cyan Ring</span>
        <div className="flex items-center gap-4">
          {(['text', 'icon-text', 'icon'] as const).map((variant) => (
            <button
              key={variant}
              type="button"
              className={`${focusBase} focus-visible:ring-2 focus-visible:ring-[var(--theme-cyan)] focus-visible:ring-offset-2`}
            >
              <ButtonContent variant={variant} />
            </button>
          ))}
        </div>
      </div>

      {/* 3. Thick magenta outline */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-theme-black/50 uppercase tracking-widest">Thick Magenta Outline</span>
        <div className="flex items-center gap-4">
          {(['text', 'icon-text', 'icon'] as const).map((variant) => (
            <button
              key={variant}
              type="button"
              className={`${focusBase} focus-visible:outline-4 focus-visible:outline-[var(--theme-magenta)] focus-visible:outline-offset-2`}
            >
              <ButtonContent variant={variant} />
            </button>
          ))}
        </div>
      </div>

      {/* 4. Border color shift to cyan */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-theme-black/50 uppercase tracking-widest">Border Color Shift</span>
        <div className="flex items-center gap-4">
          {(['text', 'icon-text', 'icon'] as const).map((variant) => (
            <button
              key={variant}
              type="button"
              className={`${focusBase} focus-visible:border-theme-cyan`}
            >
              <ButtonContent variant={variant} />
            </button>
          ))}
        </div>
      </div>

      {/* 5. Double: border shift + offset outline */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-theme-black/50 uppercase tracking-widest">Double: Border + Outline</span>
        <div className="flex items-center gap-4">
          {(['text', 'icon-text', 'icon'] as const).map((variant) => (
            <button
              key={variant}
              type="button"
              className={`${focusBase} focus-visible:border-theme-cyan focus-visible:outline-2 focus-visible:outline-[var(--theme-cyan)] focus-visible:outline-offset-4`}
            >
              <ButtonContent variant={variant} />
            </button>
          ))}
        </div>
      </div>
    </div>
  ),
};
