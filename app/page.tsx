'use client';

import { useState } from 'react';
import Cube from '@/components/Cube';
import type { FacePosition } from '@/components/Cube/Cube';
import SectionDetail from '@/components/SectionDetail';

export default function Home() {
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
