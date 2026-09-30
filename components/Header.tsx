'use client';

import Link from 'next/link';
import { useState } from 'react';
import SocialLinks from '@/components/SocialLinks';
import { CITIES, LOGO_SRC, PHONE_DISPLAY, PHONE_HREF } from '@/lib/data';

type MenuKey = 'about' | 'work' | 'area' | 'pricing';

interface MenuLink {
  href: string;
  title: string;
  sub: string;
}

const ABOUT: ReadonlyArray<MenuLink> = [
  { href: '/about', title: 'About Us', sub: 'Our story & team' },
  { href: '/careers', title: 'Careers', sub: 'We’re hiring' },
  { href: '/blog', title: 'Blog', sub: 'Tips & project stories' },
];

const WORK: ReadonlyArray<MenuLink> = [
  { href: '/interior', title: 'Interior', sub: 'Kitchens, baths, flooring & more' },
  { href: '/exterior', title: 'Exterior', sub: 'Decks, siding, roofing & more' },
  { href: '/work', title: 'Project Gallery', sub: 'Interior & exterior photos' },
  { href: '/products', title: 'Our Products', sub: 'Brands in our showroom' },
];

const panel: React.CSSProperties = {
  background: '#fff', border: '1px solid var(--line)', borderRadius: 14, boxShadow: '0 18px 40px rgba(16,32,24,.12)',
  padding: 10, display: 'flex', flexDirection: 'column', gap: 2, whiteSpace: 'normal',
};

const trigger: React.CSSProperties = {
  display: 'flex', gap: 6, alignItems: 'center', padding: '8px 0', background: 'none', border: 0,
  color: 'inherit', fontWeight: 500, cursor: 'pointer',
};

export default function Header() {
  const [menu, setMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => { setMenu(null); setMobileOpen(false); };

  const dropdown = (key: MenuKey, label: string, width: number, content: React.ReactNode) => (
    <div style={{ position: 'relative' }} onMouseEnter={() => setMenu(key)}>
      <button type="button" style={trigger} aria-expanded={menu === key} onClick={() => setMenu(menu === key ? null : key)}>
        {label}<span style={{ fontSize: 10, color: 'var(--muted)' }} aria-hidden>▾</span>
      </button>
      {menu === key && (
        <div style={{ position: 'absolute', top: '100%', left: -18, paddingTop: 12, zIndex: 20 }}>
          <div style={{ ...panel, width }}>{content}</div>
        </div>
      )}
    </div>
  );

  const items = (links: ReadonlyArray<MenuLink>) =>
    links.map((l) => (
      <Link key={l.href} href={l.href} onClick={close} className="hover-tint" style={{ padding: '10px 12px', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 15 }}>{l.title}</span>
        <span style={{ fontSize: 13, color: 'var(--muted)' }}>{l.sub}</span>
      </Link>
    ));

  return (
    <header style={{ borderBottom: '1px solid var(--line)', background: '#fff', position: 'sticky', top: 0, zIndex: 10 }}>
      <div className="header-inner">
        <Link href="/" onClick={close} style={{ display: 'flex' }}>
          <img src={LOGO_SRC} alt="Rylynn Remodeling" style={{ height: 46, width: 'auto' }} />
        </Link>
        <nav
          aria-label="Main"
          className="desktop-nav"
          style={{ display: 'flex', gap: 18, fontSize: 15, fontWeight: 500, color: 'var(--ink-2)', whiteSpace: 'nowrap', marginLeft: 'auto', marginRight: 6, alignItems: 'center' }}
          onMouseLeave={close}
        >
          {dropdown('about', 'About', 260, items(ABOUT))}
          {dropdown('work', 'Our Work', 280, items(WORK))}
          {dropdown('area', 'Service Area', 420, (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                {CITIES.map((c) => (
                  <Link key={c.slug} href={`/service-area/${c.slug}`} onClick={close} className="hover-tint" style={{ padding: '8px 12px', borderRadius: 8, fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>
                    {c.name}
                  </Link>
                ))}
              </div>
              <Link href="/service-area" onClick={close} style={{ marginTop: 6, borderTop: '1px solid var(--line)', padding: '12px 12px 6px', fontWeight: 700, fontSize: 14, color: 'var(--green)' }}>
                All service areas →
              </Link>
            </>
          ))}
          {dropdown('pricing', 'Pricing', 300, (
            <>
              <Link href="/ballpark" onClick={close} style={{ padding: 14, borderRadius: 10, background: 'var(--mint)', display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ fontWeight: 700, color: 'var(--green-dark)', fontSize: 15 }}>Ballpark Estimate Range →</span>
                <span style={{ fontSize: 13, color: 'var(--ink-2)' }}>See a real price range in under a minute</span>
              </Link>
              {items([{ href: '/financing', title: 'Financing', sub: 'Monthly payment options' }])}
            </>
          ))}
          <Link href="/contact" onClick={close} style={{ padding: '8px 0' }}>Contact</Link>
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
          <Link href="/ballpark" className="header-instant" style={{ border: '1.5px solid var(--green)', color: 'var(--green)', padding: '9.5px 13px', borderRadius: 8, fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap' }}>Instant Price</Link>
          <Link href="/contact" onClick={close} style={{ background: 'var(--green)', color: '#fff', padding: '11px 14px', borderRadius: 8, fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap' }}>Free Estimate</Link>
          <button type="button" className="menu-toggle" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <nav aria-label="Mobile" className="mobile-menu">
          <div className="mobile-menu-group">
            <span>PRICING</span>
            <Link href="/ballpark" onClick={close} style={{ color: 'var(--green)', fontWeight: 700 }}>Ballpark Estimate Range →</Link>
            <Link href="/financing" onClick={close}>Financing</Link>
          </div>
          <div className="mobile-menu-group">
            <span>OUR WORK</span>
            {WORK.map((l) => <Link key={l.href} href={l.href} onClick={close}>{l.title}</Link>)}
          </div>
          <div className="mobile-menu-group">
            <span>SERVICE AREA</span>
            <div className="mobile-city-grid">
              {CITIES.map((c) => <Link key={c.slug} href={`/service-area/${c.slug}`} onClick={close}>{c.name}</Link>)}
            </div>
            <Link href="/service-area" onClick={close} style={{ color: 'var(--green)', fontWeight: 700, fontSize: 15 }}>All service areas →</Link>
          </div>
          <div className="mobile-menu-group">
            <span>ABOUT</span>
            {ABOUT.map((l) => <Link key={l.href} href={l.href} onClick={close}>{l.title}</Link>)}
            <Link href="/contact" onClick={close}>Contact</Link>
          </div>
          <a href={PHONE_HREF} className="btn btn-outline" style={{ marginTop: 18, padding: 14, textAlign: 'center', fontSize: 16 }}>Call {PHONE_DISPLAY}</a>
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 18 }}><SocialLinks /></div>
        </nav>
      )}
    </header>
  );
}
