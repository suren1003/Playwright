import { test, Browser, BrowserContext, Page, expect } from "@playwright/test";
import { chromium } from "playwright";

test.skip("basic auth", async ({}) => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/hovers");
  await page.getByAltText("User Avatar").first().hover();
  await page.waitForTimeout(3000);
});

test.skip("checkBox", async ({page}) => 
 {
    //await page.goto("https://the-internet.herokuapp.com/checkboxes");
//   await page.locator("//form[@id='checkboxes']/input[1]").check();
//   await page.locator("//form[@id='checkboxes']/input[2]").uncheck();
//  await page.waitForTimeout(3000)

//  await page.goto("https://testautomationpractice.blogspot.com/");
//  const total = await page.$$("//select[@id='country']//option")
//  console.log(total.length);

//autosuggest dropdown
 await page.goto("https://www.redbus.in/");
 await page.locator("#src").fill("delhi");
 //await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
 await page.waitForTimeout(5000)
 const to =await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
 console.log(to.length);
});
test.skip("Alert", async ({page}) => 
    {
await page.goto("https://testautomationpractice.blogspot.com/");
   await page.on('dialog', async dialog=>{
       await dialog.accept();
    })
    
await page.locator("//button[text()='Alert']").click();
await page.waitForTimeout(5000)
    });
    test("Frames", async ({page}) => 
        {
//     await page.goto("https://letcode.in/frame");
// const allFrames=await page.frames();
// console.log(allFrames.length)
// const fram =await page.frame({url:"https://letcode.in/frameUI"});

// await fram?.fill("//input[@name='fname']","babu")
// await page.waitForTimeout(5000)

// await page.frameLocator("#firstFr").locator("//input[@name='fname']").fill("suren");
//await page.waitForTimeout(3000)

await page.goto("https://ui.vision/demo/webtest/frames/");
const fr =await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
//await fr.fill("div input[name='mytext3']","hello");
await fr?.locator("div input[name='mytext3']").focus();
await fr?.locator("div input[name='mytext3']").fill("babu");
//const text=await fr.locator("div input[name='mytext3']").focus();
await page.waitForTimeout(3000)

//nested frames
const child =await fr?.childFrames();
console.log(child.length)
await page.waitForTimeout(3000)
await child[0].locator("//*[@id='i5']/div[3]/div").check();
await page.waitForTimeout(3000)
await child[0].locator("//*[@id='i19']").check();
await page.waitForTimeout(3000)
        });