import { expect, test } from '@playwright/test'

test('Display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-6% em relação a ontem')).toBeVisible()
})

test('Display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('201')).toBeVisible()
  expect(page.getByText('+8% em relação ao mês passado')).toBeVisible()
})

test('Display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('57')).toBeVisible()
  expect(page.getByText('-6% em relação ao mês passado')).toBeVisible()
})

test('Display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.locator('span').filter({ hasText: 'R$ 10,00' })).toBeVisible()
  expect(page.getByText('+5% em relação ao mês passado')).toBeVisible()
})
