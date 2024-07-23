import {test,Browser,BrowserContext,Page} from '@playwright/test';
import {chromium} from 'playwright';

test("Number of pages",async({}) =>
{
const browser =await chromium.launch({headless:false,channel:"chrome"});
const context =await browser.newContext();
const page1=await context.newPage();
const page2=await context.newPage();
await page1.goto("https://www.amazon.in/");
//await page2.goto("https://www.flipkart.com/");
console.log(context.pages().length);

});