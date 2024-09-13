const { percySnapshot } = require("@percy/playwright");
import { test } from "@playwright/test";
import { USERNAME } from "../src/constants";
import { SignInPage } from "../src/sign-in";

test("Percy", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.waitForLoadState();
    await percySnapshot(page, "Sign In Page");

    const signInPage = new SignInPage(page);
    await signInPage.signIn(USERNAME);

    await percySnapshot(page, "Personal Page");
});

const removeUserNameTextBox = async (page) => {
    const usernameElement = page.locator('a[href="/signup"]');
    await usernameElement.evaluate((element) => element.remove());
};
