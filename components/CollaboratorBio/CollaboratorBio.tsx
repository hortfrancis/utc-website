import clsx from 'clsx';
import Anchor from '../Anchor';
import { Frame } from '../Frame';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';
import Image from '../Image';

export const COLLABORATOR_BIO_DATA_TESTID = 'CollaboratorBio';

export type CollaboratorBioImageBackground =
  | 'theme-orange'
  | 'theme-green'
  | 'theme-cyan'
  | 'theme-purple'
  | 'theme-magenta';

export type CollaboratorBioHeaderGradient =
  | 'theme-orange-theme-purple'
  | 'theme-green-theme-cyan'
  | 'theme-cyan-theme-purple'
  | 'theme-orange-theme-magenta';

export type CollaboratorBioIconColor =
  | 'theme-orange'
  | 'theme-green'
  | 'theme-cyan'
  | 'theme-purple'
  | 'theme-magenta'
  | 'theme-white';

const IMAGE_BACKGROUND_CLASS: Record<CollaboratorBioImageBackground, string> = {
  'theme-orange': 'bg-theme-orange',
  'theme-green': 'bg-theme-green',
  'theme-cyan': 'bg-theme-cyan',
  'theme-purple': 'bg-theme-purple',
  'theme-magenta': 'bg-theme-magenta',
};

const HEADER_GRADIENT_CLASS: Record<CollaboratorBioHeaderGradient, string> = {
  'theme-orange-theme-purple': 'bg-linear-to-r from-theme-orange to-theme-purple',
  'theme-green-theme-cyan': 'bg-linear-to-r from-theme-green to-theme-cyan',
  'theme-cyan-theme-purple': 'bg-linear-to-r from-theme-cyan to-theme-purple',
  'theme-orange-theme-magenta': 'bg-linear-to-r from-theme-orange to-theme-magenta',
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
  relationship: string;
  bio: string;
  photoSrc: string;
  photoAlt?: string;
  email?: string;
  web?: string;
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
  relationship,
  bio,
  photoSrc,
  photoAlt,
  email,
  web,
  icons = DEFAULT_ICONS,
  imageBackground = 'theme-orange',
  headerGradient = 'theme-orange-theme-purple',
  iconColor = 'theme-orange',
  className,
}: CollaboratorBioProps) {
  const hasEmail = Boolean(email);
  const hasWeb = Boolean(web);
  const hasContactRow = hasEmail || hasWeb;

  return (
    <div
      data-testid={COLLABORATOR_BIO_DATA_TESTID}
      className={clsx('flex flex-col sm:flex-row max-w-2xl', className)}
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
                <span className="font-bold">{role}</span> · {relationship}
              </p>
            </div>
          </Frame>
        </Frame>

        <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-3 flex-1">
          <p className="text-sm text-theme-black leading-relaxed">{bio}</p>
        </Frame>

        {hasContactRow && (
          <Frame borderSides={['left', 'right', 'bottom']} className="px-4 py-2 text-sm leading-6 sm:leading-5">
            {hasEmail && email && <Anchor href={`mailto:${email}`}>{email}</Anchor>}

            {hasEmail && hasWeb && <span className="hidden sm:inline text-theme-black"> · </span>}
            {hasEmail && hasWeb && <br className="sm:hidden" />}

            {hasWeb && web && <Anchor href={normaliseWebHref(web)}>{web}</Anchor>}
          </Frame>
        )}
      </div>
    </div>
  );
}
