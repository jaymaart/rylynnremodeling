import Link from 'next/link';

const row: React.CSSProperties = { padding: '16px 0', borderTop: '1px solid #4a7d60', display: 'flex', justifyContent: 'space-between', gap: 20 };

export default function CtaBand() {
  return (
    <div style={{ maxWidth: 1328, margin: '0 auto', padding: '0 24px 24px' }}>
      <div className="cta-card" style={{ background: 'var(--green)', color: '#fff', borderRadius: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))', gap: 48, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <h2 className="display" style={{ fontSize: 'clamp(36px,4vw,52px)', letterSpacing: '-.025em', margin: 0, lineHeight: 1.02 }}>Ready to Upgrade Your Home?</h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, margin: 0, color: 'var(--on-dark)' }}>
            Do you have a project you&apos;ve been wanting to get done? Reach out to us today or visit our showroom to let our licensed experts help get the job done right.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 6 }}>
            <Link href="/contact" className="btn btn-md" style={{ background: '#fff', color: 'var(--ink)' }}>Get Your Free Estimate →</Link>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 16 }}>
          <div className="kv" style={row}><span style={{ color: 'var(--on-dark-muted)' }}>Location</span><span style={{ textAlign: 'right' }}>3218 Teays Valley Road, Hurricane, WV 25526</span></div>
          <div className="kv" style={row}><span style={{ color: 'var(--on-dark-muted)' }}>Mail</span><a href="mailto:marketing@rylynnremodeling.com">marketing@rylynnremodeling.com</a></div>
          <div className="kv" style={{ ...row, borderBottom: '1px solid #4a7d60' }}><span style={{ color: 'var(--on-dark-muted)' }}>Phone</span><a href="tel:3049083009" style={{ fontWeight: 700 }}>304-908-3009</a></div>
        </div>
      </div>
    </div>
  );
}
