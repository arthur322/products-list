import { formatCurrency } from '@/utils/format-currency'
import { TableCellProps } from './table-cell'

type TableCellSubtotalProps = TableCellProps & {
  quantity: number
  onChangeQty: (qty: number) => void
}

export function TableCellSubtotal({
  quantity,
  rowValue,
}: TableCellSubtotalProps) {
  const sum = quantity * rowValue.price
  return <td className="p-4 text-right">{formatCurrency(sum)}</td>
}
