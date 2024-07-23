import { test, Browser, BrowserContext, Page, expect } from "@playwright/test";
import { chromium } from "playwright";
test("WebTable", async ({page}) => 
    {
await page.goto("https://testautomationpractice.blogspot.com/");
const row= await page.locator("//table[@name='BookTable']/tbody/tr/td[1]");
console.log(await row.count())
const column= await page.locator("//table[@name='BookTable']/tbody/tr[2]/td");
console.log(await column.count())
expect(await column.count()).toBe(4);

await page.screenshot({path:"tests/screenshots/screen.png"})
const elementScreen=await page.locator("h1.title")
await elementScreen.screenshot({path:"tests/screenshots/screen1.png"})
//  for(let i=0;i<await row.count();i++)   
//  {const col=await page.locator("//table[@name='BookTable']/tbody/tr").nth(i);
//             console.log(await col.textContent())
//  }

// const table =await page.locator("//table[@name='BookTable']");
// const len=await table.locator("//tbody/tr/th");
// await page.waitForTimeout(3000)
// console.log(await len.count())
// await page.waitForTimeout(3000)

    });