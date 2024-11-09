const {test,expect} = require ('@playwright/test');

test('First Page',async ({page}) => {
    await page.goto('https://staging-demo.yuja.com/'); 
    await expect(page).toHaveTitle('Xavier University Enterprise Video Platform')
    await page.locator('id=action-btn').nth(1).click();
    await page.locator('id=loginuserid').fill("aswin_syras");
    await page.locator('id=password').fill("Aswinsyras@1231");
    await page.locator('id=loginButton').click();
    const avatar = await page.locator('id=avatarImage');
    await expect(avatar).toBeVisible();
    await page.close();
})

