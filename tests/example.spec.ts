const { percySnapshot } = require("@percy/playwright");
import { test } from "@playwright/test";

test("Percy", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.waitForLoadState();
    await percySnapshot(page, "Sign In Page", {
        percyCSS: "div h1 {color:green;}",
    });
});
