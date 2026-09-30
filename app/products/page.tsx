import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = { title: 'Our Products' };

const PRODUCTS: ReadonlyArray<{ cat: string; name: string; body: string; img: string }> = [
  { cat: 'SHOWERS', name: 'Rylynn Shower Systems', body: 'A vast range of colors to match your style.', img: 'https://static.wixstatic.com/media/66ee84_16d864e56bc642daba88a3d359d343da~mv2.jpg/v1/fill/w_800,h_560,al_c,q_85/shower.jpg' },
  { cat: 'FLOORING & TILE', name: 'Mannington · Everlife · Daltile · MSI', body: 'LVT and tile, from $9 per square foot installed.', img: 'https://static.wixstatic.com/media/66ee84_1a9f94194b274452bbc80289f68bb578~mv2.jpg/v1/fill/w_800,h_560,al_c,q_85/floor.jpg' },
  { cat: 'DECKING', name: 'Fiberon Composite', body: 'Official Fiberon partner. Low-maintenance decks in every style.', img: 'https://static.wixstatic.com/media/66ee84_efcb7e37029544ff918b987970972955~mv2.jpeg/v1/fill/w_800,h_560,al_c,q_85/deck.jpeg' },
];

export default function ProductsPage() {
  return (
    <>
      <div className="tint">
        <div className="wrap page-hero">
          <span className="eyebrow">OUR PRODUCTS</span>
          <h1 className="page-title">Top brands, on display in our showroom.</h1>
          <p className="lead" style={{ maxWidth: 720 }}>See decking colors, siding samples, flooring and tile in person at our Teays Valley showroom.</p>
        </div>
      </div>
      <div className="wrap" style={{ paddingTop: 64, paddingBottom: 88, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: 20 }}>
        {PRODUCTS.map((p) => (
          <div key={p.cat} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img src={p.img} alt="" style={{ width: '100%', height: 240, objectFit: 'cover' }} />
            <div style={{ padding: 26, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.12em', color: 'var(--green)' }}>{p.cat}</span>
              <span className="display" style={{ fontSize: 24 }}>{p.name}</span>
              <span style={{ fontSize: 15, color: 'var(--ink-2)' }}>{p.body}</span>
            </div>
          </div>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
