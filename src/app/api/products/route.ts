import { productGenerator } from '@/lib/product-generator'
import { NextRequest, NextResponse } from 'next/server'

const DEFAULT_PRODUCT_AMOUNT = 800

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const searchQuantity = searchParams.get('quantity')

  const productAmount = searchQuantity
    ? Number(searchQuantity)
    : DEFAULT_PRODUCT_AMOUNT
  const products = productGenerator(productAmount)

  return NextResponse.json({
    products,
  })
}
