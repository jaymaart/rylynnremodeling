'use client';

import { useState } from 'react';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/data';

const field: React.CSSProperties = { border: '1px solid var(--line-2)', borderRadius: 8, padding: 14, fontSize: 16, background: '#fff' };
const pair: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 };

const PROJECT_TYPES = ['Kitchen', 'Bathroom / Shower', 'Basement', 'Flooring & Tile', 'Deck / Porch', 'Siding / Roofing / Gutters', 'Other'];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '24px 0' }}>
        <div className="display" style={{ fontSize: 30 }}>Thanks, we got it.</div>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
          Need us sooner? Call <a href={PHONE_HREF} style={{ color: 'var(--green)', fontWeight: 700 }}>{PHONE_DISPLAY}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div className="display" style={{ fontSize: 28, marginBottom: 4 }}>Get Your Free Estimate!</div>
      <div style={pair}>
        <input required name="name" placeholder="Name" aria-label="Name" style={field} />
        <input required name="phone" placeholder="Phone" aria-label="Phone" type="tel" style={field} />
      </div>
      <input name="email" placeholder="Email" aria-label="Email" type="email" style={field} />
      <div style={pair}>
        <input name="city" placeholder="City" aria-label="City" style={field} />
        <select name="projectType" aria-label="Project type" defaultValue="" style={{ ...field, color: 'var(--ink)' }}>
          <option value="" disabled>Project type</option>
          {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <textarea name="message" placeholder="Tell us about your project" aria-label="Tell us about your project" rows={4} style={{ ...field, resize: 'vertical' }} />
      <button type="submit" className="btn btn-primary" style={{ border: 0, padding: 16, fontSize: 17, cursor: 'pointer' }}>Get Your Free Estimate →</button>
    </form>
  );
}
