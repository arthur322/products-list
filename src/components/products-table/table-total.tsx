import { formatCurrency } from '@/utils/format-currency'

type TableTotalProps = {
  total: number
}

export function TableTotal({ total }: TableTotalProps) {
  return (
    <div className="flex w-[400px] gap-64 bg-gray-200 px-4 py-3 ml-auto">
      <span>Total</span>
      <span>{formatCurrency(total)}</span>
    </div>
  )
}
