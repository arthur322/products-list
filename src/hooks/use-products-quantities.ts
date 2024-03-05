'use client'

import { useCallback, useMemo, useState } from 'react'
import { Product } from '@/types/product'

type Quantities = Record<string, { quantity: number; total: number }>

export function useProductsQuantities() {
  const [productsQuantities, setQtyProducts] = useState<Quantities>({})

  const updateQuantities = useCallback((product: Product, quantity: number) => {
    setQtyProducts((qty) => ({
      ...qty,
      [product.id]: {
        quantity,
        total: quantity * product.price,
      },
    }))
  }, [])

  const totalAmount = useMemo(
    () =>
      Object.values(productsQuantities).reduce(
        (acc, item) => acc + item.total,
        0,
      ),
    [productsQuantities],
  )

  return { productsQuantities, updateQuantities, totalAmount }
}
