import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = { title: 'About Us' };

const row: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: '24px 56px', padding: '32px 0', borderTop: '1px solid var(--line)' };
const rowTitle: React.CSSProperties = { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, letterSpacing: '-.02em', margin: 0 };
const rowText: React.CSSProperties = { fontSize: 18, lineHeight: 1.65, margin: 0, color: 'var(--ink-2)' };

const TEAM: ReadonlyArray<{ name: string; role: string; img: string; bio: string }> = [
  { name: 'Jeff Covert', role: 'PRESIDENT/CEO', img: 'https://static.wixstatic.com/media/66ee84_1107c2f47e28458c943b936e69fefab5~mv2.png/v1/fill/w_900,h_700,al_t,q_85/jeff.png', bio: 'Jeff is born and raised West Virginian who grew up in Cross Lanes. Currently, he lives in Scott Depot. He has worked in the residential remodeling and new construction most of his life. Jeff has managed offices all along the East Coast until 2019, when he started his own business, Rylynn Remodeling.' },
  { name: 'Steven Niedbalski', role: 'GENERAL MANAGER', img: 'https://static.wixstatic.com/media/66ee84_44afee0774004cad890a0c026cf95625~mv2.jpg/v1/fill/w_900,h_700,al_t,q_85/steven.jpg', bio: 'Steven grew up in St. Albans and now lives in Hurricane. Steven has spent his career in 2 primary sectors, Remodeling and Restaurants. He and Jeff managed several offices at one of the largest remodeling companies in the nation. Steven ventured into the food industry, starting two restaurants before coming back into the remodeling industry.' },
];

export default function AboutPage() {
  return (
    <>
      <div className="tint">
        <div className="wrap page-hero">
          <span className="eyebrow">ABOUT US</span>
          <h1 className="page-title" style={{ maxWidth: 900, textWrap: 'balance' }}>Our Story</h1>
          <p className="lead" style={{ maxWidth: 760 }}>Rylynn Remodeling began in 2019 with a single project and a vision: to build a company that values quality, integrity, and personal connection.</p>
        </div>
      </div>
      <div className="wrap" style={{ paddingTop: 72, paddingBottom: 72, display: 'flex', flexDirection: 'column' }}>
        <div style={{ ...row, borderTop: '2px solid var(--ink)' }}>
          <h2 style={rowTitle}>Named for Rylynn</h2>
          <p style={rowText}>Founder and President Jeff Covert named the business after his daughter — not her first name, which is common in the industry — but her unique middle name: Rylynn. It&apos;s a name that reminds us every day why we do what we do—family, trust, and leaving a legacy of excellent work.</p>
        </div>
        <div style={row}>
          <h2 style={rowTitle}>Growing Through Challenges</h2>
          <p style={rowText}>Like many small businesses, we faced early hurdles. Just as we began gaining momentum in 2020 with a growing team, the pandemic paused operations for four weeks. But we came back stronger, expanding from bathrooms and kitchens to full-home interior remodels. Today, we&apos;re proud to also offer exterior services including siding, windows, gutters, and so much more.</p>
        </div>
        <div style={row}>
          <h2 style={rowTitle}>What We Do</h2>
          <div style={{ ...rowText, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span>We specialize in both interior and exterior remodeling, including:</span>
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Bathrooms, kitchens, basements, and whole-home makeovers</span>
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Exterior siding, gutters, windows, paint, and more</span>
            <span>Our goal? To turn your house into a place you&apos;re proud to call home—inside and out.</span>
          </div>
        </div>
        <div style={{ ...row, borderBottom: '1px solid var(--line)' }}>
          <h2 style={rowTitle}>Why Clients Trust Us</h2>
          <p style={rowText}>With every job, large or small, we bring the same level of care and attention. We treat your home like it&apos;s our own and believe strong communication is key to a successful project.</p>
        </div>
      </div>
      <div className="wrap" style={{ paddingBottom: 88, display: 'flex', flexDirection: 'column', gap: 32 }}>
        <h2 className="display" style={{ fontSize: 44, letterSpacing: '-.025em', margin: 0 }}>Meet The Team</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))', gap: 24 }}>
          {TEAM.map((t) => (
            <div key={t.name} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <img src={t.img} alt={t.name} style={{ width: '100%', height: 360, objectFit: 'cover', objectPosition: 'top' }} />
              <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div className="display" style={{ fontSize: 26 }}>{t.name}</div>
                <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '.1em', color: 'var(--green)' }}>{t.role}</div>
                <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0, color: 'var(--ink-2)' }}>{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CtaBand />
    </>
  );
}
