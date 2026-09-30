import { expect, test } from '@playwright/test';

const ROUTES = [
  '/', '/about', '/work', '/interior', '/exterior', '/service-area', '/service-area/charleston',
  '/financing', '/ballpark', '/products', '/careers', '/blog', '/contact',
];

test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

test.describe('mobile layout', () => {
  for (const path of ROUTES) {
    test(`${path} has no horizontal overflow`, async ({ page }, info) => {
      await page.goto(path);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      const { scrollWidth, clientWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
      const name = path === '/' ? 'home' : path.slice(1).replace(/\//g, '_');
      const file = `test-artifacts/screenshots/mobile/${name}.png`;
      await page.screenshot({ path: file, fullPage: true });
      await info.attach(`mobile-${name}`, { path: file, contentType: 'image/png' });
    });
  }
});

test('mobile header shows menu button instead of desktop nav', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('header nav[aria-label="Main"]')).toBeHidden();
  await expect(page.getByRole('link', { name: 'Free Estimate', exact: true })).toBeVisible();
  const toggle = page.getByRole('button', { name: 'Open menu' });
  await expect(toggle).toBeVisible();
  await toggle.click();
  const menu = page.locator('nav[aria-label="Mobile"]');
  await expect(menu).toBeVisible();
  await page.screenshot({ path: 'test-artifacts/screenshots/mobile/menu-open.png' });
  await menu.getByRole('link', { name: 'Huntington' }).click();
  await expect(page).toHaveURL(/\/service-area\/huntington$/);
  await expect(menu).toHaveCount(0);

  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.locator('nav[aria-label="Mobile"]').getByRole('link', { name: /Ballpark Estimate/ }).click();
  await expect(page).toHaveURL(/\/ballpark$/);
});

test('mobile ballpark flow works', async ({ page }) => {
  await page.goto('/ballpark');
  await page.getByTestId('project-card').filter({ hasText: 'Kitchen remodel' }).click();
  await page.getByRole('button', { name: /^Small/ }).click();
  await page.getByRole('button', { name: 'Keep current layout' }).click();
  await page.getByRole('button', { name: 'See my estimate →' }).click();
  await expect(page.getByTestId('tier').nth(0)).toContainText('$16,000–$20,000');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});
