import { expect, test, type Locator } from '@playwright/test';

const SOCIALS: ReadonlyArray<[string, string]> = [
  ['Rylynn Remodeling on Facebook', 'https://www.facebook.com/rylynnremodeling'],
  ['Rylynn Remodeling on Instagram', 'https://www.instagram.com/rylynnremodeling/'],
  ['Rylynn Remodeling on TikTok', 'https://www.tiktok.com/@rylynn_remodeling'],
];

async function expectSocials(scope: Locator) {
  for (const [name, href] of SOCIALS) {
    const link = scope.getByRole('link', { name, exact: true });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', href);
    await expect(link).toHaveAttribute('target', '_blank');
  }
}

test('footer shows social icon links', async ({ page }) => {
  await page.goto('/');
  await expectSocials(page.locator('footer'));
  await page.locator('footer').screenshot({ path: 'test-artifacts/screenshots/footer-socials.png' });
});

test('contact page shows social icon links', async ({ page }) => {
  await page.goto('/contact');
  await expectSocials(page.getByTestId('contact-socials'));
});

test.describe('mobile', () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  test('mobile menu shows social icon links', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Open menu' }).click();
    await expectSocials(page.locator('nav[aria-label="Mobile"]'));
  });
});
