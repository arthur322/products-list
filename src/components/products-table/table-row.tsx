import { Product } from '@/types/product'
import { memo } from 'react'
import { tableColumns } from './products-table'
import { TableCell } from './table-cell'

type TableRowProps = {
  product: Product
  productQty: number
  onProductQtyChange: (product: Product, quantity: number) => void
}

export const TableRow = memo(function TableRow({
  product,
  productQty,
  onProductQtyChange,
}: TableRowProps) {
  const handleQtyChange = (qty: number) => {
    onProductQtyChange(product, qty)
  }

  return (
    <tr className="h-14 border-b border-stone-300 text-left">
      {tableColumns.map(({ key, formatValue, component: Component, align }) => {
        const CellComponent = Component ?? TableCell
        return (
          <CellComponent
            key={key}
            value={product[key as keyof Product]}
            rowValue={product}
            formatter={formatValue}
            align={align}
            quantity={productQty}
            onChangeQty={handleQtyChange}
          />
        )
      })}
    </tr>
  )
})
