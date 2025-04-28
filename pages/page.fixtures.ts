import { test as baseTest } from "@playwright/test"
import { HoichoiHomePage } from "./hoichoi-home.page"
import { HoichoiLoginPage } from "./hoichoi-login.page"

export const pageFixtures = baseTest.extend<PageFixtures>({
    hoichoiHomePage: async ({ page }, use) => {
        await use(new HoichoiHomePage(page))
    },
    hoichoiLoginPage: async ({ page }, use) => {
        await use(new HoichoiLoginPage(page))
    },
    
})

export interface PageFixtures {
    hoichoiHomePage: HoichoiHomePage
    hoichoiLoginPage: HoichoiLoginPage
}

export type AnyPage = PageFixtures[keyof PageFixtures]
