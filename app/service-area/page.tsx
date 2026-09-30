import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
import { CITIES } from '@/lib/data';

export const metadata: Metadata = { title: 'Service Area' };

export default function ServiceAreaPage() {
  return (
    <>
      <div className="wrap" style={{ paddingTop: 24 }}>
        <img src="https://static.wixstatic.com/media/66ee84_048d9a0580af477487ee5cc9895f5115~mv2.avif/v1/fill/w_2400,h_700,al_c,q_85/skyline.avif" alt="Charleston, WV skyline" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 20 }} />
      </div>
      <div className="wrap" style={{ paddingTop: 56, paddingBottom: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(360px,1fr))', gap: '24px 56px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span className="eyebrow">SERVICE AREA</span>
          <h1 className="display" style={{ fontSize: 'clamp(36px,4vw,52px)', letterSpacing: '-.03em', lineHeight: 1.05, margin: 0, textWrap: 'balance' }}>
            Serving the Kanawha Valley — Charleston to Huntington and Everywhere Between.
          </h1>
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)', margin: 0, alignSelf: 'end' }}>
          Rylynn Remodeling is based in Teays Valley and serves homeowners throughout Putnam, Kanawha, and Cabell counties, including Charleston, Huntington, St. Albans, South Charleston, Cross Lanes, Nitro, Dunbar, Winfield, Milton, Teays Valley, Scott Depot, Barboursville, and Buffalo. Click your city below to see our recent projects in your area
        </p>
      </div>
      <div className="wrap" style={{ paddingBottom: 88, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16 }}>
        {CITIES.map((c) => (
          <Link key={c.slug} href={`/service-area/${c.slug}`} data-testid="city-card" style={{ border: '1px solid var(--line)', borderRadius: 14, padding: 12, display: 'flex', gap: 14, alignItems: 'center' }}>
            <img src={c.img} alt="" style={{ width: 64, height: 64, borderRadius: 10, objectFit: 'cover', background: 'var(--tint)', flexShrink: 0 }} />
            <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontWeight: 700, fontSize: 17 }}>{c.name}</span>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>{c.county} County →</span>
            </span>
          </Link>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
