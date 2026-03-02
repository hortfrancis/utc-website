import type { Meta, StoryObj } from '@storybook/nextjs';
import Accent from '../../Accent';
import Anchor from '../../Anchor';
import { Frame } from '../../Frame';
import { Icon } from '../../Icon';
import Image from '../../Image';

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
  bio: 'Bob Blobson is the premier viscosity consultant working in this field. He brings his whole self to work.',
  photoSrc: '/images/experiments/collaborator-bio-example01.png',
  relationship: 'Freelancer',
  email: 'bob@blobshappening.org.uk',
  web: 'blobshappening.org.uk',
};

const BOB_LONG = {
  ...BOB,
  bio: 'Bob Blobson is the premier viscosity consultant working in this field. He brings his whole self to work. With over fifteen years of experience spanning fluid dynamics, polymer rheology, and non-Newtonian flow modelling, Bob has helped organisations across aerospace, food manufacturing, and biotech optimise their processes. He is a regular speaker at international conferences and holds two patents in shear-thinning measurement techniques.',
};

// ─── 1 · Default ────────────────────────────────────────────────────────────
/**
 * **Default** — Primary layout matching the initial design spec:
 * headshot left, name + accent top-right, bio body, coloured status bar.
 */
export const Default: Story = {
  name: '1 – Default',
  render: () => (
    <div className="border-4 border-theme-black bg-theme-white grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] max-w-2xl">
      {/* ---- Photo ---- */}
      <div className="relative row-span-2 w-40 sm:w-48 aspect-3/4 bg-theme-orange overflow-hidden border-r-4 border-theme-black">
        <Image src={BOB.photoSrc} alt={BOB.name} fill className="object-cover" framed={false} />
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

// ─── 2 · With Image Blend ───────────────────────────────────────────────────
/**
 * **With image blend** — Orange background behind the headshot with
 * `mix-blend-multiply` on the image, giving a duotone / screen-printed feel.
 */
export const WithImageBlend: Story = {
  name: '2 – With Image Blend',
  render: () => (
    <div className="border-4 border-theme-black bg-theme-white grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] max-w-2xl">
      {/* ---- Photo with blend ---- */}
      <div className="relative row-span-2 w-40 sm:w-48 aspect-3/4 bg-theme-orange overflow-hidden border-r-4 border-theme-black">
        <Image src={BOB.photoSrc} alt={BOB.name} fill className="object-cover mix-blend-luminosity" framed={false} />
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

// ─── 3 · Square Image ───────────────────────────────────────────────────────
/**
 * **Square image** — Same layout but with a 1:1 square headshot instead
 * of the 3:4 portrait crop. Includes the luminosity blend.
 */
export const SquareImage: Story = {
  name: '3 – Square Image',
  render: () => (
    <div className="border-4 border-theme-black bg-theme-white grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] max-w-2xl">
      {/* ---- Photo (square) ---- */}
      <div className="relative row-span-2 w-40 sm:w-48 aspect-square bg-theme-orange overflow-hidden border-r-4 border-theme-black">
        <Image src={BOB.photoSrc} alt={BOB.name} fill className="object-cover mix-blend-luminosity" framed={false} />
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

// ─── 4 · Image Right ────────────────────────────────────────────────────────
/**
 * **Image right** — Flipped layout: details in stacked Frame boxes on
 * the left, headshot on the right.
 */
export const ImageRight: Story = {
  name: '4 – Image Right',
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
      <div className="relative w-full sm:w-56 shrink-0 aspect-square bg-theme-orange overflow-hidden border-4 border-theme-black sm:border-l-0">
        <Image src={BOB.photoSrc} alt={BOB.name} fill className="object-cover mix-blend-luminosity" framed={false} />
      </div>
    </div>
  ),
};

// ─── 5 · Image Right Responsive ─────────────────────────────────────────────
/**
 * **Image right (responsive)** — Same concept as ImageRight but fully
 * fluid: percentage-based image width, `min-w-0` on flex children so
 * text can shrink, and `overflow-hidden` on the root to prevent blowout.
 */
export const ImageRightResponsive: Story = {
  name: '5 – Image Right Responsive',
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
      <div className="relative w-full sm:w-2/5 sm:shrink-0 aspect-square bg-theme-orange overflow-hidden sm:border-l-4 sm:border-theme-black border-b-4 sm:border-b-0 border-theme-black">
        <Image src={BOB.photoSrc} alt={BOB.name} fill className="object-cover mix-blend-luminosity" framed={false} />
      </div>
    </div>
  ),
};

// ─── 6 · Image Left Framed ──────────────────────────────────────────────────
/**
 * **Image left (framed)** — Image on the left using the standard `Image`
 * component with its own Frame border. Gradient Frame strip sits to the right
 * of the name to absorb leftover horizontal space.
 */
export const ImageLeftFramed: Story = {
  name: '6 – Image Left Framed',
  render: () => (
    <div className="flex max-w-2xl">
      {/* ---- Photo (framed by Image) ---- */}
      <Image
        src={BOB.photoSrc}
        alt={BOB.name}
        width={192}
        height={192}
        borderSides={['top', 'left', 'bottom', 'right']}
        background="bg-theme-orange"
        containerClassName="w-40 sm:w-48 shrink-0 aspect-square"
        className="object-cover h-full mix-blend-luminosity"
      />

      {/* ---- Right column ---- */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Name + Gradient */}
        <Frame borderSides={['top', 'right', 'bottom']} className="flex items-stretch">
          <div className="px-4 py-3 flex items-center shrink-0">
            <h3 className="text-lg sm:text-xl font-bold text-theme-black leading-tight whitespace-nowrap">
              {BOB.name}
            </h3>
          </div>
          <Frame
            borderSides={['left']}
            background="bg-linear-to-r from-theme-orange to-theme-purple"
            className="flex-1"
          />
        </Frame>

        {/* Role / Relationship */}
        <Frame borderSides={['right', 'bottom']} className="px-4 py-2">
          <p className="text-sm text-theme-black">
            {BOB.role} · {BOB.relationship}
          </p>
        </Frame>

        {/* Bio */}
        <Frame borderSides={['right', 'bottom']} className="px-4 py-3 flex-1">
          <p className="text-sm text-theme-black leading-relaxed">{BOB.bio}</p>
        </Frame>

        {/* Contact */}
        <Frame borderSides={['right', 'bottom']} className="px-4 py-2">
          <p className="text-sm text-theme-black">
            {BOB.email} · {BOB.web}
          </p>
        </Frame>
      </div>
    </div>
  ),
};

// ─── 7 · Image Left Curved ──────────────────────────────────────────────────
/**
 * **Image left curved** — Builds on ImageLeftFramed with a rounded
 * top-right corner, a gradient strip next to the role/relationship row,
 * and clickable email/web links.
 */
export const ImageLeftCurved: Story = {
  name: '7 – Image Left Curved',
  render: () => (
    <div className="flex max-w-2xl">
      {/* ---- Photo (framed by Image) ---- */}
      <Image
        src={BOB.photoSrc}
        alt={BOB.name}
        width={192}
        height={192}
        borderSides={['top', 'left', 'bottom', 'right']}
        background="bg-theme-orange"
        containerClassName="w-40 sm:w-48 shrink-0 aspect-square"
        className="object-cover h-full mix-blend-luminosity"
      />

      {/* ---- Right column ---- */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Name + Gradient */}
        <Frame borderSides={['top', 'right', 'bottom']} roundedCorners={['top-right']} className="flex items-stretch">
          <div className="px-4 py-3 flex items-center shrink-0">
            <h3 className="text-lg sm:text-xl font-bold text-theme-black leading-tight whitespace-nowrap">
              {BOB.name}
            </h3>
          </div>
          <Frame
            borderSides={['left']}
            background="bg-linear-to-r from-theme-orange to-theme-purple"
            className="flex-1"
          />
        </Frame>

        {/* Role / Relationship + Block */}
        <Frame borderSides={['right', 'bottom']} className="flex items-stretch">
          <div className="px-4 py-2 flex items-center shrink-0">
            <p className="text-sm text-theme-black">
              <span className="font-bold">{BOB.role}</span> · {BOB.relationship}
            </p>
          </div>
          <Frame
            borderSides={['left']}
            background="bg-theme-black"
            className="flex-1"
          />
        </Frame>

        {/* Bio */}
        <Frame borderSides={['right', 'bottom']} className="px-4 py-3 flex-1">
          <p className="text-sm text-theme-black leading-relaxed">{BOB.bio}</p>
        </Frame>

        {/* Contact (linked) */}
        <Frame borderSides={['right', 'bottom']} className="px-4 py-2 flex items-center gap-2 text-sm">
          <Anchor href={`mailto:${BOB.email}`}>
            {BOB.email}
          </Anchor>
          <span className="text-theme-black">·</span>
          <Anchor href={`https://${BOB.web}`}>
            {BOB.web}
          </Anchor>
        </Frame>
      </div>
    </div>
  ),
};

// ─── 8 · Image Left Curved — Long Bio ───────────────────────────────────────
/**
 * **Image left curved (long bio)** — Same layout as ImageLeftCurved but
 * with a longer bio to test how the card stretches vertically.
 */
export const ImageLeftCurvedLongBio: Story = {
  name: '8 – Image Left Curved — Long Bio',
  render: () => (
    <div className="flex max-w-2xl">
      {/* ---- Photo (framed by Image) ---- */}
      <Image
        src={BOB_LONG.photoSrc}
        alt={BOB_LONG.name}
        width={192}
        height={192}
        borderSides={['top', 'left', 'bottom', 'right']}
        background="bg-theme-orange"
        containerClassName="w-40 sm:w-48 shrink-0 aspect-square self-start"
        className="object-cover h-full mix-blend-luminosity"
      />

      {/* ---- Right column ---- */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Name + Gradient */}
        <Frame borderSides={['top', 'right', 'bottom']} roundedCorners={['top-right']} className="flex items-stretch">
          <div className="px-4 py-3 flex items-center shrink-0">
            <h3 className="text-lg sm:text-xl font-bold text-theme-black leading-tight whitespace-nowrap">
              {BOB_LONG.name}
            </h3>
          </div>
          <Frame
            borderSides={['left']}
            background="bg-linear-to-r from-theme-orange to-theme-purple"
            className="flex-1"
          />
        </Frame>

        {/* Role / Relationship + Block */}
        <Frame borderSides={['right', 'bottom']} className="flex items-stretch">
          <div className="px-4 py-2 flex items-center shrink-0">
            <p className="text-sm text-theme-black">
              <span className="font-bold">{BOB_LONG.role}</span> · {BOB_LONG.relationship}
            </p>
          </div>
          <Frame
            borderSides={['left']}
            background="bg-theme-black"
            className="flex-1"
          />
        </Frame>

        {/* Bio */}
        <Frame borderSides={['right', 'bottom']} className="px-4 py-3 flex-1">
          <p className="text-sm text-theme-black leading-relaxed">{BOB_LONG.bio}</p>
        </Frame>

        {/* Contact (linked) */}
        <Frame borderSides={['right', 'bottom']} className="px-4 py-2 flex items-center gap-2 text-sm">
          <Anchor href={`mailto:${BOB_LONG.email}`}>
            {BOB_LONG.email}
          </Anchor>
          <span className="text-theme-black">·</span>
          <Anchor href={`https://${BOB_LONG.web}`}>
            {BOB_LONG.web}
          </Anchor>
        </Frame>
      </div>
    </div>
  ),
};

// ─── 9 · Image Left Curved — Block Below ────────────────────────────────────
/**
 * **Image left curved (block below)** — Square image at top-left with a
 * theme-black Frame filling the remaining height below it, keeping the
 * left column visually balanced against a longer bio.
 */
export const ImageLeftCurvedBlockBelow: Story = {
  name: '9 – Image Left Curved — Block Below',
  render: () => (
    <div className="flex max-w-2xl">
      {/* ---- Left column: image + block ---- */}
      <div className="w-40 sm:w-48 shrink-0 flex flex-col">
        <Image
          src={BOB_LONG.photoSrc}
          alt={BOB_LONG.name}
          width={192}
          height={192}
          borderSides={['top', 'left', 'bottom', 'right']}
          background="bg-theme-orange"
          containerClassName="aspect-square"
          className="object-cover h-full mix-blend-luminosity"
        />
        <Frame
          borderSides={['left', 'bottom', 'right']}
          background="bg-theme-black"
          roundedCorners={['bottom-left']}
          className="flex-1 flex items-start justify-evenly pt-4"
        >
          <Icon name="atom" size={24} className="text-theme-orange" />
          <Icon name="lightning" size={24} className="text-theme-orange" />
          <Icon name="sparkle" size={24} className="text-theme-orange" />
        </Frame>
      </div>

      {/* ---- Right column ---- */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Name + Gradient */}
        <Frame borderSides={['top', 'right', 'bottom']} roundedCorners={['top-right']} className="flex items-stretch">
          <div className="px-4 py-3 flex items-center shrink-0">
            <h3 className="text-lg sm:text-xl font-bold text-theme-black leading-tight whitespace-nowrap">
              {BOB_LONG.name}
            </h3>
          </div>
          <Frame
            borderSides={['left']}
            background="bg-linear-to-r from-theme-orange to-theme-purple"
            className="flex-1"
          />
        </Frame>

        {/* Role / Relationship + Block */}
        <Frame borderSides={['right', 'bottom']} className="flex items-stretch">
          <div className="px-4 py-2 flex items-center shrink-0">
            <p className="text-sm text-theme-black">
              <span className="font-bold">{BOB_LONG.role}</span> · {BOB_LONG.relationship}
            </p>
          </div>
          <Frame
            borderSides={['left']}
            background="bg-theme-black"
            className="flex-1"
          />
        </Frame>

        {/* Bio */}
        <Frame borderSides={['right', 'bottom']} className="px-4 py-3 flex-1">
          <p className="text-sm text-theme-black leading-relaxed">{BOB_LONG.bio}</p>
        </Frame>

        {/* Contact (linked) */}
        <Frame borderSides={['right', 'bottom']} className="px-4 py-2 flex items-center gap-2 text-sm">
          <Anchor href={`mailto:${BOB_LONG.email}`}>
            {BOB_LONG.email}
          </Anchor>
          <span className="text-theme-black">·</span>
          <Anchor href={`https://${BOB_LONG.web}`}>
            {BOB_LONG.web}
          </Anchor>
        </Frame>
      </div>
    </div>
  ),
};

// ─── 10 · Image Left Curved — Compact Icons ─────────────────────────────────
/**
 * **Image left curved (compact icons)** — Same as story 9 but the icon
 * strip is only as tall as the icons themselves, not flex-filling.
 */
export const ImageLeftCurvedCompactIcons: Story = {
  name: '10 – Image Left Curved — Compact Icons',
  render: () => (
    <div className="flex max-w-2xl">
      {/* ---- Left column: image + icon strip ---- */}
      <div className="w-40 sm:w-48 shrink-0 flex flex-col self-start">
        <Image
          src={BOB_LONG.photoSrc}
          alt={BOB_LONG.name}
          width={192}
          height={192}
          borderSides={['top', 'left', 'bottom']}
          roundedCorners={['top-left']}
          background="bg-theme-orange"
          containerClassName="aspect-square"
          className="object-cover h-full mix-blend-luminosity"
        />
        <Frame
          borderSides={['left', 'bottom']}
          background="bg-theme-black"
          roundedCorners={['bottom-left']}
          className="flex items-center justify-evenly py-3"
        >
          <Icon name="atom" size={24} className="text-theme-orange" />
          <Icon name="lightning" size={24} className="text-theme-orange" />
          <Icon name="sparkle" size={24} className="text-theme-orange" />
        </Frame>
      </div>

      {/* ---- Right column ---- */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Name + Gradient */}
        <Frame borderSides={['top', 'left', 'right', 'bottom']} roundedCorners={['top-right']} className="flex items-stretch">
          <div className="px-4 py-3 flex items-center shrink-0">
            <h3 className="text-lg sm:text-xl font-bold text-theme-black leading-tight whitespace-nowrap">
              {BOB_LONG.name}
            </h3>
          </div>
          <Frame
            borderSides={['left']}
            background="bg-linear-to-r from-theme-orange to-theme-purple"
            className="flex-1"
          />
        </Frame>

        {/* Role / Relationship + Block */}
        <Frame borderSides={['left', 'right', 'bottom']} className="flex items-stretch">
          <div className="px-4 py-2 flex items-center shrink-0">
            <p className="text-sm text-theme-black">
              <span className="font-bold">{BOB_LONG.role}</span> · {BOB_LONG.relationship}
            </p>
          </div>
          <Frame
            borderSides={['left']}
            background="bg-theme-black"
            className="flex-1"
          />
        </Frame>

        {/* Bio */}
        <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-3 flex-1">
          <p className="text-sm text-theme-black leading-relaxed">{BOB_LONG.bio}</p>
        </Frame>

        {/* Contact (linked) */}
        <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-2 flex items-center gap-2 text-sm">
          <Anchor href={`mailto:${BOB_LONG.email}`}>
            {BOB_LONG.email}
          </Anchor>
          <span className="text-theme-black">·</span>
          <Anchor href={`https://${BOB_LONG.web}`}>
            {BOB_LONG.web}
          </Anchor>
        </Frame>
      </div>
    </div>
  ),
};

// ─── 11 · Image Left Curved — Shared Gradient ───────────────────────────────
/**
 * **Image left curved (shared gradient)** — Name and Role/Relationship
 * rows share a single gradient block on the right instead of separate
 * gradient + black blocks.
 */
export const ImageLeftCurvedSharedGradient: Story = {
  name: '11 – Image Left Curved — Shared Gradient',
  render: () => (
    <div className="flex max-w-2xl">
      {/* ---- Left column: image + icon strip ---- */}
      <div className="w-40 sm:w-48 shrink-0 flex flex-col self-start">
        <Image
          src={BOB_LONG.photoSrc}
          alt={BOB_LONG.name}
          width={192}
          height={192}
          borderSides={['top', 'left', 'bottom']}
          roundedCorners={['top-left']}
          background="bg-theme-orange"
          containerClassName="aspect-square"
          className="object-cover h-full mix-blend-luminosity"
        />
        <Frame
          borderSides={['left', 'bottom']}
          background="bg-theme-black"
          roundedCorners={['bottom-left']}
          className="flex items-center justify-evenly py-3"
        >
          <Icon name="atom" size={24} className="text-theme-orange" />
          <Icon name="lightning" size={24} className="text-theme-orange" />
          <Icon name="sparkle" size={24} className="text-theme-orange" />
        </Frame>
      </div>

      {/* ---- Right column ---- */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Name + Role/Relationship with shared gradient behind both */}
        <Frame
          borderSides={['top', 'left', 'right', 'bottom']}
          roundedCorners={['top-right']}
          background="bg-linear-to-r from-theme-orange to-theme-purple"
          className="flex flex-col items-start"
        >
          <Frame borderSides={['right', 'bottom']} className="px-4 py-3 -mt-0.5 -mb-0.5">
            <h3 className="text-lg sm:text-xl font-bold text-theme-black leading-tight whitespace-nowrap">
              {BOB_LONG.name}
            </h3>
          </Frame>

          <Frame borderSides={['top', 'right']} className="flex items-stretch -mt-0.5 -mb-0.5">
            <div className="px-4 py-2">
              <p className="text-sm text-theme-black">
                <span className="font-bold">{BOB_LONG.role}</span> · {BOB_LONG.relationship}
              </p>
            </div>
          </Frame>
        </Frame>

        {/* Bio */}
        <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-3 flex-1">
          <p className="text-sm text-theme-black leading-relaxed">{BOB_LONG.bio}</p>
        </Frame>

        {/* Contact (linked) */}
        <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-2 flex items-center gap-2 text-sm">
          <Anchor href={`mailto:${BOB_LONG.email}`}>
            {BOB_LONG.email}
          </Anchor>
          <span className="text-theme-black">·</span>
          <Anchor href={`https://${BOB_LONG.web}`}>
            {BOB_LONG.web}
          </Anchor>
        </Frame>
      </div>
    </div>
  ),
};

// ─── 12 · Image Left Curved — Shared Gradient Responsive ────────────────────
/**
 * **Image left curved (shared gradient, responsive stack)** — Based on
 * ImageLeftCurvedSharedGradient, but on narrow viewports the image column
 * moves above the rest of the card. In that stacked mobile layout the
 * image has a curved top-right corner.
 */
export const ImageLeftCurvedSharedGradientResponsiveStack: Story = {
  name: '12 – Image Left Curved — Shared Gradient Responsive',
  render: () => (
    <div className="flex flex-col sm:flex-row max-w-2xl">
      {/* ---- Left column: image + icon strip (stacks above on mobile) ---- */}
      <div className="w-full sm:w-48 shrink-0 flex flex-col self-start">
        <Image
          src={BOB_LONG.photoSrc}
          alt={BOB_LONG.name}
          width={192}
          height={192}
          borderSides={['top', 'left', 'right']}
          background="bg-theme-orange"
          containerClassName="aspect-square rounded-tr-3xl sm:rounded-tr-none sm:rounded-tl-3xl sm:border-r-0"
          className="object-cover h-full mix-blend-luminosity"
        />
        <Frame
          borderSides={[]}
          background="bg-theme-black"
          className="flex items-center justify-end gap-2 py-2 pr-2 sm:rounded-bl-3xl"
        >
          <Icon name="atom" size={20} className="text-theme-orange" />
          <Icon name="lightning" size={20} className="text-theme-orange" />
          <Icon name="sparkle" size={20} className="text-theme-orange" />
        </Frame>
      </div>

      {/* ---- Right column ---- */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Name + Role/Relationship with shared gradient behind both */}
        <Frame
          borderSides={['top', 'left', 'right', 'bottom']}
          background="bg-linear-to-r from-theme-orange to-theme-purple"
          className="flex flex-col items-start border-t-0 sm:border-t-4 sm:rounded-tr-3xl sm:overflow-hidden"
        >
          <Frame borderSides={['right', 'bottom']} className="px-4 py-3 -mt-0.5 -mb-0.5">
            <h3 className="text-lg sm:text-xl font-bold text-theme-black leading-tight whitespace-nowrap">
              {BOB_LONG.name}
            </h3>
          </Frame>

          <Frame borderSides={['top', 'right']} className="flex items-stretch -mt-0.5">
            <div className="px-4 py-2">
              <p className="text-sm text-theme-black">
                <span className="font-bold">{BOB_LONG.role}</span> · {BOB_LONG.relationship}
              </p>
            </div>
          </Frame>
        </Frame>

        {/* Bio */}
        <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-3 flex-1">
          <p className="text-sm text-theme-black leading-relaxed">{BOB_LONG.bio}</p>
        </Frame>

        {/* Contact (linked) */}
        <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-2 text-sm leading-6 sm:leading-5">
          <Anchor href={`mailto:${BOB_LONG.email}`}>
            {BOB_LONG.email}
          </Anchor>
          <span className="hidden sm:inline text-theme-black"> · </span>
          <br className="sm:hidden" />
          <Anchor href={`https://${BOB_LONG.web}`}>
            {BOB_LONG.web}
          </Anchor>
        </Frame>
      </div>
    </div>
  ),
};

// ─── 13 · Image Left Curved — Gradient Background Blend ─────────────────────
/**
 * **Image with gradient background blend** — Based on
 * ImageLeftCurvedSharedGradientResponsiveStack, but uses an
 * orange → purple gradient as the image Frame background instead of a
 * solid colour, so the `mix-blend-luminosity` image composites directly
 * against the gradient.
 */
export const ImageGradientBackgroundBlend: Story = {
  name: '13 – Image Left Curved — Gradient Background Blend',
  render: () => (
    <div className="flex flex-col sm:flex-row max-w-2xl">
      {/* ---- Left column: image + icon strip (stacks above on mobile) ---- */}
      <div className="w-full sm:w-48 shrink-0 flex flex-col self-start">
        <Image
          src={BOB_LONG.photoSrc}
          alt={BOB_LONG.name}
          width={192}
          height={192}
          borderSides={['top', 'left', 'right']}
          background="bg-linear-to-r from-theme-orange to-theme-purple"
          containerClassName="aspect-square rounded-tr-3xl sm:rounded-tr-none sm:rounded-tl-3xl sm:border-r-0"
          className="object-cover h-full mix-blend-luminosity"
        />
        <Frame
          borderSides={[]}
          background="bg-theme-black"
          className="flex items-center justify-end gap-2 py-2 pr-2 sm:rounded-bl-3xl"
        >
          <Icon name="atom" size={20} className="text-theme-white" />
          <Icon name="lightning" size={20} className="text-theme-white" />
          <Icon name="sparkle" size={20} className="text-theme-white" />
        </Frame>
      </div>

      {/* ---- Right column ---- */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Name + Role/Relationship with shared gradient behind both */}
        <Frame
          borderSides={['top', 'left', 'right', 'bottom']}
          background="bg-linear-to-r from-theme-orange to-theme-purple"
          className="flex flex-col items-start border-t-0 sm:border-t-4 sm:rounded-tr-3xl sm:overflow-hidden"
        >
          <Frame borderSides={['right', 'bottom']} className="px-4 py-3 -mt-0.5 -mb-0.5">
            <h3 className="text-lg sm:text-xl font-bold text-theme-black leading-tight whitespace-nowrap">
              {BOB_LONG.name}
            </h3>
          </Frame>

          <Frame borderSides={['top', 'right']} className="flex items-stretch -mt-0.5">
            <div className="px-4 py-2">
              <p className="text-sm text-theme-black">
                <span className="font-bold">{BOB_LONG.role}</span> · {BOB_LONG.relationship}
              </p>
            </div>
          </Frame>
        </Frame>

        {/* Bio */}
        <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-3 flex-1">
          <p className="text-sm text-theme-black leading-relaxed">{BOB_LONG.bio}</p>
        </Frame>

        {/* Contact (linked) */}
        <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-2 text-sm leading-6 sm:leading-5">
          <Anchor href={`mailto:${BOB_LONG.email}`}>
            {BOB_LONG.email}
          </Anchor>
          <span className="hidden sm:inline text-theme-black"> · </span>
          <br className="sm:hidden" />
          <Anchor href={`https://${BOB_LONG.web}`}>
            {BOB_LONG.web}
          </Anchor>
        </Frame>
      </div>
    </div>
  ),
};

// ─── 14 · Image Left Curved — Shared Gradient Responsive (Green) ────────────
/**
 * **Image left curved (shared gradient, responsive stack, green)** —
 * Based on ImageLeftCurvedSharedGradientResponsiveStack with a green
 * colour treatment: theme-green image background and a
 * theme-green→theme-cyan shared gradient block.
 */
export const ImageLeftCurvedSharedGradientResponsiveStackGreen: Story = {
  name: '14 – Image Left Curved — Shared Gradient Responsive (Green)',
  render: () => (
    <div className="flex flex-col sm:flex-row max-w-2xl">
      {/* ---- Left column: image + icon strip (stacks above on mobile) ---- */}
      <div className="w-full sm:w-48 shrink-0 flex flex-col self-start">
        <Image
          src={BOB_LONG.photoSrc}
          alt={BOB_LONG.name}
          width={192}
          height={192}
          borderSides={['top', 'left', 'right']}
          background="bg-theme-green"
          containerClassName="aspect-square rounded-tr-3xl sm:rounded-tr-none sm:rounded-tl-3xl sm:border-r-0"
          className="object-cover h-full mix-blend-luminosity"
        />
        <Frame
          borderSides={[]}
          background="bg-theme-black"
          className="flex items-center justify-end gap-2 py-2 pr-2 sm:rounded-bl-3xl"
        >
          <Icon name="atom" size={20} className="text-theme-green" />
          <Icon name="lightning" size={20} className="text-theme-green" />
          <Icon name="sparkle" size={20} className="text-theme-green" />
        </Frame>
      </div>

      {/* ---- Right column ---- */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Name + Role/Relationship with shared gradient behind both */}
        <Frame
          borderSides={['top', 'left', 'right', 'bottom']}
          background="bg-linear-to-r from-theme-green to-theme-cyan"
          className="flex flex-col items-start border-t-0 sm:border-t-4 sm:rounded-tr-3xl sm:overflow-hidden"
        >
          <Frame borderSides={['right', 'bottom']} className="px-4 py-3 -mt-0.5 -mb-0.5">
            <h3 className="text-lg sm:text-xl font-bold text-theme-black leading-tight whitespace-nowrap">
              {BOB_LONG.name}
            </h3>
          </Frame>

          <Frame borderSides={['top', 'right']} className="flex items-stretch -mt-0.5">
            <div className="px-4 py-2">
              <p className="text-sm text-theme-black">
                <span className="font-bold">{BOB_LONG.role}</span> · {BOB_LONG.relationship}
              </p>
            </div>
          </Frame>
        </Frame>

        {/* Bio */}
        <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-3 flex-1">
          <p className="text-sm text-theme-black leading-relaxed">{BOB_LONG.bio}</p>
        </Frame>

        {/* Contact (linked) */}
        <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-2 text-sm leading-6 sm:leading-5">
          <Anchor href={`mailto:${BOB_LONG.email}`}>
            {BOB_LONG.email}
          </Anchor>
          <span className="hidden sm:inline text-theme-black"> · </span>
          <br className="sm:hidden" />
          <Anchor href={`https://${BOB_LONG.web}`}>
            {BOB_LONG.web}
          </Anchor>
        </Frame>
      </div>
    </div>
  ),
};
