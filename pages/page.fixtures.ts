import { test as baseTest } from "@playwright/test"
import { HoichoiHomePage } from "./hoichoi-home.page"

export const pageFixtures = baseTest.extend<PageFixtures>({
    hoichoiHomePage: async ({ page }, use) => {
        await use(new HoichoiHomePage(page))
    }
})

export interface PageFixtures {
    hoichoiHomePage: HoichoiHomePage
}

export type AnyPage = PageFixtures[keyof PageFixtures]
