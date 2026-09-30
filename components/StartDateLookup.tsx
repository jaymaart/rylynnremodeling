'use client';

import { useState } from 'react';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/data';
import { formatStartDate, lookupStartDate, type LookupResult } from '@/lib/startDates';

const box: React.CSSProperties = { borderRadius: 12, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 6 };
const good: React.CSSProperties = { ...box, background: 'var(--mint)', border: '1px solid var(--green)' };
const warn: React.CSSProperties = { ...box, background: '#fff', border: '1px solid var(--line-2)' };
const callLink = <a href={PHONE_HREF} style={{ color: 'var(--green)', fontWeight: 700 }}>{PHONE_DISPLAY}</a>;

function Result({ result }: { result: LookupResult }) {
  switch (result.kind) {
    case 'scheduled':
      return (
        <div data-testid="lookup-result" style={good}>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--green-dark)' }}>Job #{result.job} · Estimated start</span>
          <span className="display" style={{ fontSize: 26, letterSpacing: '-.02em' }}>{formatStartDate(result.date)}</span>
        </div>
      );
    case 'unscheduled':
      return (
        <div data-testid="lookup-result" style={warn}>
          <span style={{ fontWeight: 700 }}>Job #{result.job}</span>
          <span style={{ color: 'var(--ink-2)' }}>Your project hasn&apos;t been scheduled yet. We&apos;ll post a date here as soon as it is, or call {callLink}.</span>
        </div>
      );
    case 'not-found':
      return (
        <div data-testid="lookup-result" style={warn}>
          <span style={{ fontWeight: 700 }}>We couldn&apos;t find job #{result.job}.</span>
          <span style={{ color: 'var(--ink-2)' }}>Double-check the number on your contract or invoice, or call {callLink}.</span>
        </div>
      );
    case 'invalid':
      return (
        <div data-testid="lookup-result" style={warn}>
          <span style={{ color: 'var(--ink-2)' }}>Job numbers are digits only, like 260183. Check your contract or invoice.</span>
        </div>
      );
  }
}

export default function StartDateLookup() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<LookupResult | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <form
        onSubmit={(e) => { e.preventDefault(); setResult(lookupStartDate(value)); }}
        style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
      >
        <label htmlFor="job-number" style={{ fontWeight: 700, fontSize: 15 }}>Job number</label>
        <div style={{ display: 'flex', gap: 10 }}>
          <input
            id="job-number" required inputMode="numeric" autoComplete="off" placeholder="e.g. 260183"
            value={value} onChange={(e) => setValue(e.target.value)}
            style={{ flex: 1, minWidth: 0, border: '1px solid var(--line-2)', borderRadius: 8, padding: 14, fontSize: 16, background: '#fff' }}
          />
          <button type="submit" className="btn btn-primary" style={{ border: 0, padding: '0 24px', fontSize: 16, cursor: 'pointer' }}>Check</button>
        </div>
      </form>
      {result && <Result result={result} />}
    </div>
  );
}
