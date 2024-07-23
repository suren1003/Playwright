import {test,Browser,BrowserContext,Page} from '@playwright/test';
import {chromium} from 'playwright';

test("basic auth",async({}) =>
{
const browser:Browser=await chromium.launch({headless:false,channel:"chrome"});
const context:BrowserContext=await browser.newContext();
const page:Page=await context.newPage();
await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
await page.waitForTimeout(3000);
//await page.locator("a.btn").click();//tag with classname
await page.locator("text=Continue").click();//using text
await page.waitForTimeout(4000);

const visible:boolean =await page.locator(".img-responsive").isVisible();
console.log(visible);
// const visible1:boolean =await page.getByAltText("naveenopencart").isVisible();
// console.log(visible1);


});





//using page fixture also working
test.skip("Basic Auth",async({page}) =>
    {
    //const browser:Browser=await chromium.launch({headless:false,channel:"chrome"});
   // const context:BrowserContext=await browser.newContext();
   // const page:Page=await context.newPage();
    await page.goto("https://www.amazon.in/");
    });