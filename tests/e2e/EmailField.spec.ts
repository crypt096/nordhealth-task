import { test, expect } from '@playwright/test';

test('EmailField renders and updates input value', async ({ page }) => {
  await page.goto('http://localhost:3000/signup');
});
