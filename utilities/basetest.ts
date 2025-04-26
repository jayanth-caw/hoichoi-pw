import { mergeTests, test as baseTest, expect as baseExpect } from "@playwright/test"
import { pageFixtures, PageFixtures } from "../pages/page.fixtures"

const fixtures = mergeTests(pageFixtures,baseTest)

export interface TestFixtures extends PageFixtures{}

export const test = fixtures.extend<TestFixtures>({
   
})


