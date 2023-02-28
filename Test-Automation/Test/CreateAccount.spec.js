const { test, expect } = require("@playwright/test");

test('Register user account', async ({ page }) => {
    await page.goto('http://ponyos-watercolour-art-classes-dev.s3-website-eu-west-1.amazonaws.com/#/home');
    await expect(page).toHaveTitle('art-class');
    await page.getByRole('button', { name: 'Log In' }).click();
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
    // await page.goto('https://ponyos-watercolour-artclasses-bucket.s3.eu-north-1.amazonaws.com/index.html#/courses')
    // await page.waitForTimeout(3000)

})

test('Verify student can Enroll in the specific course', async ({ page }) => {
    await page.goto('http://ponyos-watercolour-art-classes-dev.s3-website-eu-west-1.amazonaws.com/#/home')
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByLabel('E-mail').click();
    await page.getByLabel('E-mail').click();
    await page.getByLabel('E-mail').fill('john@email.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'Courses' }).click();
    await page.getByRole('button', { name: 'Enroll' }).click();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.getByRole('button', { name: 'Enroll' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
});

test('Verify user student can unenroll from the specific course', async ({ page }) => {

    await page.goto('http://ponyos-watercolour-art-classes-dev.s3-website-eu-west-1.amazonaws.com/#/home')
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByLabel('E-mail').click();
    await page.getByLabel('E-mail').click();
    await page.getByLabel('E-mail').fill('john@email.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'Courses' }).click();
    await page.waitForTimeout(6000);
    await page.locator('#btnRemove_Sosuke').click();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.locator('#btnRemove_Sosuke').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();

});



