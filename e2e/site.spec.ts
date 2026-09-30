import { expect, test } from '@playwright/test';

const ROUTES: ReadonlyArray<{ path: string; heading: string }> = [
  { path: '/', heading: 'Turning Dream Homes into Real Homes Across WV!' },
  { path: '/about', heading: 'Our Story' },
  { path: '/work', heading: 'Interior & Exterior remodeling done right.' },
  { path: '/interior', heading: 'Interior' },
  { path: '/exterior', heading: 'Exterior Projects' },
  { path: '/service-area', heading: 'Serving the Kanawha Valley' },
  { path: '/service-area/charleston', heading: 'Remodeling in Charleston, WV' },
  { path: '/financing', heading: 'Remodeling Financing & Monthly Payment Options' },
  { path: '/ballpark', heading: 'What are you thinking about building?' },
  { path: '/products', heading: 'Top brands, on display in our showroom.' },
  { path: '/careers', heading: 'Rylynn Remodeling is Hiring!' },
  { path: '/blog', heading: 'From the Rylynn Blog' },
  { path: '/contact', heading: 'Call Us or Visit Our Showroom' },
];

const CTA = 'Ready to Upgrade Your Home?';

test.describe('every route renders', () => {
  for (const r of ROUTES) {
    test(`${r.path} shows its heading and screenshot`, async ({ page }, info) => {
      const res = await page.goto(r.path);
      expect(res?.status()).toBe(200);
      await expect(page.getByRole('heading', { level: 1 })).toContainText(r.heading);
      await expect(page.locator('header img[alt="Rylynn Remodeling"]')).toBeVisible();
      await expect(page.locator('footer')).toContainText('License #WV059111');
      const ctaVisible = r.path !== '/contact' && r.path !== '/ballpark';
      await expect(page.getByRole('heading', { name: CTA })).toHaveCount(ctaVisible ? 1 : 0);
      const name = r.path === '/' ? 'home' : r.path.slice(1).replace(/\//g, '_');
      await page.screenshot({ path: `test-artifacts/screenshots/${name}.png`, fullPage: true });
      await info.attach(name, { path: `test-artifacts/screenshots/${name}.png`, contentType: 'image/png' });
    });
  }
});

test('unknown route returns 404', async ({ page }) => {
  const res = await page.goto('/service-area/atlantis');
  expect(res?.status()).toBe(404);
});

test('nav dropdowns open on hover and navigate', async ({ page }) => {
  await page.goto('/');
  const nav = page.locator('header nav[aria-label="Main"]');
  await nav.getByRole('button', { name: 'Our Work' }).hover();
  await nav.getByRole('link', { name: /Exterior/ }).click();
  await expect(page).toHaveURL(/\/exterior$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Exterior Projects');

  await nav.getByRole('button', { name: 'Service Area' }).click();
  await nav.getByRole('link', { name: 'Huntington' }).click();
  await expect(page).toHaveURL(/\/service-area\/huntington$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Remodeling in Huntington, WV');

  await nav.getByRole('button', { name: 'Pricing' }).hover();
  await nav.getByRole('link', { name: /Ballpark Estimate Range/ }).click();
  await expect(page).toHaveURL(/\/ballpark$/);
});

test('project gallery filters by category', async ({ page }) => {
  await page.goto('/work');
  const items = page.getByTestId('gallery-item');
  await expect(items).toHaveCount(11);
  await page.getByRole('button', { name: 'Interior', exact: true }).click();
  await expect(items).toHaveCount(6);
  await expect(items.filter({ hasText: 'Exterior' })).toHaveCount(0);
  await page.getByRole('button', { name: 'Exterior', exact: true }).click();
  await expect(items).toHaveCount(5);
  await page.getByRole('button', { name: 'All', exact: true }).click();
  await expect(items).toHaveCount(11);
});

test('service area lists 12 cities and city page links to others', async ({ page }) => {
  await page.goto('/service-area');
  await expect(page.getByTestId('city-card')).toHaveCount(12);
  await page.getByTestId('city-card').filter({ hasText: 'Teays Valley & Scott Depot' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Remodeling in Teays Valley & Scott Depot, WV');
  await expect(page.getByTestId('other-city')).toHaveCount(11);
});

test('ballpark estimator computes deck ranges', async ({ page }) => {
  await page.goto('/ballpark');
  await expect(page.getByTestId('project-card')).toHaveCount(8);
  await page.getByTestId('project-card').filter({ hasText: 'Standalone deck' }).click();
  await expect(page.getByText('DECK ESTIMATE')).toBeVisible();

  const see = page.getByRole('button', { name: 'See my estimate →' });
  await expect(see).toBeDisabled();
  await page.getByRole('button', { name: /^Medium/ }).click();
  await page.getByRole('button', { name: 'Raised / elevated' }).click();
  await expect(see).toBeDisabled();
  await page.getByRole('button', { name: 'Yes, add railing' }).click();
  await expect(see).toBeEnabled();
  await see.click();

  await expect(page.getByRole('heading', { level: 1 })).toHaveText("Here's what a deck project like yours typically runs");
  await expect(page.getByText('Medium · Raised / elevated · Yes, add railing')).toBeVisible();
  const tiers = page.getByTestId('tier');
  await expect(tiers).toHaveCount(3);
  await expect(tiers.nth(0)).toContainText('$16,500–$22,000');
  await expect(tiers.nth(0)).toContainText('$418/mo');
  await expect(tiers.nth(1)).toContainText('MOST POPULAR');
  await expect(tiers.nth(1)).toContainText('$21,500–$31,500');
  await expect(tiers.nth(2)).toContainText('$31,000–$54,000');
  await page.screenshot({ path: 'test-artifacts/screenshots/ballpark_result.png', fullPage: true });

  // Small (.6) * Ground (.88) * No railing (.9) = .4752 -> 16500*.4752 = 7840.8 -> $8,000
  await page.getByRole('link', { name: '← Start over' }).click();
  await page.getByTestId('project-card').filter({ hasText: 'Standalone deck' }).click();
  await page.getByRole('button', { name: /^Small/ }).click();
  await page.getByRole('button', { name: 'Ground level' }).click();
  await page.getByRole('button', { name: 'No railing' }).click();
  await page.getByRole('button', { name: 'See my estimate →' }).click();
  await expect(page.getByTestId('tier').nth(0)).toContainText('$8,000–$10,500');
});

test('contact form shows confirmation after submit', async ({ page }) => {
  await page.goto('/contact');
  const submit = page.getByRole('button', { name: 'Get Your Free Estimate →' });
  await submit.click();
  await expect(page.getByText('Thanks, we got it.')).toHaveCount(0);
  await page.getByPlaceholder('Name').fill('Test Person');
  await page.getByPlaceholder('Phone').fill('3045550100');
  await submit.click();
  await expect(page.getByText('Thanks, we got it.')).toBeVisible();
});
