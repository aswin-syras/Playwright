const {test,expect} = require ('@playwright/test');

test('First Page',async ({page}) => {
    await page.goto('https://www.google.com'); 
    await expect(page).toHaveTitle('Google');
})