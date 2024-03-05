import { Product } from '@/types/product'
import { generateAlign } from '@/utils/products-table'

export type TableCellProps = {
  value?: string | number
  rowValue: Product
  formatter?: (value: string | number) => string
  align?: string
}

export function TableCell({ value = '~', formatter, align }: TableCellProps) {
  const cellContent = formatter?.(value) ?? value

  return <td className={`p-4 ${generateAlign(align)}`}>{cellContent}</td>
}
