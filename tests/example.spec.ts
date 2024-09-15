const { percySnapshot } = require("@percy/playwright");
import { test } from "@playwright/test";

test("Percy", async ({ page }) => {
    await page.goto("https://account.booking.com/sign-in");
    await page.waitForLoadState();
    await percySnapshot(page, "Sign In Page");
});
