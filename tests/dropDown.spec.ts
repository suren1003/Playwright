import {test,Browser,BrowserContext,Page,expect} from '@playwright/test';
import {chromium} from 'playwright';

test("basic auth",async({}) =>
{
const browser:Browser=await chromium.launch({headless:false,channel:"chrome"});
const context:BrowserContext=await browser.newContext();
const page:Page=await context.newPage();
await page.goto("https://the-internet.herokuapp.com/dropdown");

const noOfValues= await page.$$("id=dropdown");
console.log(noOfValues.length)

const noOfValues1= await page.locator("#dropdown");
await expect(noOfValues1).toHaveCount(1);
await page.selectOption("id=dropdown","Option 2");
await page.waitForTimeout(3000)



});