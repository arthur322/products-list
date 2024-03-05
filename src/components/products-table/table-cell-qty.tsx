import { TableCellProps } from './table-cell'

type QtyButtonProps = {
  children: React.ReactNode
  onClick: () => void
}
function QtyButton({ children, onClick }: QtyButtonProps) {
  return (
    <button onClick={onClick} className="size-6 bg-gray-200 text-stone-500">
      {children}
    </button>
  )
}

type TableCellUnityQuantity = TableCellProps & {
  quantity: number
  onChangeQty: (qty: number) => void
}
export function TableCellUnityQuantity({
  quantity,
  onChangeQty,
}: TableCellUnityQuantity) {
  return (
    <td className="p-4 text-stone-500">
      <div className="flex justify-end items-center gap-3">
        {quantity.toString().padStart(2, '0')}{' '}
        <div className="flex flex-col gap-0.5">
          <QtyButton onClick={() => onChangeQty(quantity + 1)}>+</QtyButton>
          <QtyButton onClick={() => onChangeQty(Math.max(quantity - 1, 0))}>
            -
          </QtyButton>
        </div>
      </div>
    </td>
  )
}
