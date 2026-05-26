import { test, expect } from "@playwright/test";

test('check title', async ({ page }) => {
    await page.goto("https://www.techxincorporation.com/");

    // const texhXHeading = page.locator('//*[@id="root"]/header/div/a[1]/span[1]');
    // console.log(texhXHeading);

    // const exporeBtn = page.getByRole("link", { name: /Explore/ });
    // await exporeBtn.click();
    // expect(page.url()).toBe("https://www.techxincorporation.com/training");
    const consultBtn = page.getByRole("link", { name: /Request/ }).nth(1); 
    // [top bar result, main page result] --> [0, 1] --> 1
    await consultBtn.click();
    expect(page.url()).toBe("https://www.techxincorporation.com/contact");
});






// // import {test, expect} from '@playwright/test';
// // test('check title', async ({page}) => {
// //     await page.goto("https://www.youtube.com/");}
// //     const button = page.getByRole("button", { name: "history" });
// //     await button.click();
// //     expect(page.url()).toBe("https://www.youtube.com/feed/history");
// // );

// import { test, expect } from '@playwright/test';

// test('check youtube history page', async ({ page }) => {

//     // open youtube
//     await page.goto("https://www.youtube.com/");

//     // locate history button
//     const button = page.getByRole("link", { name: /History/i });

//     // click button
//     await button.click();

//     // verify url
//     await expect(page).toHaveURL(
//         "https://www.youtube.com/feed/history"
//     );

// });