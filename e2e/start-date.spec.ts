import { expect, test } from '@playwright/test';

test.describe('customer start date lookup', () => {
  test('top bar link opens the lookup page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Customer Start Date' }).click();
    await expect(page).toHaveURL(/\/start-date$/);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText("Check your project's start date");
    await expect(page.getByText('This date is an estimate, not a guaranteed start date')).toBeVisible();
  });

  test('scheduled job shows its estimated start date', async ({ page }, info) => {
    await page.goto('/start-date');
    await page.getByLabel('Job number').fill('260183');
    await page.getByRole('button', { name: 'Check' }).click();
    const result = page.getByTestId('lookup-result');
    await expect(result).toContainText('Job #260183');
    await expect(result).toContainText('Monday, October 19, 2026');
    await page.screenshot({ path: 'test-artifacts/screenshots/start-date_found.png', fullPage: true });
    await info.attach('start-date_found', { path: 'test-artifacts/screenshots/start-date_found.png', contentType: 'image/png' });
  });

  test('leading # and spaces are ignored', async ({ page }) => {
    await page.goto('/start-date');
    await page.getByLabel('Job number').fill('  #260201 ');
    await page.getByLabel('Job number').press('Enter');
    await expect(page.getByTestId('lookup-result')).toContainText('Monday, November 2, 2026');
  });

  test('job without a date yet says it is not scheduled', async ({ page }) => {
    await page.goto('/start-date');
    await page.getByLabel('Job number').fill('260215');
    await page.getByRole('button', { name: 'Check' }).click();
    await expect(page.getByTestId('lookup-result')).toContainText("hasn't been scheduled yet");
  });

  test('unknown job number shows not found', async ({ page }) => {
    await page.goto('/start-date');
    await page.getByLabel('Job number').fill('999999');
    await page.getByRole('button', { name: 'Check' }).click();
    await expect(page.getByTestId('lookup-result')).toContainText("We couldn't find job #999999");
  });

  test('non-numeric input is rejected', async ({ page }) => {
    await page.goto('/start-date');
    await page.getByLabel('Job number').fill('abc12');
    await page.getByRole('button', { name: 'Check' }).click();
    await expect(page.getByTestId('lookup-result')).toContainText('Job numbers are digits only');
  });

  test('empty submit does not show a result', async ({ page }) => {
    await page.goto('/start-date');
    await page.getByRole('button', { name: 'Check' }).click();
    await expect(page.getByTestId('lookup-result')).toHaveCount(0);
  });
});
