import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
import { JOBS } from '@/lib/data';

export const metadata: Metadata = { title: 'Careers' };

const PERKS = ['Steady local work across the Kanawha Valley', 'Profit bonus program', 'No overnight travel'];

export default function CareersPage() {
  return (
    <>
      <div className="tint">
        <div className="wrap page-hero" style={{ gap: 18 }}>
          <span className="eyebrow">CAREERS</span>
          <h1 className="page-title">Rylynn Remodeling is Hiring!</h1>
          <p className="lead" style={{ maxWidth: 720 }}>Join a growing remodeling team — carpenters, team leaders &amp; project managers.</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {PERKS.map((p) => <span key={p} style={{ background: '#fff', borderRadius: 999, padding: '8px 14px', fontSize: 15, fontWeight: 500 }}>{p}</span>)}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '64px 48px 88px', display: 'flex', flexDirection: 'column' }}>
        {JOBS.map((title, i) => (
          <div key={title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, padding: '24px 0', borderTop: '1px solid var(--line)' }}>
            <span style={{ display: 'flex', gap: 18, alignItems: 'baseline' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--green)' }}>{String(i + 1).padStart(2, '0')}</span>
              <span className="display" style={{ fontSize: 28 }}>{title}</span>
            </span>
            <Link href="/contact" className="btn btn-outline" style={{ padding: '10px 18px', fontSize: 15 }}>Apply →</Link>
          </div>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
