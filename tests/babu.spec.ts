import { Browser, BrowserContext, Page, test } from "@playwright/test";
import { chromium } from "playwright";

test("First Test case", async ({}) => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  const context1: BrowserContext = await browser.newContext();
  const page1: Page = await context1.newPage();
  await page1.goto("https://www.amazon.in/");
  await page1.close();
 // await page1.waitForTimeout(3000);
 // await browser1.close();

 // const browser2: Browser = await chromium.launch();
  const context2: BrowserContext = await browser.newContext();
  const page2: Page = await context2.newPage();
  await page2.goto("https://www.flipkart.com/");
 // await page2.waitForTimeout(3000);
  await page2.close();

  //await new Promise(()=>{});
});
