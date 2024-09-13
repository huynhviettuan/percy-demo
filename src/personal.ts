import { Page } from "@playwright/test";

export class PersonalPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToMineTab() {
        await this.page.locator("a", { hasText: "Mine" }).click();
    }
}
