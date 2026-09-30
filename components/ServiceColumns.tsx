import Link from 'next/link';

const INTERIOR_ITEMS = ['Kitchens', 'Bathrooms', 'Basements', 'Flooring', 'Tile', 'Stairways'];
const EXTERIOR_ITEMS = ['Decks', 'Covered Porches', 'Railing', 'Additions', 'Gutters', 'Siding', 'Roofing', 'Soffit & Fascia'];

function Column({ href, label, list }: { href: string; label: string; list: ReadonlyArray<string> }) {
  return (
    <Link href={href} style={{ display: 'flex', flexDirection: 'column', gap: 18, borderTop: '2px solid var(--ink)', paddingTop: 20 }}>
      <span className="eyebrow" style={{ display: 'flex', justifyContent: 'space-between' }}>{label}<span>→</span></span>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px', fontSize: 20, fontWeight: 500 }}>
        {list.map((s) => <span key={s}>{s}</span>)}
      </div>
    </Link>
  );
}

export default function ServiceColumns() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))', gap: 48 }}>
      <Column href="/interior" label="INTERIOR" list={INTERIOR_ITEMS} />
      <Column href="/exterior" label="EXTERIOR" list={EXTERIOR_ITEMS} />
    </div>
  );
}
