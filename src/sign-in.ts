import { Page } from "@playwright/test";
import { PASSWORD } from "./constants";

export class SignInPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async signIn(account: string) {
        await this.page.locator("#username").fill(account);
        await this.page.locator("#password").fill(PASSWORD);
        await this.page.locator('button[type="submit"]').click();
        await this.page
            .locator('button[type="submit"]')
            .waitFor({ state: "hidden" });
        await this.page
            .locator("div.ReactVirtualized__Grid__innerScrollContainer")
            .waitFor({ state: "visible" });
        await this.page.waitForLoadState();
    }
}
