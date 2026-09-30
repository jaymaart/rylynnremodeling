import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/data';

export const metadata: Metadata = { title: 'Contact' };

const row: React.CSSProperties = { padding: '18px 0', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', gap: 20 };

export default function ContactPage() {
  return (
    <div className="wrap" style={{ paddingTop: 72, paddingBottom: 88, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(380px,100%),1fr))', gap: 56, alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <span className="eyebrow">CONTACT</span>
        <h1 className="display" style={{ fontSize: 'clamp(40px,5vw,62px)', letterSpacing: '-.03em', lineHeight: 1.02, margin: 0 }}>Call Us or Visit Our Showroom</h1>
        <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>
          Ready to make your dreams a reality? Get in touch today and let our licensed experts help get the job done right or stop by to see what we can do for you!
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 17, marginTop: 8 }}>
          <div className="kv" style={row}><span style={{ color: 'var(--muted)' }}>Showroom</span><span style={{ textAlign: 'right' }}>3218 Teays Valley Road<br />Hurricane, WV 25526</span></div>
          <div className="kv" style={row}><span style={{ color: 'var(--muted)' }}>Mail</span><a href="mailto:rylynnremodeling@gmail.com">rylynnremodeling@gmail.com</a></div>
          <div className="kv" style={{ ...row, borderBottom: '1px solid var(--line)' }}><span style={{ color: 'var(--muted)' }}>Phone</span><a href={PHONE_HREF} style={{ fontWeight: 700 }}>{PHONE_DISPLAY}</a></div>
        </div>
      </div>
      <div className="tint form-panel" style={{ borderRadius: 20 }}>
        <ContactForm />
      </div>
    </div>
  );
}
