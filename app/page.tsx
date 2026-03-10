'use client';

import { useState } from 'react';
import { preload } from 'react-dom';
import Cube from '@/components/Cube';
import type { FacePosition } from '@/components/Cube/Cube';
import SectionDetail from '@/components/SectionDetail';

export default function Home() {
  // Hoist preload hints into <head> so face images fetch in parallel with
  // other page resources rather than being discovered by the browser late.
  preload('/faces/xr.jpg', { as: 'image', fetchPriority: 'high' });
  preload('/faces/work.jpg', { as: 'image', fetchPriority: 'high' });
  preload('/faces/ai.jpg', { as: 'image', fetchPriority: 'high' });
  preload('/faces/hamster.jpg', { as: 'image', fetchPriority: 'high' });
  preload('/faces/collaborators.jpg', { as: 'image', fetchPriority: 'high' });

  const [activeFace, setActiveFace] = useState<FacePosition | null>(null);

  return (
    <>
      <Cube onFaceTap={(face) => setActiveFace(face)} />
      <SectionDetail
        face={activeFace}
        onClose={() => setActiveFace(null)}
      />
    </>
  );
}
