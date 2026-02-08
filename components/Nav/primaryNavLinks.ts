import type { IconName } from '@/components/Icon/Icon';

export interface NavLinkItem {
  href: string;
  label: string;
  icon: IconName;
}

export const primaryNavLinks: NavLinkItem[] = [
  { href: '/work', label: 'Work', icon: 'paintbrush' },
  { href: '/xr', label: 'XR', icon: 'virtual-reality' },
  { href: '/news', label: 'News', icon: 'newspaper' },
  { href: '/about', label: 'About', icon: 'eye' },
  { href: '/contact', label: 'Contact', icon: 'envelope' },
];
