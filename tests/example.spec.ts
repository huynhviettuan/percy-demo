const { percySnapshot } = require("@percy/playwright");
import { test } from "@playwright/test";

test("Percy", async ({ page }) => {
    await page.goto("https://www.booking.com/");
    await page.waitForLoadState();
    await page.waitForSelector(
        'div[data-testid="webcore-carousel-image-skeleton"]',
        { state: "hidden" }
    );
    await percySnapshot(page, "Home Page");
});
