

import { test, expect } from '@playwright/test';

let nama = 'nazla';

test ('web selenium', async ( { page } ) => {

await page.goto('https://seleniumbase.io/demo_page?utm_source=chatgpt.com');

await expect(page).toHaveTitle('Web Testing Page');

await page.locator('#myTextInput').fill(`nama saya ${nama}`);

await page.waitForTimeout(5000);

});




