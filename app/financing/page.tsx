import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/data';

export const metadata: Metadata = { title: 'Financing' };

const enerbank = (loanCode: string): string =>
  `https://prequalification.enerbank.com/apply/loanproduct?sponsorPhoneNumber=8007747598&contractorNumber=180288&loanCode=${loanCode}&utm_source=web_button`;

const OPTIONS: ReadonlyArray<{ label: string; headline: string; body: string; href: string }> = [
  { label: 'SAME-AS-CASH', headline: '6 Months', body: 'Interest waived if repaid in 180 days from first disbursement. 19.99% fixed APR after.*', href: enerbank('DEL2624') },
  { label: 'FIXED RATE · 5 YEARS', headline: '9.99% APR', body: '60 monthly payments of $21.69 per $1,000 borrowed.*', href: enerbank('DEL2674') },
  { label: 'FLEXIBLE TERMS', headline: '8.99–24.49%', body: 'Fixed APR with repayment terms from 12 to 144 months.*', href: enerbank('DEL2622') },
];

const DISCLOSURES: ReadonlyArray<string> = [
  'Credit and loans provided by Regions Bank, Member FDIC, (650 S. Main St., Suite 1000, Salt Lake City, UT 84101) on approved credit, for a limited time. 19.99% fixed APR (provided however, APR will not exceed 15.99% for residents of New Jersey and 17.99% for residents of Florida and Wisconsin), effective as of December 2024, subject to change. Minimum loan amounts apply. Interest starts accruing when funds are disbursed. Interest waived if repaid in 180 days from first disbursement. When open line period ends, the balance becomes a fixed rate installment loan; repayment terms vary from 18 to 126 months. Actual loan term may be shorter if less than the full approved amount of credit is used. First monthly loan payment due 180 days after first disbursement. If no payments made during same-as-cash period and APR of 19.99%, monthly payments vary from $20.65 to $28.53 per $1,000 borrowed depending on term. The minimum monthly payment will be no less than $50.00.',
  'Credit and loans provided by Regions Bank, Member FDIC, (650 S. Main St., Suite 1000, Salt Lake City, UT 84101) on approved credit, for a limited time. 9.99% fixed APR, subject to change. Minimum loan amounts apply. Interest starts accruing when funds are disbursed. Open line period payments due 90 days after origination and monthly thereafter during open line period. When open line period ends, the balance becomes a fixed rate installment loan; repayment term is 60 months. Actual loan term may be shorter if less than the full approved amount of credit is used. First monthly loan payment due 30 days from the end of the open line period. 60 monthly payments of $21.69 per $1,000 borrowed. The minimum monthly payment will be no less than $50.00.',
  'Credit and loans provided by Regions Bank, Member FDIC, (650 S. Main St., Suite 1000, Salt Lake City, UT 84101) on approved credit, for a limited time. 8.99% to 24.49% fixed APR (provided however, APR will not exceed 15.99% for residents of New Jersey and 17.99% for residents of Florida and Wisconsin), subject to change. Minimum loan amounts apply. Interest starts accruing when funds are disbursed. Open line period payments due 90 days after origination and monthly thereafter during open line period. When open line period ends, the balance becomes a fixed rate installment loan; repayment terms vary from 12 to 144 months. Actual loan term may be shorter if less than the full approved amount of credit is used. First monthly loan payment due 30 days from the end of the open line period. Monthly payments vary from $11.49 to $30.27 per $1,000 borrowed depending on term and interest rate. The minimum monthly payment will be no less than $50.00.',
];

export default function FinancingPage() {
  return (
    <>
      <div className="tint">
        <div className="wrap" style={{ paddingTop: 72, paddingBottom: 64, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(360px,100%),1fr))', gap: '24px 56px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span className="eyebrow">FINANCING</span>
            <h1 className="display" style={{ fontSize: 'clamp(38px,4.4vw,56px)', letterSpacing: '-.03em', lineHeight: 1.04, margin: 0, textWrap: 'balance' }}>Remodeling Financing &amp; Monthly Payment Options</h1>
          </div>
          <div className="body-text" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p style={{ margin: 0 }}>Most of our customers are surprised how affordable a remodel can be when it&apos;s spread into monthly payments — a new bathroom can run less than a car payment. We&apos;ve partnered with FDIC-member lenders to offer options for nearly every situation, from 6-month same-as-cash to longer traditional loans. Applying takes minutes, and our team can walk you through which offer fits your project.</p>
            <p style={{ margin: 0 }}>A project deposit is still required when financing is approved — and on some offers, the deposit isn&apos;t included in the financed amount. We&apos;ll spell out exactly what&apos;s due and when in your written estimate, so there are never surprises.</p>
            <p style={{ margin: 0, color: 'var(--ink)', fontWeight: 500 }}>Not sure which option fits? Call <a href={PHONE_HREF} style={{ color: 'var(--green)', fontWeight: 700 }}>{PHONE_DISPLAY}</a> and we&apos;ll help you figure out the numbers before you apply — no pressure, no obligation.</p>
          </div>
        </div>
      </div>
      <div className="wrap" style={{ paddingTop: 72, paddingBottom: 88, display: 'flex', flexDirection: 'column', gap: 28 }}>
        <h2 className="display" style={{ fontSize: 40, letterSpacing: '-.025em', margin: 0 }}>Financing Options</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))', gap: 20 }}>
          {OPTIONS.map((o) => (
            <div key={o.label} className="card" style={{ padding: 30, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.12em', color: 'var(--green)' }}>{o.label}</span>
              <div className="display" style={{ fontSize: 40, letterSpacing: '-.02em' }}>{o.headline}</div>
              <p style={{ fontSize: 16, lineHeight: 1.6, margin: 0, color: 'var(--ink-2)' }}>{o.body}</p>
              <a href={o.href} className="btn btn-primary" style={{ marginTop: 'auto', padding: 13, textAlign: 'center' }}>Pre-Qualify →</a>
            </div>
          ))}
        </div>
        <a href="mailto:Kelle.rogers@bankatcity.com?subject=Referral%20from%20Rylynn%20Remodeling" className="tint" style={{ borderRadius: 16, padding: '26px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span className="display" style={{ fontSize: 22 }}>Home Equity Line of Credit (HELOC)</span>
            <span style={{ fontSize: 15, color: 'var(--ink-2)' }}>Through City National Bank</span>
          </span>
          <span style={{ fontWeight: 700, color: 'var(--green)' }}>Email Kelle Rogers →</span>
        </a>
        <details style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--muted)', borderTop: '1px solid var(--line)', paddingTop: 18 }}>
          <summary style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--ink-2)' }}>*Loan disclosures</summary>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 12 }}>
            {DISCLOSURES.map((d, i) => <p key={i} style={{ margin: 0 }}>{d}</p>)}
          </div>
        </details>
      </div>
      <CtaBand />
    </>
  );
}
