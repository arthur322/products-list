'use client'

import { Product } from '@/types/product'
import { useEffect, useState } from 'react'
import { fetchProducts } from '../services/fetch-products'

export function useProducts(quantity?: string) {
  const [isError, setIsError] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchProducts(quantity)
      .then((data) => {
        setProducts(data)
      })
      .catch(() => {
        setIsError(true)
      })
      .finally(() => setIsLoading(false))
  }, [quantity])

  return { products, isError, isLoading }
}
