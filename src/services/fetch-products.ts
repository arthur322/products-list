export async function fetchProducts() {
  const response = await fetch('/api/products?quantity=10')

  if (!response.ok) {
    const error = await response.text()
    throw new Error(error)
  }

  const data = await response.json()

  return data.products
}
