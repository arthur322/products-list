'use client'

import { formatCurrency } from '../../utils/format-currency'
import { useProductsQuantities } from '@/hooks/use-products-quantities'
import { TableRow } from './table-row'
import { TableCellInfo } from './table-cell-info'
import { TableCellUnityQuantity } from './table-cell-qty'
import { TableCellSubtotal } from './table-cell-subtotal'
import { TableHeader } from './table-header'
import { TableTotal } from './table-total'
import { Product } from '@/types/product'

export const tableColumns = [
  { label: 'Material', key: 'name', component: TableCellInfo, align: 'center' },
  { label: 'Tipo de material', key: 'type' },
  { label: 'Marca', key: 'brand' },
  {
    label: 'Preço',
    key: 'price',
    formatValue: formatCurrency,
    align: 'right',
  },
  { label: 'Quantidade mínima', key: 'minQuantity', align: 'right' },
  {
    label: 'Quantidade unitária',
    key: 'unityQuantity',
    component: TableCellUnityQuantity,
    align: 'right',
  },
  {
    label: 'Subtotal',
    key: 'subtotal',
    component: TableCellSubtotal,
    align: 'right',
  },
]

type ProductsTablePros = {
  products: Product[]
}
export function ProductsTable({ products }: ProductsTablePros) {
  const { productsQuantities, updateQuantities, totalAmount } =
    useProductsQuantities()

  return (
    <>
      <div className="max-h-[50vh] overflow-y-auto">
        <table className="w-full">
          <thead className="sticky top-0">
            <tr>
              {tableColumns.map((column) => (
                <TableHeader key={column.key} align={column.align}>
                  {column.label}
                </TableHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                product={product}
                productQty={productsQuantities[product.id]?.quantity ?? 0}
                onProductQtyChange={updateQuantities}
              />
            ))}
          </tbody>
        </table>
      </div>
      <TableTotal total={totalAmount} />
    </>
  )
}
