'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PROJECTS, computeTiers, summarize, type EstimateProject } from '@/lib/estimate';

type Step = 'pick' | 'q' | 'result';

const PROGRESS: Record<Step, string> = { pick: '8%', q: '50%', result: '100%' };

const TRUST = (
  <div style={{ borderTop: '1px solid #d6ddd8', paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 28px', fontSize: 14, color: 'var(--ink-2)' }}>
    <span><strong style={{ color: 'var(--ink)' }}>Best in the Valley 2025</strong></span>
    <span><strong style={{ color: 'var(--ink)' }}>Only WV contractor</strong> with NARI + NKBA</span>
    <span>1-year workmanship warranty</span>
    <span>Financing available</span>
    <span>5% veterans discount</span>
  </div>
);

export default function BallparkEstimator() {
  const [project, setProject] = useState<EstimateProject | null>(null);
  const [step, setStep] = useState<Step>('pick');
  const [answers, setAnswers] = useState<Array<number | undefined>>([]);

  const goTo = (next: Step, p: EstimateProject | null) => {
    setProject(p);
    setStep(next);
    if (next !== 'result') setAnswers([]);
    window.scrollTo(0, 0);
  };

  const complete = project !== null && project.qs.every((_, qi) => answers[qi] !== undefined);
  const chosen = complete ? answers.filter((a): a is number => a !== undefined) : [];

  return (
    <div className="tint">
      <div style={{ height: 4, background: 'var(--line)' }}>
        <div style={{ height: 4, background: 'var(--green)', width: PROGRESS[step], transition: 'width .3s' }} />
      </div>
      <div className="narrow" style={{ paddingTop: 56, paddingBottom: 72, display: 'flex', flexDirection: 'column', gap: 32 }}>
        {step === 'pick' && (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span className="eyebrow">INSTANT BALLPARK ESTIMATE</span>
              <h1 className="display" style={{ fontSize: 'clamp(38px,4.6vw,56px)', letterSpacing: '-.03em', lineHeight: 1.04, margin: 0, textWrap: 'balance' }}>What are you thinking about building?</h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: 600 }}>
                Answer a few quick questions and see a real price range in under a minute — no phone call required to get started.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(250px,100%),1fr))', gap: 14 }}>
              {PROJECTS.map((p) => (
                <button key={p.key} type="button" data-testid="project-card" onClick={() => goTo('q', p)}
                  style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: 0, textAlign: 'left', color: 'var(--ink)', cursor: 'pointer' }}>
                  {p.img ? (
                    <img src={p.img} alt="" style={{ width: '100%', height: 130, objectFit: 'cover', background: '#dfe6e2', display: 'block' }} />
                  ) : (
                    <div style={{ width: '100%', height: 130, background: '#dfe6e2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: 'var(--muted)' }}>Photo coming soon</div>
                  )}
                  <span style={{ padding: '14px 18px 18px', display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <span style={{ fontWeight: 700, fontSize: 17 }}>{p.name}</span>
                    <span style={{ fontSize: 14, color: 'var(--muted)' }}>{p.sub}</span>
                  </span>
                </button>
              ))}
            </div>
          </>
        )}

        {step === 'q' && project && (
          <>
            <span className="eyebrow">{project.name.toUpperCase()} ESTIMATE</span>
            {project.qs.map((q, qi) => (
              <div key={q.title} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <h2 className="display" style={{ fontSize: 28, letterSpacing: '-.02em', margin: 0 }}>{q.title}</h2>
                  {q.hint && <p style={{ fontSize: 16, color: 'var(--muted)', margin: 0 }}>{q.hint}</p>}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(260px,100%),1fr))', gap: 12 }}>
                  {q.opts.map(([label, sub], oi) => {
                    const on = answers[qi] === oi;
                    return (
                      <button key={label} type="button" aria-pressed={on}
                        onClick={() => setAnswers((prev) => { const next = [...prev]; next[qi] = oi; return next; })}
                        style={{ textAlign: 'left', background: on ? 'var(--mint)' : '#fff', border: `1.5px solid ${on ? 'var(--green)' : 'var(--line)'}`, borderRadius: 12, padding: '18px 20px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 4, color: 'var(--ink)' }}>
                        <span style={{ fontWeight: 700, fontSize: 17 }}>{label}</span>
                        {sub && <span style={{ fontSize: 14, color: 'var(--muted)' }}>{sub}</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, paddingTop: 8 }}>
              <a href="#" onClick={(e) => { e.preventDefault(); goTo('pick', null); }} style={{ fontWeight: 700, fontSize: 16, color: 'var(--ink-2)' }}>← Back</a>
              <button type="button" disabled={!complete} onClick={() => { setStep('result'); window.scrollTo(0, 0); }}
                style={{ background: complete ? 'var(--green)' : '#b9c9bf', color: '#fff', border: 0, borderRadius: 8, padding: '16px 26px', fontWeight: 700, fontSize: 17, cursor: complete ? 'pointer' : 'not-allowed' }}>
                See my estimate →
              </button>
            </div>
          </>
        )}

        {step === 'result' && project && complete && (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="eyebrow">YOUR BALLPARK RANGE</span>
              <h1 className="display" style={{ fontSize: 'clamp(34px,4.2vw,50px)', letterSpacing: '-.03em', lineHeight: 1.05, margin: 0, textWrap: 'balance' }}>
                Here&apos;s what a {project.name.toLowerCase()} project like yours typically runs
              </h1>
              <span style={{ fontSize: 15, color: 'var(--muted)' }}>{summarize(project, chosen)}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(240px,100%),1fr))', gap: 16, paddingTop: 10 }}>
              {computeTiers(project, chosen).map((t) => (
                <div key={t.name} data-testid="tier" style={{ position: 'relative', background: '#fff', border: `1.5px solid ${t.popular ? 'var(--green)' : 'var(--line)'}`, borderRadius: 16, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {t.popular && (
                    <span style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: 'var(--green)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', padding: '5px 12px', borderRadius: 999, whiteSpace: 'nowrap' }}>MOST POPULAR</span>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span className="display" style={{ fontSize: 24 }}>{t.name}</span>
                    <span style={{ fontSize: 14, color: 'var(--muted)' }}>{t.sub}</span>
                  </div>
                  <div className="display" style={{ fontSize: 30, letterSpacing: '-.02em', lineHeight: 1.1 }}>{t.range}</div>
                  <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>≈ <strong style={{ color: 'var(--green)' }}>{t.monthly}/mo</strong> with financing*</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, borderTop: '1px solid var(--line)', paddingTop: 14 }}>
                    {t.feats.map((f) => (
                      <span key={f} style={{ display: 'flex', gap: 10, fontSize: 15, lineHeight: 1.4 }}><span style={{ color: 'var(--green)', fontWeight: 700 }}>✓</span>{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: '18px 20px', fontSize: 14, lineHeight: 1.6, color: 'var(--muted)' }}>
              This is a ballpark range to help you plan, not a quote. Your final price depends on materials, site conditions, and finishes — we&apos;ll nail it down at your free in-home consultation. *Financing example based on 9.99% APR over 60 months; subject to credit approval.
            </div>
            <div className="dark-card" style={{ background: 'var(--green-dark)', color: '#fff', borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, textAlign: 'center' }}>
              <h2 className="display" style={{ fontSize: 40, letterSpacing: '-.025em', margin: 0 }}>Want a firm number?</h2>
              <p style={{ fontSize: 17, margin: 0, color: 'var(--on-dark)' }}>Get a detailed, no-pressure estimate built for your exact home. Free in-home consultation.</p>
              <Link href="/contact" className="btn btn-md" style={{ marginTop: 8, background: '#fff', color: 'var(--ink)', padding: '15px 26px' }}>Get my detailed estimate →</Link>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); goTo('pick', null); }} style={{ fontWeight: 700, fontSize: 16, color: 'var(--ink-2)', alignSelf: 'flex-start' }}>← Start over</a>
          </>
        )}

        {TRUST}
      </div>
    </div>
  );
}
