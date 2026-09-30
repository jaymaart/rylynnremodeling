'use client';

import { useState } from 'react';
import { GALLERY, type GalleryCategory } from '@/lib/data';

type Filter = 'all' | GalleryCategory;

const TABS: ReadonlyArray<[Filter, string]> = [['all', 'All'], ['Interior', 'Interior'], ['Exterior', 'Exterior']];

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>('all');
  const items = filter === 'all' ? GALLERY : GALLERY.filter((g) => g.cat === filter);

  return (
    <div className="wrap" style={{ paddingTop: 72, paddingBottom: 88, display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap' }}>
        <h2 className="display" style={{ fontSize: 40, letterSpacing: '-.025em', margin: 0 }}>Project Gallery</h2>
        <div style={{ display: 'flex', gap: 6, background: 'var(--tint)', padding: 5, borderRadius: 10 }}>
          {TABS.map(([key, label]) => {
            const on = filter === key;
            return (
              <button key={key} type="button" aria-pressed={on} onClick={() => setFilter(key)}
                style={{ padding: '9px 16px', borderRadius: 7, fontSize: 15, fontWeight: 700, border: 0, cursor: 'pointer', background: on ? '#fff' : 'transparent', color: on ? 'var(--ink)' : 'var(--muted)' }}>
                {label}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
        {items.map((g) => (
          <div key={g.title} data-testid="gallery-item" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <img src={g.img} alt={g.title} style={{ width: '100%', height: 280, objectFit: 'cover', borderRadius: 12, background: 'var(--tint)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15 }}>
              <span style={{ fontWeight: 700 }}>{g.title}</span>
              <span style={{ color: 'var(--muted)' }}>{g.cat}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
