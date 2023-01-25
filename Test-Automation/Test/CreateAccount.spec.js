const { test, expect } = require("@playwright/test");

test('Register user account', async ({ page }) => {
    await page.goto('https://ponyos-watercolour-artclasses-bucket.s3.eu-north-1.amazonaws.com/index.html');
    await expect(page).toHaveTitle('art-class');
    await page.getByRole('button', { name: 'Account' }).click();
    await page.getByRole('button', { name: 'Sign up' }).click();
    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameSign up' }).locator('#fldEmail').click();
    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameSign up' }).locator('#fldEmail').fill('atu@atu.ie');
    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameSign up' }).locator('#fldEmail').press('Tab');
    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameSign up' }).locator('#fldPassword').fill('password');
    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameSign up' }).locator('#fldPassword').press('Tab');
    await page.getByLabel('Password Confirmation').fill('password');
    await page.getByLabel('Password Confirmation').press('Tab');
    await page.getByLabel('Your Name').fill('atuDevOps');
    await page.getByRole('button', { name: 'Sign up' }).click();
});