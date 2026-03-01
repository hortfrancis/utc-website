import type { Meta, StoryObj } from '@storybook/nextjs';
import Accent from '../../Accent';
import { Frame } from '../../Frame';

/**
 * CollaboratorBio design experiments. Each story explores a layout and
 * colour treatment for presenting team collaborators and partners.
 *
 * These are raw HTML/Tailwind prototypes — not using a CollaboratorBio
 * component — since we're exploring what the component *should* become.
 */
const meta = {
  title: 'Experiments/CollaboratorBio',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Collaborator bio card experiments. Compare layout and colour approaches for a headshot + bio card.',
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
/*  Sample data                                                        */
/* ------------------------------------------------------------------ */

const BOB = {
  name: 'Bob Blobson',
  role: 'Technical Consultant',
  bio: 'Bob Blobson is the premier viscosity consultant working in this field. You brings his whole self to work.',
  photoSrc: '/images/experiments/collaborator-bio-example01.png',
  relationship: 'Freelancer',
  email: 'bob@blobshappening.org.uk',
  web: 'blobshappening.org.uk',
};

/* ------------------------------------------------------------------ */
/*  1. Default                                                         */
/* ------------------------------------------------------------------ */

/**
 * **Default** — Primary layout matching the initial design spec:
 * headshot left, name + accent top-right, bio body, coloured status bar.
 */
export const Default: Story = {
  render: () => (
    <div className="border-4 border-theme-black bg-theme-white grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] max-w-2xl">
      {/* ---- Photo ---- */}
      <div className="row-span-2 w-40 sm:w-48 aspect-3/4 bg-theme-orange overflow-hidden border-r-4 border-theme-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BOB.photoSrc} alt={BOB.name} className="w-full h-full object-cover" />
      </div>

      {/* ---- Name / Role + Accent ---- */}
      <div className="flex items-stretch border-b-4 border-theme-black">
        <div className="flex-1 px-4 py-3 flex items-center">
          <h3 className="text-lg sm:text-xl font-bold text-theme-black leading-tight">
            {BOB.name}
            <span className="font-normal"> : {BOB.role}</span>
          </h3>
        </div>
        <Accent direction="vertical" gradient="orange-purple" borderSides={['left']} className="w-16 sm:w-20" />
      </div>

      {/* ---- Bio ---- */}
      <div className="px-4 py-3">
        <p className="text-sm sm:text-base text-theme-black leading-relaxed">{BOB.bio}</p>
      </div>

      {/* ---- Bottom status bar ---- */}
      <div className="col-span-2 flex border-t-4 border-theme-black text-sm font-bold">
        <div className="w-10 bg-theme-green border-r-4 border-theme-black" />
        <div className="px-4 py-2 bg-theme-black text-theme-cyan flex items-center border-r-4 border-theme-black">
          {BOB.relationship}
        </div>
        <div className="flex-1 px-4 py-2 bg-theme-magenta text-theme-black flex items-center gap-4">
          <span>email: {BOB.email}</span>
          <span>web:{BOB.web}</span>
        </div>
      </div>
    </div>
  ),
};

/* ------------------------------------------------------------------ */
/*  2. With image blend                                                */
/* ------------------------------------------------------------------ */

/**
 * **With image blend** — Orange background behind the headshot with
 * `mix-blend-multiply` on the image, giving a duotone / screen-printed feel.
 */
export const WithImageBlend: Story = {
  render: () => (
    <div className="border-4 border-theme-black bg-theme-white grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] max-w-2xl">
      {/* ---- Photo with blend ---- */}
      <div className="row-span-2 w-40 sm:w-48 aspect-3/4 bg-theme-orange overflow-hidden border-r-4 border-theme-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BOB.photoSrc} alt={BOB.name} className="w-full h-full object-cover mix-blend-luminosity" />
      </div>

      {/* ---- Name / Role + Accent ---- */}
      <div className="flex items-stretch border-b-4 border-theme-black">
        <div className="flex-1 px-4 py-3 flex items-center">
          <h3 className="text-lg sm:text-xl font-bold text-theme-black leading-tight">
            {BOB.name}
            <span className="font-normal"> : {BOB.role}</span>
          </h3>
        </div>
        <Accent direction="vertical" gradient="orange-purple" borderSides={['left']} className="w-16 sm:w-20" />
      </div>

      {/* ---- Bio ---- */}
      <div className="px-4 py-3">
        <p className="text-sm sm:text-base text-theme-black leading-relaxed">{BOB.bio}</p>
      </div>

      {/* ---- Bottom status bar ---- */}
      <div className="col-span-2 flex border-t-4 border-theme-black text-sm font-bold">
        <div className="w-10 bg-theme-green border-r-4 border-theme-black" />
        <div className="px-4 py-2 bg-theme-black text-theme-cyan flex items-center border-r-4 border-theme-black">
          {BOB.relationship}
        </div>
        <div className="flex-1 px-4 py-2 bg-theme-magenta text-theme-black flex items-center gap-4">
          <span>email: {BOB.email}</span>
          <span>web:{BOB.web}</span>
        </div>
      </div>
    </div>
  ),
};

/* ------------------------------------------------------------------ */
/*  3. Square image                                                    */
/* ------------------------------------------------------------------ */

/**
 * **Square image** — Same layout but with a 1:1 square headshot instead
 * of the 3:4 portrait crop. Includes the luminosity blend.
 */
export const SquareImage: Story = {
  render: () => (
    <div className="border-4 border-theme-black bg-theme-white grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] max-w-2xl">
      {/* ---- Photo (square) ---- */}
      <div className="row-span-2 w-40 sm:w-48 aspect-square bg-theme-orange overflow-hidden border-r-4 border-theme-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BOB.photoSrc} alt={BOB.name} className="w-full h-full object-cover mix-blend-luminosity" />
      </div>

      {/* ---- Name / Role + Accent ---- */}
      <div className="flex items-stretch border-b-4 border-theme-black">
        <div className="flex-1 px-4 py-3 flex items-center">
          <h3 className="text-lg sm:text-xl font-bold text-theme-black leading-tight">
            {BOB.name}
            <span className="font-normal"> : {BOB.role}</span>
          </h3>
        </div>
        <Accent direction="vertical" gradient="orange-purple" borderSides={['left']} className="w-16 sm:w-20" />
      </div>

      {/* ---- Bio ---- */}
      <div className="px-4 py-3">
        <p className="text-sm sm:text-base text-theme-black leading-relaxed">{BOB.bio}</p>
      </div>

      {/* ---- Bottom status bar ---- */}
      <div className="col-span-2 flex border-t-4 border-theme-black text-sm font-bold">
        <div className="w-10 bg-theme-green border-r-4 border-theme-black" />
        <div className="px-4 py-2 bg-theme-black text-theme-cyan flex items-center border-r-4 border-theme-black">
          {BOB.relationship}
        </div>
        <div className="flex-1 px-4 py-2 bg-theme-magenta text-theme-black flex items-center gap-4">
          <span>email: {BOB.email}</span>
          <span>web:{BOB.web}</span>
        </div>
      </div>
    </div>
  ),
};

/* ------------------------------------------------------------------ */
/*  4. Image right                                                     */
/* ------------------------------------------------------------------ */

/**
 * **Image right** — Flipped layout: details in stacked Frame boxes on
 * the left, headshot on the right.
 */
export const ImageRight: Story = {
  render: () => (
    <div className="flex flex-col-reverse sm:flex-row max-w-2xl">
      {/* ---- Detail boxes (left column) ---- */}
      <div className="flex flex-col flex-1">
        <Frame borderSides={['top', 'left', 'right', 'bottom']} className="px-4 py-3">
          <p className="font-bold text-theme-black">{BOB.name}</p>
        </Frame>
        <div className="flex">
          <Frame borderSides={['left', 'bottom']} className="px-4 py-3 flex-1">
            <p className="text-theme-black">{BOB.role}</p>
          </Frame>
          <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-3 flex-1">
            <p className="text-theme-black">{BOB.relationship}</p>
          </Frame>
        </div>
        <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-3 flex-1">
          <p className="text-sm text-theme-black leading-relaxed">{BOB.bio}</p>
        </Frame>
        <div className="flex">
          <Frame borderSides={['left', 'bottom']} className="px-4 py-3 flex-1">
            <p className="text-theme-black">{BOB.email}</p>
          </Frame>
          <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-3 flex-1">
            <p className="text-theme-black">{BOB.web}</p>
          </Frame>
        </div>
      </div>

      {/* ---- Photo (right on sm+, top on mobile) ---- */}
      <div className="w-full sm:w-56 shrink-0 aspect-square bg-theme-orange overflow-hidden border-4 border-theme-black sm:border-l-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BOB.photoSrc} alt={BOB.name} className="w-full h-full object-cover mix-blend-luminosity" />
      </div>
    </div>
  ),
};

/* ------------------------------------------------------------------ */
/*  5. Image right (responsive)                                        */
/* ------------------------------------------------------------------ */

/**
 * **Image right (responsive)** — Same concept as ImageRight but fully
 * fluid: percentage-based image width, `min-w-0` on flex children so
 * text can shrink, and `overflow-hidden` on the root to prevent blowout.
 */
export const ImageRightResponsive: Story = {
  decorators: [
    (Story) => (
      <div className="p-4 sm:p-12 bg-linear-to-r from-(--background-faded-orange) to-(--background-faded-cyan) min-h-64 flex items-center justify-center w-full overflow-hidden">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="w-full max-w-2xl border-4 border-theme-black bg-theme-white flex flex-col-reverse sm:flex-row overflow-hidden">
      {/* ---- Detail boxes (left column) ---- */}
      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <Frame borderSides={['bottom']} className="px-4 py-3 min-w-0 overflow-hidden">
          <p className="font-bold text-theme-black truncate">{BOB.name}</p>
        </Frame>
        <div className="flex flex-col sm:flex-row min-w-0 overflow-hidden">
          <Frame borderSides={['bottom']} className="px-4 py-2 flex-1 min-w-0 overflow-hidden sm:border-r-4 sm:border-theme-black">
            <p className="text-sm text-theme-black truncate">{BOB.role}</p>
          </Frame>
          <Frame borderSides={['bottom']} className="px-4 py-2 flex-1 min-w-0 overflow-hidden">
            <p className="text-sm text-theme-black truncate">{BOB.relationship}</p>
          </Frame>
        </div>
        <Frame borderSides={['bottom']} className="px-4 py-3 flex-1 min-w-0 overflow-hidden">
          <p className="text-sm text-theme-black leading-relaxed">{BOB.bio}</p>
        </Frame>
        <div className="flex flex-col sm:flex-row min-w-0 overflow-hidden">
          <Frame borderSides={['bottom']} className="px-4 py-2 flex-1 min-w-0 overflow-hidden sm:border-r-4 sm:border-theme-black sm:border-b-0">
            <p className="text-sm text-theme-black truncate">{BOB.email}</p>
          </Frame>
          <Frame className="px-4 py-2 flex-1 min-w-0 overflow-hidden">
            <p className="text-sm text-theme-black truncate">{BOB.web}</p>
          </Frame>
        </div>
      </div>

      {/* ---- Photo (right on sm+, top on mobile) ---- */}
      <div className="w-full sm:w-2/5 sm:shrink-0 aspect-square bg-theme-orange overflow-hidden sm:border-l-4 sm:border-theme-black border-b-4 sm:border-b-0 border-theme-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BOB.photoSrc} alt={BOB.name} className="w-full h-full object-cover mix-blend-luminosity" />
      </div>
    </div>
  ),
};
