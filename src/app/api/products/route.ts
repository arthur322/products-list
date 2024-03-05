import { getProducts } from '@/services/get-products'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const searchQuantity = searchParams.get('quantity')

  const products = await getProducts(searchQuantity)

  return NextResponse.json({
    products,
  })
}
