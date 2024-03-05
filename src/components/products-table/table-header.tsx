import { generateAlign } from '@/utils/products-table'

type TableHeaderProps = {
  children: React.ReactNode
  align?: string
}

export function TableHeader({ children, align }: TableHeaderProps) {
  return (
    <th
      className={`h-12 bg-gray-200 font-normal text-stone-500 px-4 py-3 border-b border-stone-300 ${generateAlign(align)}`}
    >
      {children}
    </th>
  )
}
