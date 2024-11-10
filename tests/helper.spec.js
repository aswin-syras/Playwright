const {test,expect} = require ('@playwright/test');
module.exports = { login };

async function login(page){
    await page.goto('https://staging-demo.yuja.com/'); 
    //test.use({ navigationTimeout: 10000 });
    await expect(page).toHaveTitle('Xavier University Enterprise Video Platform')
    await page.locator('id=action-btn').nth(1).click();
    await page.locator('id=loginuserid').fill("aswin_syras");
    await page.locator('id=password').fill("Aswinsyras@1231");
    await page.locator('id=loginButton').click();
    const avatar = await page.locator('id=avatarImage');
    await expect(avatar).toBeVisible({timeout: 50000});
    await page.close();
}