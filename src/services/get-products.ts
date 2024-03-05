import { delay } from '@/lib/delay'
import { productGenerator } from '@/lib/product-generator'

const DEFAULT_PRODUCT_AMOUNT = 800

export async function getProducts(quantity?: string | null) {
  const productAmount = quantity ? Number(quantity) : DEFAULT_PRODUCT_AMOUNT
  const products = productGenerator(productAmount)

  await delay(0)

  return products
}
