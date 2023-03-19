import { test, expect, Page } from '@playwright/test';

test.describe('test', async () => {
  let page = Page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test('Navigate to Google', async () => {
    await page.goto('https://google.com/');
    const url = await page.url();
    expect(url).toContain('google');
  });

  test('Search for Playwright', async () => {
    await page.type('input[name="q"]', "Playwright")
    await page.keyboard.press('Enter');
    let text = await page.innerText('//h3[contains(text(),"Playwright:")]')
    expect(text).toContain('Playwright: Fast and reliable');
  });
});