import { test, expect } from '@playwright/test';
const { login } = require('./helper/helper'); // assume helper.js is in the same directory

test('First Page', async ({ page }) => {
    await login(page, "aswin_syras", "Aswinsyras@123123");
    // Add assertions or interactions here
});
