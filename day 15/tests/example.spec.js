// // @ts-check


// // import { test, expect } from '@playwright/test';

// // test('test', async ({ page }) => {
// //   await page.goto('https://www.youtube.com/');
// //   await page.getByRole('link', { name: 'You', description: 'You', exact: true }).click();
// //   await page.getByRole('link', { name: 'You', description: 'You', exact: true }).click();
// //   await page.getByRole('link', { name: 'Home', description: 'Home', exact: true }).click();
// // });
// // youtube-profile.spec.js

// import { test, expect } from '@playwright/test';

// test.describe('YouTube Profile Services Tests', () => {

//   // Test Case 1 - Open YouTube
//   test('Check YouTube homepage title', async ({ page }) => {
//     await page.goto('https://www.youtube.com/');

//     await expect(page).toHaveTitle(/YouTube/);
//   });

//   // Test Case 2 - Open Sign In Page
//   test('Check Sign In button works', async ({ page }) => {
//     await page.goto('https://www.youtube.com/');

//     const signInButton = page.getByRole('link', { name: 'Sign in' });

//     await signInButton.click();

//     await expect(page).toHaveURL(/accounts.google.com/);
//   });

//   // Test Case 3 - Open History Service
//   test('Check History page opens', async ({ page }) => {
//     await page.goto('https://www.youtube.com/');

//     await page.goto('https://www.youtube.com/feed/history');

//     await expect(page).toHaveURL(/history/);
//   });

//   // Test Case 4 - Open Your Channel Page
//   test('Check channel page opens', async ({ page }) => {
//     await page.goto('https://www.youtube.com/@YouTube');

//     await expect(page).toHaveURL(/@YouTube/);

//     await expect(page.locator('body')).toContainText('YouTube');
//   });

// });




import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.practo.com/');
//   await page.getByLabel('Instant Video Consultation').click();
//   await page.goto('https://www.practo.com/');
//   await page.getByText('Consult top doctors online for any health concernPrivate online consultations').click();
 
//   await page.locator('div').filter({ hasText: 'Book an appointment for an in' }).nth(4).click();
//   await page.getByText('Read top articles from health expertsHealth articles that keep you informed').click();
// });

test('test', async ({ page }) => {
  await page.goto('https://www.practo.com/');
  await page.getByLabel('Instant Video Consultation').click();
});

test('consult', async ({ page }) => {
  await page.goto('https://www.practo.com/');
  await page.getByText('Consult top doctors online for any health concernPrivate online consultations').click();
});

test('book an appointment', async ({ page }) => {
  await page.goto('https://www.practo.com/');
  await page.locator('div').filter({ hasText: 'Book an appointment for an in' }).nth(4).click();
});

test('read articles', async ({ page }) => {
  await page.goto('https://www.practo.com/');
  await page.getByText('Read top articles from health expertsHealth articles that keep you informed').click();
});