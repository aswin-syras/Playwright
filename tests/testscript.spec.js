const {test,expect} = require ('@playwright/test');
import {login} from "./helper.spec";

test('First Page',async ({page}) => {
    await login(page, "aswin_syras", "Aswinsyras@1231");
    //comments added
})
