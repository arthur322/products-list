import Image from 'next/image'
import { TableCellProps } from './table-cell'

type TableCellInfoProps = TableCellProps & {}

export function TableCellInfo({ value = '~', rowValue }: TableCellInfoProps) {
  return (
    <td className="p-4">
      <div className="flex gap-3 items-center">
        <Image
          alt={rowValue.name}
          src={rowValue.imageUrl}
          width={40}
          height={40}
          className="size-10 rounded"
        />
        <span>{value}</span>
      </div>
    </td>
  )
}
