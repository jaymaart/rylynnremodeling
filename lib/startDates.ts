// MOCK DATA: placeholder until the real scheduling backend is connected.
// Keys are job numbers; values are ISO dates (YYYY-MM-DD), or null when not yet scheduled.
const MOCK_START_DATES: Readonly<Record<string, string | null>> = {
  '260183': '2026-10-19',
  '260201': '2026-11-02',
  '260215': null,
};

export type LookupResult =
  | { kind: 'invalid' }
  | { kind: 'not-found'; job: string }
  | { kind: 'unscheduled'; job: string }
  | { kind: 'scheduled'; job: string; date: string };

export function normalizeJobNumber(raw: string): string {
  return raw.trim().replace(/^#/, '').trim();
}

export function lookupStartDate(raw: string): LookupResult {
  const job = normalizeJobNumber(raw);
  if (!/^\d+$/.test(job)) return { kind: 'invalid' };
  if (!Object.prototype.hasOwnProperty.call(MOCK_START_DATES, job)) return { kind: 'not-found', job };
  const date = MOCK_START_DATES[job];
  return date === null ? { kind: 'unscheduled', job } : { kind: 'scheduled', job, date };
}

export function formatStartDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  });
}
