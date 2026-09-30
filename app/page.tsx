import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
import ServiceColumns from '@/components/ServiceColumns';
import { GOOGLE_REVIEWS_URL, PHONE_DISPLAY, PHONE_HREF, REVIEWS } from '@/lib/data';

const stat: React.CSSProperties = { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, color: 'var(--ink)' };
const problemRow: React.CSSProperties = { padding: '16px 0', borderTop: '1px solid var(--line-2)' };
const whyCard: React.CSSProperties = { border: '1px solid var(--line)', borderRadius: 14, padding: 30, fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, display: 'flex', gap: 14, alignItems: 'center' };
const dot = <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />;
const badge: React.CSSProperties = { position: 'absolute', bottom: 14, left: 14, padding: '6px 12px', borderRadius: 999, fontWeight: 700, fontSize: 13 };
const GOOGLE_COLORS: ReadonlyArray<[string, string]> = [['G', '#4285f4'], ['o', '#ea4335'], ['o', '#fbbc05'], ['g', '#4285f4'], ['l', '#34a853'], ['e', '#ea4335']];

export default function HomePage() {
  return (
    <>
      <div className="wrap" style={{ paddingTop: 72, paddingBottom: 72, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(380px,1fr))', gap: 56, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
          <span style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 14, fontWeight: 500, background: 'var(--tint)', padding: '7px 12px', borderRadius: 999, alignSelf: 'flex-start' }}>★★★★★ 4.8 from 70+ Reviews</span>
          <h1 className="display" style={{ fontSize: 'clamp(46px,5.4vw,72px)', lineHeight: 1.02, letterSpacing: '-.03em', margin: 0, textWrap: 'balance' }}>
            Turning Dream Homes into <span style={{ color: 'var(--green)' }}>Real Homes</span> Across WV!
          </h1>
          <p style={{ fontSize: 20, margin: 0, color: 'var(--ink-2)' }}>Interior &amp; Exterior remodeling done right.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Get Your Free Estimate →</Link>
            <a href={PHONE_HREF} className="btn btn-outline" style={{ padding: '15px 24px', fontSize: 17 }}>Call Now {PHONE_DISPLAY}</a>
          </div>
          <Link href="/ballpark" style={{ fontSize: 16, fontWeight: 500, color: 'var(--ink-2)', marginTop: -10 }}>
            Just curious about cost? <span style={{ color: 'var(--green)', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: 3 }}>See an instant ballpark price →</span>
          </Link>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 20, paddingTop: 22, borderTop: '1px solid var(--line)', fontSize: 14, color: 'var(--muted)' }}>
            <div><div style={stat}>4.8★</div>70+ Reviews</div>
            <div><div style={stat}>A+</div>BBB Rated</div>
            <div><div style={stat}>WV</div>Licensed &amp; Insured</div>
            <div><Link href="/financing"><div style={stat}>$</div>Financing Available</Link></div>
          </div>
        </div>
        <img src="https://static.wixstatic.com/media/66ee84_d1123a8a87db4be894196ab2cf85a3fe~mv2.jpeg/v1/fill/w_1200,h_1400,al_c,q_85/hero.jpeg" alt="" style={{ width: '100%', height: 600, objectFit: 'cover', borderRadius: '240px 240px 16px 16px' }} />
      </div>

      <div className="wrap" style={{ paddingBottom: 64 }}>
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <span className="eyebrow-muted">AWARDS &amp; MEMBERSHIPS</span>
          <img src="https://static.wixstatic.com/media/66ee84_25b1ebee967b4adba06b6da5de7cc40a~mv2.png/v1/fill/w_242,h_192,al_c,q_90/best-in-valley.png" alt="Best in the Valley 2025, Gazette-Mail" style={{ height: 72, width: 'auto' }} />
          <img src="https://static.wixstatic.com/media/66ee84_267bc845160141d2bc466556e786c0d3~mv2.png/v1/fill/w_260,h_192,al_c,q_90/nari.png" alt="NARI member" style={{ height: 72, width: 'auto' }} />
          <img src="https://static.wixstatic.com/media/66ee84_3ff8c133dab3446dae25a1f3f8bf9c00~mv2.png/v1/fill/w_228,h_192,al_c,q_90/nkba.png" alt="NKBA member" style={{ height: 72, width: 'auto' }} />
          <a href="https://partners.fiberondecking.com/wv/hurricane/17614739732/" style={{ display: 'flex' }}>
            <img src="https://static.wixstatic.com/media/66ee84_bb6983efcee7481a8083a83e8560c16a~mv2.png/v1/fill/w_170,h_216,al_c,q_90/fiberon.png" alt="Fiberon Certified Installer" style={{ height: 84, width: 'auto' }} />
          </a>
          <a href="https://www.bbb.org/us/wv/hurricane/profile/remodeling/rylynn-remodeling-llc-0282-92028213" style={{ display: 'flex' }}>
            <img src="https://static.wixstatic.com/media/66ee84_fcd3dcfd0a2b4903a2ec387b2587d8ce~mv2.jpg/v1/fill/w_586,h_122,al_c,q_90/bbb.jpg" alt="BBB Accredited Business, A+ rating" style={{ height: 52, width: 'auto' }} />
          </a>
        </div>
      </div>

      <div className="tint">
        <div className="wrap" style={{ paddingTop: 88, paddingBottom: 88, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 56, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <h2 className="display" style={{ fontSize: 46, letterSpacing: '-.025em', margin: 0, lineHeight: 1.05 }}>Still Dealing With...</h2>
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: 19 }}>
              <div style={problemRow}>A shower you hate?</div>
              <div style={problemRow}>Worn-out siding or roofing?</div>
              <div style={{ ...problemRow, borderBottom: '1px solid var(--line-2)' }}>A deck hanging off your house?</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ position: 'relative' }}>
              <img src="https://static.wixstatic.com/media/66ee84_d7f2598318164477a8e4350c205ef8d6~mv2.jpeg/v1/fill/w_800,h_760,al_c,q_85/before.jpeg" alt="Before" style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }} />
              <span style={{ ...badge, background: '#fff' }}>BEFORE</span>
            </div>
            <div style={{ position: 'relative', borderLeft: '4px solid var(--tint)' }}>
              <img src="https://static.wixstatic.com/media/66ee84_5ff8d758ec12461e8fe6a50e519cda84~mv2.png/v1/fill/w_800,h_760,al_c,q_85/after.png" alt="After" style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }} />
              <span style={{ ...badge, background: 'var(--green)', color: '#fff' }}>AFTER</span>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap" style={{ paddingTop: 88, paddingBottom: 88, display: 'flex', flexDirection: 'column', gap: 44 }}>
        <h2 className="section-title" style={{ maxWidth: 720, textWrap: 'balance' }}>We Turn Outdated Homes into Spaces You Love!</h2>
        <ServiceColumns />
      </div>

      <div className="wrap" style={{ paddingBottom: 88, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <span className="eyebrow">WHY CHOOSE RYLYNN FOR YOUR NEXT PROJECT?</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
          <div style={whyCard}>{dot}Showroom</div>
          <div style={whyCard}>{dot}Licensed &amp; Insured</div>
          <div style={whyCard}>{dot}Locally Owned &amp; Operated</div>
        </div>
      </div>

      <div className="tint">
        <div className="wrap" style={{ paddingTop: 88, paddingBottom: 88, display: 'flex', flexDirection: 'column', gap: 36 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="eyebrow">TESTIMONIALS</span>
              <h2 className="section-title">What our customers say</h2>
            </div>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 16, boxShadow: '0 6px 20px rgba(16,32,24,.06)' }}>
              <span className="display" style={{ fontSize: 26, letterSpacing: '-.02em' }}>
                {GOOGLE_COLORS.map(([ch, color], i) => <span key={i} style={{ color }}>{ch}</span>)}
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontWeight: 700, fontSize: 18 }}>5.0</span>
                  <span style={{ color: 'var(--star)', fontSize: 18, letterSpacing: 2 }}>★★★★★</span>
                </span>
                <span style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 500 }}>70+ reviews · Read all →</span>
              </span>
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            {REVIEWS.map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener" className="hover-green-border" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', gap: 18 }}>
                <span style={{ color: 'var(--star)', fontSize: 18, letterSpacing: 2 }}>★★★★★</span>
                <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0, color: 'var(--ink)', flex: 1, display: '-webkit-box', WebkitLineClamp: 8, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>“{r.text}”</p>
                {r.photos.length > 0 && (
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {r.photos.map((ph) => <img key={ph} src={ph} alt="Customer photo" style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 10 }} />)}
                  </div>
                )}
                <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, borderTop: '1px solid var(--line)', paddingTop: 16 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    {r.avatar ? (
                      <img src={r.avatar} alt="" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
                    ) : (
                      <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--mint)', color: 'var(--green-dark)', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{r.name[0]}</span>
                    )}
                    <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ fontWeight: 700, fontSize: 15 }}>{r.name}</span>
                      <span style={{ fontSize: 13, color: 'var(--muted)' }}>{r.meta}</span>
                    </span>
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)', whiteSpace: 'nowrap' }}>View on Google →</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <CtaBand />
    </>
  );
}
