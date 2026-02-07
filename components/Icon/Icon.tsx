import type { ComponentType } from 'react';
import type { IconProps as PhosphorIconProps } from '@phosphor-icons/react';

/* ------------------------------------------------------------------ */
/*  Icon registry                                                      */
/*                                                                     */
/*  Curated set of Phosphor icons for the design system. Add new       */
/*  icons here as needed — only registered icons are bundled.          */
/* ------------------------------------------------------------------ */

import {
  // XR / tech
  Cube,
  CubeTransparent,
  VirtualReality,
  Globe,
  GlobeHemisphereEast,
  Monitor,
  DeviceMobile,
  WifiHigh,
  Lightning,
  Broadcast,
  Atom,
  CircuitBoard,

  // Creative / work
  PencilSimple,
  Paintbrush,
  Camera,
  Image,
  VideoCamera,
  FilmStrip,
  Code,
  Browsers,
  Palette,

  // Communication / news
  Newspaper,
  Megaphone,
  Envelope,
  ChatCircle,
  PlayCircle,
  Video,
  Rss,

  // Navigation / UI
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  X,
  Check,
  Plus,
  Minus,
  Gear,
  MagnifyingGlass,
  House,
  List,
  User,
  Users,
  Eye,
  Share,

  // Fun / misc
  PawPrint,
  Smiley,
  Star,
  Heart,
  Rocket,
  Sparkle,
  Planet,
  Alien,
} from '@phosphor-icons/react';

const iconRegistry = {
  // XR / tech
  'cube': Cube,
  'cube-transparent': CubeTransparent,
  'virtual-reality': VirtualReality,
  'globe': Globe,
  'globe-hemisphere': GlobeHemisphereEast,
  'monitor': Monitor,
  'device-mobile': DeviceMobile,
  'wifi': WifiHigh,
  'lightning': Lightning,
  'broadcast': Broadcast,
  'atom': Atom,
  'circuit-board': CircuitBoard,

  // Creative / work
  'pencil': PencilSimple,
  'paintbrush': Paintbrush,
  'camera': Camera,
  'image': Image,
  'video-camera': VideoCamera,
  'film-strip': FilmStrip,
  'code': Code,
  'browsers': Browsers,
  'palette': Palette,

  // Communication / news
  'newspaper': Newspaper,
  'megaphone': Megaphone,
  'envelope': Envelope,
  'chat': ChatCircle,
  'play-circle': PlayCircle,
  'video': Video,
  'rss': Rss,

  // Navigation / UI
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,
  'x': X,
  'check': Check,
  'plus': Plus,
  'minus': Minus,
  'gear': Gear,
  'search': MagnifyingGlass,
  'house': House,
  'list': List,
  'user': User,
  'users': Users,
  'eye': Eye,
  'share': Share,

  // Fun / misc
  'paw-print': PawPrint,
  'smiley': Smiley,
  'star': Star,
  'heart': Heart,
  'rocket': Rocket,
  'sparkle': Sparkle,
  'planet': Planet,
  'alien': Alien,
} as const satisfies Record<string, ComponentType<PhosphorIconProps>>;

export type IconName = keyof typeof iconRegistry;

export const iconNames = Object.keys(iconRegistry) as IconName[];

/* ------------------------------------------------------------------ */
/*  Icon component                                                     */
/* ------------------------------------------------------------------ */

export const ICON_DATA_TESTID = 'Icon';

export type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

export interface IconProps {
  /** Icon name from the registry. */
  name: IconName;
  /** Pixel size (width and height). */
  size?: number;
  /** CSS color value. Defaults to current text color (inherits from parent). */
  color?: string;
  /** Phosphor weight variant. Defaults to 'fill' (acid design preference). */
  weight?: IconWeight;
  /** Optional className for the wrapper span. */
  className?: string;
}

/**
 * Icon component wrapping Phosphor Icons. Takes a string `name` to select
 * from the curated registry. Defaults to fill weight for bold silhouettes
 * (acid design style).
 *
 * To add a new icon: import it from @phosphor-icons/react and add an entry
 * to the `iconRegistry` map above.
 */
export default function Icon({
  name,
  size = 24,
  color,
  weight = 'fill',
  className,
}: IconProps) {
  const PhosphorIcon = iconRegistry[name];

  if (!PhosphorIcon) {
    return null;
  }

  return (
    <span data-testid={ICON_DATA_TESTID} className={className}>
      <PhosphorIcon size={size} color={color} weight={weight} />
    </span>
  );
}
