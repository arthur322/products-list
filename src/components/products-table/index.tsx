import { getProducts } from '@/services/get-products'
import { ProductsTable } from './products-table'

export async function Products({ quantity }: { quantity?: string | null }) {
  const products = await getProducts(quantity)

  return <ProductsTable products={products} />
}
