import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('**', async (route) => {
    await route.continue();
  });
});

test('renders message', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('message')).toHaveText('Playwright is working!');
});
