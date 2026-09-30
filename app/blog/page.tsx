import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = { title: 'Blog' };

export default function BlogPage() {
  return (
    <>
      <div className="tint">
        <div className="wrap page-hero">
          <span className="eyebrow">BLOG</span>
          <h1 className="page-title">From the Rylynn Blog</h1>
        </div>
      </div>
      <div className="wrap" style={{ paddingTop: 64, paddingBottom: 88 }}>
        <div style={{ border: '2px dashed var(--line-2)', borderRadius: 16, padding: 56, textAlign: 'center', color: 'var(--muted)', fontSize: 16 }}>
          Blog posts appear here as cards (image, title, date), three across.
        </div>
      </div>
      <CtaBand />
    </>
  );
}
