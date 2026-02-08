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
  CubeIcon,
  CubeTransparentIcon,
  VirtualRealityIcon,
  GlobeIcon,
  GlobeHemisphereEastIcon,
  MonitorIcon,
  DeviceMobileIcon,
  WifiHighIcon,
  LightningIcon,
  BroadcastIcon,
  AtomIcon,
  CircuitryIcon,

  // Creative / work
  PencilSimpleIcon,
  PaintBrushIcon,
  CameraIcon,
  ImageIcon,
  VideoCameraIcon,
  FilmStripIcon,
  CodeIcon,
  BrowsersIcon,
  PaletteIcon,

  // Communication / news
  NewspaperIcon,
  MegaphoneIcon,
  EnvelopeIcon,
  ChatCircleIcon,
  PlayCircleIcon,
  VideoIcon,
  RssIcon,

  // Navigation / UI
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  XIcon,
  CheckIcon,
  PlusIcon,
  MinusIcon,
  GearIcon,
  MagnifyingGlassIcon,
  HouseIcon,
  ListIcon,
  UserIcon,
  UsersIcon,
  EyeIcon,
  ShareIcon,

  // Fun / misc
  PawPrintIcon,
  SmileyIcon,
  StarIcon,
  HeartIcon,
  RocketIcon,
  SparkleIcon,
  PlanetIcon,
  AlienIcon,
} from '@phosphor-icons/react';

const iconRegistry = {
  // XR / tech
  'cube': CubeIcon,
  'cube-transparent': CubeTransparentIcon,
  'virtual-reality': VirtualRealityIcon,
  'globe': GlobeIcon,
  'globe-hemisphere': GlobeHemisphereEastIcon,
  'monitor': MonitorIcon,
  'device-mobile': DeviceMobileIcon,
  'wifi': WifiHighIcon,
  'lightning': LightningIcon,
  'broadcast': BroadcastIcon,
  'atom': AtomIcon,
  'circuit-board': CircuitryIcon,

  // Creative / work
  'pencil': PencilSimpleIcon,
  'paintbrush': PaintBrushIcon,
  'camera': CameraIcon,
  'image': ImageIcon,
  'video-camera': VideoCameraIcon,
  'film-strip': FilmStripIcon,
  'code': CodeIcon,
  'browsers': BrowsersIcon,
  'palette': PaletteIcon,

  // Communication / news
  'newspaper': NewspaperIcon,
  'megaphone': MegaphoneIcon,
  'envelope': EnvelopeIcon,
  'chat': ChatCircleIcon,
  'play-circle': PlayCircleIcon,
  'video': VideoIcon,
  'rss': RssIcon,

  // Navigation / UI
  'arrow-right': ArrowRightIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-up': ArrowUpIcon,
  'arrow-down': ArrowDownIcon,
  'x': XIcon,
  'check': CheckIcon,
  'plus': PlusIcon,
  'minus': MinusIcon,
  'gear': GearIcon,
  'search': MagnifyingGlassIcon,
  'house': HouseIcon,
  'list': ListIcon,
  'user': UserIcon,
  'users': UsersIcon,
  'eye': EyeIcon,
  'share': ShareIcon,

  // Fun / misc
  'paw-print': PawPrintIcon,
  'smiley': SmileyIcon,
  'star': StarIcon,
  'heart': HeartIcon,
  'rocket': RocketIcon,
  'sparkle': SparkleIcon,
  'planet': PlanetIcon,
  'alien': AlienIcon,
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
