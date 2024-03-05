'use client'

import { Product } from '@/types/product'
import { useEffect, useState } from 'react'
import { fetchProducts } from '../services/fetch-products'

export function useProducts() {
  const [isError, setIsError] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data)
      })
      .catch(() => {
        setIsError(true)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return { products, isError, isLoading }
}
