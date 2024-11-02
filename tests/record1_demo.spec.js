import { test, expect} from '@playwright/test';
//const { chromium } =  require('@playwright/test');

test('test', async ({ page, context }) => {
    //const browser = await chromium.launch();
    await context.tracing.start({ screenshots: true, snapshots: true });

    await page.goto('https://staging-demo.yuja.com/');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByLabel('User ID').click();
    await page.getByLabel('User ID').fill('aswin_syras');
    await page.getByLabel('User ID').press('Tab');
    await page.getByLabel('Password').fill('Aswinsyras@1231');
    
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    await context.tracing.stop({path: 'trace.zip'});

    await page.getByRole('button', { name: 'My Profile' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
  });