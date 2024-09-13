const { percySnapshot } = require("@percy/playwright");
import { test } from "@playwright/test";

test("Percy", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.waitForLoadState();

    await percySnapshot(page, "Sign In Page", {
        percyCSS: 'a[data-test="signup"] {  font-size: 20px; }',
    });

    // const signInPage = new SignInPage(page);
    // await signInPage.signIn("tuan.hv1");

    // await percySnapshot(page, "Personal Page");
    // const personalPage = new PersonalPage(page);
    // await personalPage.goToMineTab();
    // await percySnapshot(page, "Personal Mine Tab");
});

const removeUserNameTextBox = async (page) => {
    const usernameElement = page.locator('a[href="/signup"]');
    await usernameElement.evaluate((element) => element.remove());
};
