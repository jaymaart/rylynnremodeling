import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/data';

export default function TopBar() {
  return (
    <div style={{ background: 'var(--green-dark)', color: 'var(--on-dark)', fontSize: 13 }}>
      <div className="wrap" style={{ paddingTop: 9, paddingBottom: 9, display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span className="topbar-info">License #WV059111 · Showroom at 3218 Teays Valley Rd, Hurricane, WV</span>
        <span style={{ display: 'flex', gap: '6px 20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--on-dark-muted)' }}>Current customers:</span>
          <a href="https://claude.ai/code/artifact/54854629-4aca-4164-912f-fac8f67ab5ea">Customer Start Date</a>
          <a href="https://www.rylynnremodeling.com/notifications">Notifications</a>
          <a href={PHONE_HREF} style={{ fontWeight: 700, color: '#fff' }}>Call {PHONE_DISPLAY}</a>
        </span>
      </div>
    </div>
  );
}
