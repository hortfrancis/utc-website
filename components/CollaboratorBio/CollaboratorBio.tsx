import clsx from 'clsx';
import Anchor from '../Anchor';
import { Frame } from '../Frame';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';
import Image from '../Image';

export const COLLABORATOR_BIO_DATA_TESTID = 'CollaboratorBio';

export type CollaboratorBioHeaderGradient =
  | 'theme-orange-theme-purple'
  | 'theme-orange-theme-cyan'
  | 'theme-orange-theme-green'
  | 'theme-orange-theme-magenta'
  | 'theme-purple-theme-orange'
  | 'theme-purple-theme-cyan'
  | 'theme-purple-theme-green'
  | 'theme-purple-theme-magenta'
  | 'theme-cyan-theme-orange'
  | 'theme-cyan-theme-purple'
  | 'theme-cyan-theme-green'
  | 'theme-cyan-theme-magenta'
  | 'theme-green-theme-orange'
  | 'theme-green-theme-purple'
  | 'theme-green-theme-cyan'
  | 'theme-green-theme-magenta'
  | 'theme-magenta-theme-orange'
  | 'theme-magenta-theme-purple'
  | 'theme-magenta-theme-cyan'
  | 'theme-magenta-theme-green';

export type CollaboratorBioImageBackgroundSolid =
  | 'theme-orange'
  | 'theme-green'
  | 'theme-cyan'
  | 'theme-purple'
  | 'theme-magenta';

export type CollaboratorBioImageBackground =
  | CollaboratorBioImageBackgroundSolid
  | CollaboratorBioHeaderGradient;

export type CollaboratorBioIconColor =
  | 'theme-orange'
  | 'theme-green'
  | 'theme-cyan'
  | 'theme-purple'
  | 'theme-magenta'
  | 'theme-white';

const IMAGE_BACKGROUND_SOLID_CLASS: Record<CollaboratorBioImageBackgroundSolid, string> = {
  'theme-orange': 'bg-theme-orange',
  'theme-green': 'bg-theme-green',
  'theme-cyan': 'bg-theme-cyan',
  'theme-purple': 'bg-theme-purple',
  'theme-magenta': 'bg-theme-magenta',
};

const HEADER_GRADIENT_CLASS: Record<CollaboratorBioHeaderGradient, string> = {
  'theme-orange-theme-purple': 'bg-linear-to-r from-theme-orange to-theme-purple',
  'theme-orange-theme-cyan': 'bg-linear-to-r from-theme-orange to-theme-cyan',
  'theme-orange-theme-green': 'bg-linear-to-r from-theme-orange to-theme-green',
  'theme-orange-theme-magenta': 'bg-linear-to-r from-theme-orange to-theme-magenta',
  'theme-purple-theme-orange': 'bg-linear-to-r from-theme-purple to-theme-orange',
  'theme-purple-theme-cyan': 'bg-linear-to-r from-theme-purple to-theme-cyan',
  'theme-purple-theme-green': 'bg-linear-to-r from-theme-purple to-theme-green',
  'theme-purple-theme-magenta': 'bg-linear-to-r from-theme-purple to-theme-magenta',
  'theme-cyan-theme-orange': 'bg-linear-to-r from-theme-cyan to-theme-orange',
  'theme-cyan-theme-purple': 'bg-linear-to-r from-theme-cyan to-theme-purple',
  'theme-cyan-theme-green': 'bg-linear-to-r from-theme-cyan to-theme-green',
  'theme-cyan-theme-magenta': 'bg-linear-to-r from-theme-cyan to-theme-magenta',
  'theme-green-theme-orange': 'bg-linear-to-r from-theme-green to-theme-orange',
  'theme-green-theme-purple': 'bg-linear-to-r from-theme-green to-theme-purple',
  'theme-green-theme-cyan': 'bg-linear-to-r from-theme-green to-theme-cyan',
  'theme-green-theme-magenta': 'bg-linear-to-r from-theme-green to-theme-magenta',
  'theme-magenta-theme-orange': 'bg-linear-to-r from-theme-magenta to-theme-orange',
  'theme-magenta-theme-purple': 'bg-linear-to-r from-theme-magenta to-theme-purple',
  'theme-magenta-theme-cyan': 'bg-linear-to-r from-theme-magenta to-theme-cyan',
  'theme-magenta-theme-green': 'bg-linear-to-r from-theme-magenta to-theme-green',
};

const IMAGE_BACKGROUND_CLASS: Record<CollaboratorBioImageBackground, string> = {
  ...IMAGE_BACKGROUND_SOLID_CLASS,
  ...HEADER_GRADIENT_CLASS,
};

const ICON_COLOR_CLASS: Record<CollaboratorBioIconColor, string> = {
  'theme-orange': 'text-theme-orange',
  'theme-green': 'text-theme-green',
  'theme-cyan': 'text-theme-cyan',
  'theme-purple': 'text-theme-purple',
  'theme-magenta': 'text-theme-magenta',
  'theme-white': 'text-theme-white',
};

