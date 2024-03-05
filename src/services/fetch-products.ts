export async function fetchProducts(quantity?: string) {
  const params = quantity ? new URLSearchParams({ quantity }) : ''
  const response = await fetch(`/api/products?${params.toString()}`)

  if (!response.ok) {
    const error = await response.text()
    throw new Error(error)
  }

  const data = await response.json()

  return data.products
}
