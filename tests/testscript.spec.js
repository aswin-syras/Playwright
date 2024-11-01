const {test,expect} = require ('@playwright/test');
//const {hello, helloWorld} = require('./demo/FirstPage');
// import { hello,helloWorld } from './test/demo/FirstPage';

test('First Page',async ({page}) => {
    await page.goto('https://www.google.com'); 
    await expect(page).toHaveTitle('Google');
})