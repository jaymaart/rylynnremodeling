import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CtaBand from '@/components/CtaBand';
import ServiceColumns from '@/components/ServiceColumns';
import { CITIES, PHONE_DISPLAY, PHONE_HREF } from '@/lib/data';

interface Props {
  params: Promise<{ city: string }>;
}

export const dynamicParams = false;

export function generateStaticParams(): Array<{ city: string }> {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cur = CITIES.find((c) => c.slug === city);
  return { title: cur ? `Remodeling in ${cur.name}, WV` : 'Service Area' };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const cur = CITIES.find((c) => c.slug === city);
  if (!cur) notFound();
  const others = CITIES.filter((c) => c !== cur);

  return (
    <>
      <div className="tint">
        <div className="wrap split-hero">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link href="/service-area" className="eyebrow">← SERVICE AREA</Link>
            <h1 className="page-title" style={{ fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1.02 }}>Remodeling in {cur.name}, WV</h1>
            <p className="lead">Interior &amp; Exterior remodeling done right — from our showroom in Teays Valley to your home in {cur.name}.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 6 }}>
              <Link href="/contact" className="btn btn-primary btn-md">Get Your Free Estimate →</Link>
              <a href={PHONE_HREF} className="btn btn-outline" style={{ padding: '14px 22px', fontSize: 16 }}>{PHONE_DISPLAY}</a>
            </div>
          </div>
          <img className="arch" src={cur.big} alt="" style={{ height: 380, background: 'var(--line)' }} />
        </div>
      </div>
      <div className="wrap" style={{ paddingTop: 72, paddingBottom: 88, display: 'flex', flexDirection: 'column', gap: 48 }}>
        <ServiceColumns />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="eyebrow-muted">OTHER AREAS WE SERVE</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {others.map((c) => (
              <Link key={c.slug} href={`/service-area/${c.slug}`} data-testid="other-city" style={{ border: '1px solid var(--line)', borderRadius: 999, padding: '8px 14px', fontSize: 15, fontWeight: 500 }}>{c.name}</Link>
            ))}
          </div>
        </div>
      </div>
      <CtaBand />
    </>
  );
}
