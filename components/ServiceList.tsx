import type { Service } from '@/lib/data';

export default function ServiceList({ services }: { services: ReadonlyArray<Service> }) {
  return (
    <div className="wrap" style={{ paddingTop: 72, paddingBottom: 88, display: 'flex', flexDirection: 'column' }}>
      {services.map((s) => (
        <div key={s.title} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))', gap: 40, padding: '40px 0', borderTop: '1px solid var(--line)', alignItems: 'center' }}>
          <img src={s.img} alt={s.title} style={{ width: '100%', height: 340, objectFit: 'cover', borderRadius: 14 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h2 className="display" style={{ fontSize: 36, letterSpacing: '-.025em', margin: 0 }}>{s.title}</h2>
            {s.price && <span className="pill">{s.price}</span>}
            <p className="body-text">{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
