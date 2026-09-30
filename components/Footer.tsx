import Link from 'next/link';
import { LOGO_SRC, PHONE_HREF } from '@/lib/data';

const colTitle: React.CSSProperties = { fontSize: 12, fontWeight: 700, letterSpacing: '.14em', color: 'var(--ink)' };
const col: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 10 };

export default function Footer() {
  return (
    <footer className="wrap" style={{ paddingTop: 56, paddingBottom: 32, display: 'flex', flexDirection: 'column', gap: 40, fontSize: 15, color: 'var(--ink-2)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(180px,100%),1fr))', gap: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <img src={LOGO_SRC} alt="Rylynn Remodeling" style={{ height: 48, width: 'auto', alignSelf: 'flex-start' }} />
          <span style={{ fontSize: 14, lineHeight: 1.6 }}>
            3218 Teays Valley Rd.<br />Hurricane, WV 25526<br />
            <a href={PHONE_HREF} style={{ fontWeight: 700, color: 'var(--ink)' }}>304.908.3009</a>
          </span>
        </div>
        <div style={col}>
          <span style={colTitle}>COMPANY</span>
          <Link href="/about">About Us</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div style={col}>
          <span style={colTitle}>SERVICES</span>
          <Link href="/interior">Interior</Link>
          <Link href="/exterior">Exterior</Link>
          <Link href="/work">Project Gallery</Link>
          <Link href="/products">Our Products</Link>
        </div>
        <div style={col}>
          <span style={colTitle}>PLANNING</span>
          <Link href="/ballpark">Ballpark Estimate Range</Link>
          <Link href="/financing">Financing</Link>
          <Link href="/service-area">Service Area</Link>
        </div>
        <div style={col}>
          <span style={colTitle}>FOLLOW</span>
          <a href="https://www.facebook.com/rylynnremodeling">Facebook</a>
          <a href="https://www.instagram.com/rylynnremodeling/">Instagram</a>
          <a href="https://www.tiktok.com/@rylynn_remodeling">TikTok</a>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingTop: 22, borderTop: '1px solid var(--line)', fontSize: 13, color: 'var(--muted)' }}>
        <span>©2026 by Rylynn Remodeling · License #WV059111</span>
        <span>BBB A+ · Licensed &amp; Insured in WV · Fiberon Partner</span>
      </div>
    </footer>
  );
}
