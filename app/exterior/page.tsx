import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';
import ServiceList from '@/components/ServiceList';
import { EXTERIOR } from '@/lib/data';

export const metadata: Metadata = { title: 'Exterior Projects' };

export default function ExteriorPage() {
  return (
    <>
      <div className="tint">
        <div className="wrap split-hero">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span className="eyebrow">OUR WORK · EXTERIOR</span>
            <h1 className="page-title" style={{ fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1.02 }}>Exterior Projects</h1>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>
              Your home&apos;s exterior is the first thing everyone sees — and in West Virginia weather, it works hard for a living. From composite decks and covered porches to siding, roofing, and storm damage restoration, our exterior division handles it all with the same licensed, insured, showroom-backed process as everything we build. Browse the projects below, then come see decking colors and siding samples in person at our Teays Valley showroom.
            </p>
          </div>
          <img className="arch" src="https://static.wixstatic.com/media/66ee84_cdb1383ec3964cae96c31665fda9cb0b~mv2.jpeg/v1/fill/w_1200,h_900,al_c,q_85/ext.jpeg" alt="" style={{ height: 420 }} />
        </div>
      </div>
      <ServiceList services={EXTERIOR} />
      <CtaBand />
    </>
  );
}
