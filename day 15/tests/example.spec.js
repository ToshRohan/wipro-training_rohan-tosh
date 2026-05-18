// // // @ts-check


// // // import { test, expect } from '@playwright/test';

// // // test('test', async ({ page }) => {
// // //   await page.goto('https://www.youtube.com/');
// // //   await page.getByRole('link', { name: 'You', description: 'You', exact: true }).click();
// // //   await page.getByRole('link', { name: 'You', description: 'You', exact: true }).click();
// // //   await page.getByRole('link', { name: 'Home', description: 'Home', exact: true }).click();
// // // });
// // // youtube-profile.spec.js

// // import { test, expect } from '@playwright/test';

// // test.describe('YouTube Profile Services Tests', () => {

// //   // Test Case 1 - Open YouTube
// //   test('Check YouTube homepage title', async ({ page }) => {
// //     await page.goto('https://www.youtube.com/');

// //     await expect(page).toHaveTitle(/YouTube/);
// //   });

// //   // Test Case 2 - Open Sign In Page
// //   test('Check Sign In button works', async ({ page }) => {
// //     await page.goto('https://www.youtube.com/');

// //     const signInButton = page.getByRole('link', { name: 'Sign in' });

// //     await signInButton.click();

// //     await expect(page).toHaveURL(/accounts.google.com/);
// //   });

// //   // Test Case 3 - Open History Service
// //   test('Check History page opens', async ({ page }) => {
// //     await page.goto('https://www.youtube.com/');

// //     await page.goto('https://www.youtube.com/feed/history');

// //     await expect(page).toHaveURL(/history/);
// //   });

// //   // Test Case 4 - Open Your Channel Page
// //   test('Check channel page opens', async ({ page }) => {
// //     await page.goto('https://www.youtube.com/@YouTube');

// //     await expect(page).toHaveURL(/@YouTube/);

// //     await expect(page.locator('body')).toContainText('YouTube');
// //   });

// // });




// import { test, expect } from '@playwright/test';

// // test('test', async ({ page }) => {
// //   await page.goto('https://www.practo.com/');
// //   await page.getByLabel('Instant Video Consultation').click();
// //   await page.goto('https://www.practo.com/');
// //   await page.getByText('Consult top doctors online for any health concernPrivate online consultations').click();
 
// //   await page.locator('div').filter({ hasText: 'Book an appointment for an in' }).nth(4).click();
// //   await page.getByText('Read top articles from health expertsHealth articles that keep you informed').click();
// // });

// test('test', async ({ page }) => {
//   await page.goto('https://www.practo.com/');
//   await page.getByLabel('Instant Video Consultation').click();
// });

// test('consult', async ({ page }) => {
//   await page.goto('https://www.practo.com/');
//   await page.getByText('Consult top doctors online for any health concernPrivate online consultations').click();
// });

// test('book an appointment', async ({ page }) => {
//   await page.goto('https://www.practo.com/');
//   await page.locator('div').filter({ hasText: 'Book an appointment for an in' }).nth(4).click();
// });

// test('read articles', async ({ page }) => {
//   await page.goto('https://www.practo.com/');
//   await page.getByText('Read top articles from health expertsHealth articles that keep you informed').click();
// });




// @ts-check
import { test, expect } from '@playwright/test';

// test('amazon razor products check', async ({ page }) => {
//   await page.goto('https://www.amazon.com/');

//   const txtBox = page.locator('#twotabsearchtextbox');
//   await txtBox.fill("gaming");
//   const subBtn = page.locator('#nav-search-submit-button');
//   await subBtn.click();

  
// });



test.skip('ok', ({page}) => {
  // fghjkjhg
}) 

test('test1', async ({page}) => {
  test.setTimeout(10);
  test.step('check if 2 is eq to 3', () => {
    test.fail();
    expect(2).toBe(3); // false. -> fail
  })

  test.step('check if 2 is eq to 2', () => {
    // test.fail();
    expect(2).toBe(2);
  })

  test.step('check if 5 is eq to 5', () => {
    // test.fail();
    expect(5).toBe(5);
  })
}) 

test.fixme('test', async ({ page }) => {
  // test.setTimeout(1000);
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.goto('https://www.amazon.com/s?k=gaming&crid=2G6R10NGAR9DY&sprefix=%2Caps%2C313&ref=nb_sb_noss');
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.getByRole('link', { name: 'Apply Razer filter to narrow' }).click();
  // await page.locator('.a-link-normal').first().click();
  // await page.goto('https://www.amazon.com/Razer-Viper-Wireless-Esports-Gaming/dp/B0GMLBSSTD/ref=sr_1_1?crid=2G6R10NGAR9DY&dib=eyJ2IjoiMSJ9.5xaPZtVT1hDMoUOJvsN1IQ3G2Hw-he0Zg2I-IbW5A267jtrSm50XJFHWcA9wMMNRkGIwsOrk9b0xnZGtEa4Rte3_ok4iO3kmctrFf2oQqLQCwKUkbKd6BaWXJE92rE7SnMx5q_WQgx3haqA6jTQc9tO_Gf2fPA78dnmC1grAskbGyLuac48NnY2Nur_cTFxfzT2KzVtPOB4HaZaIxv-R16Hg2Rvmr9DtAeXTYhC1Ons5CpGaguHWwk7oGYyUWLspxPYgort0sRf9BsTiBAUIVY9_tjohOO0iG3u_WXwDCnE.5Bi-h9Hi2uLD3gO-O16ivfnuyhH7Wbun_jgjYfMBEro&dib_tag=se&keywords=gaming&qid=1779076265&refinements=p_123%3A220854&rnid=85457740011&sprefix=%2Caps%2C313&sr=8-1&th=1');
  // await page.getByRole('heading', { name: 'Razer Viper V4 Pro Wireless' }).locator('#productTitle').click();
});

// test.slow(); // triple the timeout 30 seconds