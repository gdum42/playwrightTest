import { test, expect } from '@playwright/test'

test.describe('testing Playwright', () => {
  test('has title', async ({ page }) => {
    await page.goto('/')
    await page.locator('input[name=username]').fill(process.env.SIGNIN_USERNAME!)
    await page.locator('input[name=password]').fill(process.env.SIGNIN_PASSWORD!)
    await page.locator('input[type=submit]').click()
    await expect(page).toHaveTitle('ParaBank | Accounts Overview')
  })
})
