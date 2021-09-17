const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:8080');
    await page.screenshot({path: 'screen.png'});
    await page.waitForSelector('#inputTitle');
    await page.type('#inputTitle', 'zakupy');
    await page.type('#inputText', 'kupic papier');
    await page.click('#submitButton');
    await page.waitForSelector('.note');
    await page.click('#pinNote');
    await page.waitFor(1);
    await page.screenshot({path: 'addedNote.png'})

    await browser.close();
})();