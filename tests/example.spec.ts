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

const mockTransactionAPIResponse = async (page) => {
    await page.route("**/transactions", async (route) => {
        const mockResponse = {
            body: JSON.stringify({
                pageData: {
                    page: 1,
                    limit: 10,
                    hasNextPages: false,
                    totalPages: 1,
                },
                results: [
                    {
                        receiverName: "Ted Parisian",
                        senderName: "tuan huynh",
                        receiverAvatar:
                            "https://avatars.dicebear.com/api/human/uBmeaz5pX.svg",
                        likes: [],
                        comments: [],
                        id: "-bufUiClz",
                        uuid: "fa740a8c-b68f-44d0-8f9f-b7b3a79ed28c",
                        amount: 12312300,
                        description: "123",
                        receiverId: "uBmeaz5pX",
                        senderId: "r8SzEFdM9",
                        status: "complete",
                        createdAt: "2024-09-06T07:29:49.476Z",
                        modifiedAt: "2024-09-06T07:29:49.476Z",
                    },
                ],
            }),
        };
        await route.fulfill(mockResponse);
    });
};

const mockUserAPIResponse = async (page) => {
    await page.route("**/login", async (route) => {
        const mockResponse = {
            body: JSON.stringify({
                user: {
                    id: "ox99VW2mR",
                    uuid: "8841dc3c-310f-4d83-b9e0-f4200e40e43d",
                    firstName: "tuan",
                    lastName: "huynh",
                    username: "tuan.hv",
                    password:
                        "$2a$10$wnc.kYcChAfS4m67CG/yluzqHCbi7ShvF99Bs3FuMPGfaUIp5UFlO",
                    balance: 0,
                    createdAt: "2024-09-06T08:08:33.899Z",
                    modifiedAt: "2024-09-06T08:08:33.899Z",
                },
            }),
        };
        await route.fulfill(mockResponse);
    });
};
