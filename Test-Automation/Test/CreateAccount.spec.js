import { test, expect } from '@playwright/test';

test('Test PWA', async ({ page }) => {
  await page.goto('http://ponyos-watercolour-art-classes-dev.s3-website-eu-west-1.amazonaws.com/#/home');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameSign up' }).locator('#fldEmail').click();
  await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameSign up' }).locator('#fldEmail').fill('conor3@atu.ie');
  await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameSign up' }).locator('#fldEmail').press('Tab');
  await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameSign up' }).locator('#fldPassword').fill('password');
  await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameSign up' }).locator('#fldPassword').press('Tab');
  await page.getByLabel('Password Confirmation').fill('password');
  await page.getByLabel('Password Confirmation').press('Tab');
  await page.getByLabel('Your Name').fill('Conor3');
  await page.getByRole('button', { name: 'Sign up' }).click();
  //this action fails if the user already exists
  //await page.getByRole('button', { name: 'Go to Home' }).click();
  await page.getByRole('button', { name: 'Courses' }).click();
  await page.locator('#btnEnroll_Sosuke').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByRole('button', { name: 'Remove' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByRole('button', { name: 'Log out' }).click();
});
