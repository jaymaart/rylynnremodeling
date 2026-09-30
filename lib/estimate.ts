import { wix } from './data';

/** [label, sublabel, price multiplier] */
export type EstimateOption = readonly [string, string, number];

export interface EstimateQuestion {
  title: string;
  hint?: string;
  opts: ReadonlyArray<EstimateOption>;
}

/** [name, subtitle, low, high, features] */
export type EstimateTier = readonly [string, string, number, number, ReadonlyArray<string>];

export interface EstimateProject {
  key: string;
  name: string;
  sub: string;
  img: string | null;
  qs: ReadonlyArray<EstimateQuestion>;
  tiers: ReadonlyArray<EstimateTier>;
}

export interface TierResult {
  name: string;
  sub: string;
  range: string;
  monthly: string;
  feats: ReadonlyArray<string>;
  popular: boolean;
}

/** Monthly payment per dollar at 9.99% APR over 60 months. */
const MONTHLY_FACTOR = 0.02169;

const SIZE_TITLE = 'About how big?';
const SIZE_HINT = "Rough is fine — we'll confirm during your consultation.";

export const PROJECTS: ReadonlyArray<EstimateProject> = [
  { key: 'deck', name: 'Deck', sub: 'Standalone deck', img: wix('efcb7e37029544ff918b987970972955', 'jpeg', 600, 340),
    qs: [{ title: SIZE_TITLE, hint: SIZE_HINT, opts: [['Small', '~200 sq ft', 0.6], ['Medium', '~400 sq ft', 1], ['Large', '~600+ sq ft', 1.45]] },
         { title: 'Deck height', hint: 'Raised decks need more framing.', opts: [['Ground level', '', 0.88], ['Raised / elevated', '', 1]] },
         { title: 'Add railing?', opts: [['No railing', '', 0.9], ['Yes, add railing', '', 1]] }],
    tiers: [['Good', 'Pressure-treated wood', 16500, 22000, ['Pressure-treated lumber', 'Standard framing', 'Built to WV code']],
            ['Better', 'Fiberon composite decking', 21500, 31500, ['Fiberon composite boards', 'Low-maintenance, no staining', 'Hidden fasteners']],
            ['Best', 'Premium composite + Westbury railing', 31000, 54000, ['Premium Fiberon composite', 'Westbury aluminum railing', 'Certified Master Pro install']]] },
  { key: 'covered', name: 'Covered Deck', sub: 'Deck with roof or cover', img: wix('cdb1383ec3964cae96c31665fda9cb0b', 'jpeg', 600, 340),
    qs: [{ title: SIZE_TITLE, hint: SIZE_HINT, opts: [['Small', '~200 sq ft', 0.7], ['Medium', '~400 sq ft', 1], ['Large', '~600+ sq ft', 1.4]] },
         { title: 'Roof style', opts: [['Shed roof', 'Single slope', 1], ['Gable roof', 'Peaked, open ceiling', 1.15]] },
         { title: 'Screen it in?', opts: [['Open air', '', 1], ['Yes, screened', '', 1.12]] }],
    tiers: [['Good', 'Pressure-treated deck + roof', 28000, 38000, ['Pressure-treated framing', 'Shingled roof to match', 'Built to WV code']],
            ['Better', 'Fiberon composite + roof', 38000, 52000, ['Fiberon composite boards', 'Finished ceiling', 'Ceiling fan prep']],
            ['Best', 'Premium composite + cedar wraps', 52000, 80000, ['Premium Fiberon composite', 'Cedar-wrapped posts', 'Lighting & Westbury railing']]] },
  { key: 'kitchen', name: 'Kitchen', sub: 'Kitchen remodel', img: wix('6e62463437704927810c58b1b7e39c2c', 'jpg', 600, 340),
    qs: [{ title: 'Kitchen size', hint: SIZE_HINT, opts: [['Small', 'Galley or compact', 1], ['Medium', 'Standard L or U', 1.2], ['Large', 'Island or open plan', 1.5]] },
         { title: 'Layout', hint: 'Moving plumbing or walls adds cost.', opts: [['Keep current layout', '', 1], ['Change the layout', '', 1.2]] }],
    tiers: [['Economy', 'Refresh with quality basics', 16000, 20000, ['New cabinets & countertops', 'Sink & faucet', 'Professional install']],
            ['Mid Range', 'More customization', 20000, 30000, ['Upgraded cabinet lines', 'Quartz or granite tops', 'Tile backsplash']],
            ['High End', 'Fully custom', 30000, 50000, ['Custom cabinetry', 'Premium countertops', 'Lighting & layout upgrades']]] },
  { key: 'bath', name: 'Bathroom', sub: 'Bathroom remodel', img: wix('5003d015f44a4b66b339c6b04e7ea422', 'png', 600, 340),
    qs: [{ title: 'Which bathroom?', opts: [['Hall / guest bath', '', 1], ['Primary bath', '', 1.3]] },
         { title: 'Tub or shower?', opts: [['Keep a tub', '', 1], ['Convert to walk-in shower', '', 1.1]] }],
    tiers: [['Good', 'Complete refresh', 11000, 15000, ['New vanity & fixtures', 'Rylynn Shower System', 'New flooring']],
            ['Better', 'Upgraded finishes', 15000, 22000, ['Custom tile shower', 'Upgraded vanity & top', 'Lighting & ventilation']],
            ['Best', 'Spa-level remodel', 22000, 35000, ['Frameless glass', 'Heated floors option', 'Premium tile throughout']]] },
  { key: 'siding', name: 'Siding', sub: 'Exterior siding', img: wix('10650f5bb6694120959dac7c1f16453c', 'jpeg', 600, 340),
    qs: [{ title: 'Home size', opts: [['1-story', '', 1], ['2-story', '', 1.5], ['Large / complex', '', 2]] },
         { title: 'Soffit & fascia too?', opts: [['Siding only', '', 1], ['Yes, include soffit & fascia', '', 1.15]] }],
    tiers: [['Good', 'Vinyl siding', 12000, 18000, ['Vinyl siding', 'Color-matched trim', 'Old siding removed']],
            ['Better', 'Insulated vinyl', 18000, 26000, ['Insulated vinyl panels', 'Better energy efficiency', 'Upgraded trim package']],
            ['Best', 'Board & batten + accents', 26000, 42000, ['Board-and-batten siding', 'Stone accents', 'Full trim transformation']]] },
  { key: 'roof', name: 'Roofing', sub: 'Roof replacement', img: wix('878ecb3275b748398befe6c3487338f9', 'jpeg', 600, 340),
    qs: [{ title: 'Home size', opts: [['Small', 'Under 1,500 sq ft', 1], ['Average', '1,500–2,500 sq ft', 1.4], ['Large', '2,500+ sq ft', 1.9]] },
         { title: 'Roof pitch', opts: [['Walkable', '', 1], ['Steep', '', 1.2]] }],
    tiers: [['Good', 'Architectural shingles', 9000, 12000, ['Architectural shingles', 'Tear-off & disposal', 'Synthetic underlayment']],
            ['Better', 'Upgraded shingle system', 12000, 16000, ['Designer shingles', 'Ice & water shield', 'Ridge venting']],
            ['Best', 'Metal roofing', 16000, 26000, ['Standing-seam metal', 'Lifetime-class materials', 'Full flashing upgrade']]] },
  { key: 'shower', name: 'Shower', sub: 'Shower replace / conversion', img: wix('16d864e56bc642daba88a3d359d343da', 'jpg', 600, 340),
    qs: [{ title: "What's the project?", opts: [['Replace existing shower', '', 1], ['Tub-to-shower conversion', '', 1.15]] },
         { title: 'Shower size', opts: [['Standard', '~60 in', 1], ['Large walk-in', '', 1.25]] }],
    tiers: [['Good', 'Rylynn Shower System', 6000, 8000, ['Wall panels in your color', 'New valve & trim', 'Professional install']],
            ['Better', 'Upgraded system', 8000, 11000, ['Built-in niche & bench', 'Upgraded fixtures', 'Glass door']],
            ['Best', 'Custom tile shower', 11000, 16000, ['Custom tile walls & floor', 'Frameless glass', 'Premium fixtures']]] },
  // Photo pending: the design's assets/room-addition.png could not be exported intact.
  { key: 'addition', name: 'Room Addition', sub: 'Build-on / expansion', img: null,
    qs: [{ title: SIZE_TITLE, hint: SIZE_HINT, opts: [['Small', '~200 sq ft', 1], ['Medium', '~400 sq ft', 1.8], ['Large', '~600+ sq ft', 2.6]] },
         { title: 'Foundation', opts: [['Slab', '', 1], ['Crawl space', '', 1.1]] }],
    tiers: [['Good', 'Finished shell', 45000, 65000, ['Foundation & framing', 'Roof tied into home', 'Drywall & paint']],
            ['Better', 'Move-in ready', 65000, 95000, ['Flooring & trim', 'Electrical & HVAC', 'Windows & doors']],
            ['Best', 'Fully custom', 95000, 150000, ['Custom finishes', 'Vaulted or special ceilings', 'Bath or kitchenette option']]] },
];

const usd = (n: number): string => '$' + n.toLocaleString('en-US');

/** answers[i] is the chosen option index for question i. */
export function computeTiers(project: EstimateProject, answers: ReadonlyArray<number>): TierResult[] {
  const m = project.qs.reduce((acc, q, qi) => acc * q.opts[answers[qi]][2], 1);
  const round = (x: number): number => Math.round((x * m) / 500) * 500;
  return project.tiers.map(([name, sub, low, high, feats], i) => {
    const lo = round(low);
    const hi = round(high);
    return {
      name,
      sub,
      range: `${usd(lo)}–${usd(hi)}`,
      monthly: usd(Math.round(((lo + hi) / 2) * MONTHLY_FACTOR)),
      feats,
      popular: i === 1,
    };
  });
}

export function summarize(project: EstimateProject, answers: ReadonlyArray<number>): string {
  return project.qs.map((q, qi) => q.opts[answers[qi]][0]).join(' · ');
}
