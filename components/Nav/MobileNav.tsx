'use client';

import { useEffect, useRef } from 'react';
import MobileNavPanel from './MobileNavPanel';
import { navLinks } from './navLinks';

export interface MobileNavProps {
  onClose: () => void;
}

const MOBILE_NAV_DATA_TESTID = 'MobileNav';

/**
 * Mobile nav menu with click-outside-to-close. Composes MobileNavPanel.
 */
export default function MobileNav({ onClose }: MobileNavProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={ref} data-testid={MOBILE_NAV_DATA_TESTID} className="absolute top-30 right-0">
      <MobileNavPanel links={navLinks} onLinkClick={onClose} />
    </div>
  );
}
