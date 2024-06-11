import { test, expect } from '@playwright/test';
import { generateValidUsername } from '../libs/generate-valid-member-components';

const randomUsername = generateValidUsername();
test('Admin logs in using invalid credentials', async ({
  page,
}) => {
  await page.goto(`https://www.netflix.com/login`);
  await expect(page.locator(`//h1[text()='Sign In']`)).toBeVisible({timeout: 2000});
  // Action
  await page.locator(`//input[@data-uia='login-field']`).fill(`${randomUsername}@yey.com`);
  await page.locator(`//input[@data-uia='password-field']`).fill(`password`);
  await page.locator(`//button[@data-uia='login-submit-button']`).click();

  // Assertion
  await expect(
    page.locator(`//div[text()='Incorrect password for ${randomUsername}@yey.com']`)
  ).toBeVisible();
});
