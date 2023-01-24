const { test, expect } = require("@playwright/test");

test('Register user account', async ({ page }) => {
    await page.goto('https://ponyos-watercolour-artclasses-bucket.s3.eu-north-1.amazonaws.com/index.html');
    await expect(page).toHaveTitle('art-class');
    await page.getByRole('button', { name: 'Account' }).click();
    await page.getByRole('button', { name: 'Sign up' }).click();
    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameAvailable classesSign up' }).locator('#fldEmail').click();

    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameAvailable classesSign up' }).locator('#fldEmail').click();
    // await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameAvailable classesSign up' }).locator('#fldEmail').fill('areradf');
    //await page.getByText('Invalid e-mail').click();
    //await expect(page).hasText('Invalid e-mail');

    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameAvailable classesSign up' }).locator('#fldEmail').fill('autotest@atu.ie');
    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameAvailable classesSign up' }).locator('#fldPassword').click();
    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameAvailable classesSign up' }).locator('#fldPassword').fill('testpass');
    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameAvailable classesSign up' }).locator('#fldPassword').press('Tab');
    await page.getByLabel('Password Confirmation').fill('testpass');
    await page.getByLabel('Password Confirmation').press('Tab');
    await page.getByLabel('Your Name').fill('Automation');
    await page.getByLabel('Your Name').press('Tab');
    await page.getByLabel('Available classes').click();
    await page.getByText('Watercolors').click();
    await page.getByRole('button', { name: 'Sign up' }).click();


})
