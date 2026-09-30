const SOCIALS: ReadonlyArray<{ name: string; href: string; path: React.ReactNode }> = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/rylynnremodeling',
    path: <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.1H7.7v3h2.6V21z" fill="currentColor" />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/rylynnremodeling/',
    path: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="16.6" cy="7.4" r="1.1" fill="currentColor" />
      </>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@rylynn_remodeling',
    path: <path d="M15.6 3c.3 2.1 1.6 3.5 3.9 3.7v2.9a7 7 0 0 1-3.9-1.2v6.1a5.4 5.4 0 1 1-5.4-5.4l.9.1v3a2.5 2.5 0 1 0 1.6 2.3V3z" fill="currentColor" />,
  },
];

export default function SocialLinks() {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      {SOCIALS.map((s) => (
        <a key={s.name} href={s.href} target="_blank" rel="noopener" aria-label={`Rylynn Remodeling on ${s.name}`} title={s.name}
          style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--mint)', color: 'var(--green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">{s.path}</svg>
        </a>
      ))}
    </div>
  );
}
