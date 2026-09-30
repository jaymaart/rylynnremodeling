import type { Metadata } from 'next';
import StartDateLookup from '@/components/StartDateLookup';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/data';

export const metadata: Metadata = { title: 'Customer Start Date', robots: { index: false } };

export default function StartDatePage() {
  return (
    <div className="tint">
      <div className="narrow" style={{ maxWidth: 720, paddingTop: 72, paddingBottom: 88, display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="eyebrow">CURRENT CUSTOMERS</span>
          <h1 className="display" style={{ fontSize: 'clamp(34px,4.4vw,52px)', letterSpacing: '-.03em', lineHeight: 1.05, margin: 0, textWrap: 'balance' }}>Check your project&apos;s start date</h1>
          <p className="lead">Enter the job number from your contract or invoice to see our current estimated start date.</p>
        </div>
        <div className="form-panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 20 }}>
          <StartDateLookup />
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--muted)', margin: 0 }}>
          This date is an estimate, not a guaranteed start date — most projects begin within the timeframe stated in your contract. If work doesn&apos;t start on the exact date shown here, that does not mean your job is delayed; schedules shift as active projects finish up. Questions about your specific timeline are always best answered by your project manager.
        </p>
        <div style={{ borderTop: '1px solid var(--line-2)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', fontSize: 14, color: 'var(--ink-2)' }}>
          <span><strong style={{ color: 'var(--ink)' }}>Rylynn Remodeling LLC</strong> · Serving Putnam, Kanawha &amp; Cabell counties</span>
          <a href={PHONE_HREF} style={{ fontWeight: 700, color: 'var(--ink)' }}>{PHONE_DISPLAY}</a>
        </div>
      </div>
    </div>
  );
}