const DEFAULT_ICONS: readonly [IconName, IconName, IconName] = [
  'atom',
  'lightning',
  'sparkle',
];

export interface CollaboratorBioProps {
  name: string;
  role: string;
  org?: string;
  /** Bio content — supports Markdown via MDX children (paragraphs, **bold**, *italic*). */
  children: React.ReactNode;
  photoSrc: string;
  photoAlt?: string;
  email?: string;
  web?: string;
  linkedin?: string;
  instagram?: string;
  icons?: readonly [IconName, IconName, IconName];
  imageBackground?: CollaboratorBioImageBackground;
  headerGradient?: CollaboratorBioHeaderGradient;
  iconColor?: CollaboratorBioIconColor;
  className?: string;
}

function normaliseWebHref(url: string) {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  return `https://${url}`;
}

export default function CollaboratorBio({
  name,
  role,
  org,
  children,
  photoSrc,
  photoAlt,
  email,
  web,
  instagram,
  linkedin,
  icons = DEFAULT_ICONS,
  imageBackground = 'theme-orange',
  headerGradient = 'theme-orange-theme-purple',
  iconColor = 'theme-orange',
  className,
}: CollaboratorBioProps) {
  const hasEmail = Boolean(email);
  const hasWeb = Boolean(web);
  const hasLinkedin = Boolean(linkedin);
  const hasInstagram = Boolean(instagram);
  const hasContactRow = hasEmail || hasWeb || hasLinkedin || hasInstagram;

  // Remove https:// and /
  const displayedWebsite = web ? web.replace('https://', '').replace('www.', '').replace('/', '') : undefined;

  return (
    <div
      data-testid={COLLABORATOR_BIO_DATA_TESTID}
      className={clsx('flex flex-col sm:flex-row w-full max-w-3xl', className)}
    >
      <div className="w-full sm:w-48 shrink-0 flex flex-col self-start">
        <Image
          src={photoSrc}
          alt={photoAlt ?? name}
          width={192}
          height={192}
          borderSides={['top', 'left', 'right']}
          background={IMAGE_BACKGROUND_CLASS[imageBackground]}
          containerClassName="aspect-square rounded-tr-3xl sm:rounded-tr-none sm:rounded-tl-3xl sm:border-r-0"
          className="object-cover h-full mix-blend-luminosity"
        />

        <Frame
          borderSides={[]}
          background="bg-theme-black"
          className="flex items-center justify-end gap-2 py-2 pr-2 sm:rounded-bl-3xl"
        >
          {icons.map((icon) => (
            <Icon key={icon} name={icon} size={20} className={ICON_COLOR_CLASS[iconColor]} />
          ))}
        </Frame>
      </div>

      <div className="flex-1 min-w-0 flex flex-col">
        <Frame
          borderSides={['top', 'left', 'right', 'bottom']}
          background={HEADER_GRADIENT_CLASS[headerGradient]}
          className="flex flex-col items-start border-t-0 sm:border-t-4 sm:rounded-tr-3xl sm:overflow-hidden"
        >
          <Frame borderSides={['right', 'bottom']} className="px-4 py-3 -mt-0.5 -mb-0.5">
            <h3 className="text-lg sm:text-xl font-bold text-theme-black leading-tight whitespace-nowrap">
              {name}
            </h3>
          </Frame>

          <Frame borderSides={['top', 'right']} className="flex items-stretch -mt-0.5">
            <div className="px-4 py-2">
              <p className="text-sm text-theme-black">
                <span className="font-bold">{role}{org && ':'}</span>
                {org && <> {org}</>}
              </p>
            </div>
          </Frame>
        </Frame>

        <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-3 flex-1">
          <div className="text-sm text-theme-black leading-relaxed [&_p]:mb-2 [&_p:last-child]:mb-0 [&_strong]:font-bold [&_em]:italic">
            {children}
          </div>
        </Frame>

        {hasContactRow && (
          <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-2 text-sm leading-6 sm:leading-5 flex flex-wrap items-center gap-x-3 gap-y-1">
            {hasEmail && email && <Anchor href={`mailto:${email}`}>{email}</Anchor>}
            {hasWeb && web && <Anchor href={normaliseWebHref(web)}>{displayedWebsite}</Anchor>}
            {hasLinkedin && linkedin && (
              <Anchor href={normaliseWebHref(linkedin)} aria-label="LinkedIn">
                <Icon name="linkedin" size={16} className="inline-block align-middle" />
              </Anchor>
            )}
            {hasInstagram && instagram && (
              <Anchor href={normaliseWebHref(instagram)} aria-label="Instagram">
                <Icon name="instagram" size={16} className="inline-block align-middle" />
              </Anchor>
            )}
          </Frame>
        )}
      </div>
    </div>
  );
}
