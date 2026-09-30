import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = { title: 'Our Work' };

const CARDS: ReadonlyArray<{ href: string; label: string; cta: string; img: string }> = [
  { href: '/interior', label: 'Interior', cta: 'Kitchens, baths & more →', img: 'https://static.wixstatic.com/media/66ee84_5003d015f44a4b66b339c6b04e7ea422~mv2.png/v1/fill/w_1200,h_800,al_c,q_85/bath.png' },
  { href: '/exterior', label: 'Exterior', cta: 'Decks, siding & roofing →', img: 'https://static.wixstatic.com/media/66ee84_cdb1383ec3964cae96c31665fda9cb0b~mv2.jpeg/v1/fill/w_1200,h_800,al_c,q_85/ext.jpeg' },
];

export default function WorkPage() {
  return (
    <>
      <div className="tint">
        <div className="wrap page-hero" style={{ gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span className="eyebrow">OUR WORK</span>
            <h1 className="page-title">Interior &amp; Exterior remodeling done right.</h1>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))', gap: 20 }}>
            {CARDS.map((c) => (
              <Link key={c.href} href={c.href} style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', height: 340, display: 'flex', alignItems: 'flex-end' }}>
                <img src={c.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(10,20,15,.75),rgba(10,20,15,0) 60%)' }} />
                <div style={{ position: 'relative', padding: 28, color: '#fff', display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-end' }}>
                  <span className="display" style={{ fontSize: 34 }}>{c.label}</span>
                  <span style={{ fontSize: 15, fontWeight: 700 }}>{c.cta}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Gallery />
      <CtaBand />
    </>
  );
}
