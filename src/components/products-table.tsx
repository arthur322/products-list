'use client'

import { Product } from '@/types/product'
import { useProducts } from '../hooks/use-products'
import { formatCurrency } from '../utils/format-currency'
import { useState } from 'react'
import Image from 'next/image'

function generateAlign(align?: string) {
  return align ? `text-${align}` : ''
}

const tableColumns = [
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

export function ProductsTable() {
  const { isLoading, isError, products } = useProducts()

  if (isLoading) {
    return <h1 className="text-lg">Carregando produtos...</h1>
  }

  if (isError) {
    return (
      <h1 className="text-lg text-red-600">
        Ocorreu um erro, tente novamente mais tarde.
      </h1>
    )
  }

  return (
    <table className="w-full">
      <thead>
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
          <TableRow key={product.id} product={product} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={tableColumns.length}>
            <TableTotal total={0} />
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

type TableRowProps = {
  product: Product
}
function TableRow({ product }: TableRowProps) {
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
          />
        )
      })}
    </tr>
  )
}

type TableCellProps = {
  value?: string | number
  rowValue: Product
  formatter?: (value: string | number) => string
  align?: string
}
function TableCell({ value = '~', formatter, align }: TableCellProps) {
  const cellContent = formatter?.(value) ?? value

  return <td className={`p-4 ${generateAlign(align)}`}>{cellContent}</td>
}

type TableCellInfoProps = TableCellProps & {}
function TableCellInfo({ value = '~', rowValue }: TableCellInfoProps) {
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

function QntButton({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button onClick={onClick} className="size-6 bg-gray-200 text-stone-500">
      {children}
    </button>
  )
}

function TableCellUnityQuantity() {
  const [qnt, setQnt] = useState(0)
  return (
    <td className="p-4 text-stone-500">
      <div className="flex justify-end items-center gap-3">
        {qnt.toString().padStart(2, '0')}{' '}
        <div className="flex flex-col gap-0.5">
          <QntButton onClick={() => setQnt((q) => q + 1)}>+</QntButton>
          <QntButton onClick={() => setQnt((q) => Math.max(q - 1, 0))}>
            -
          </QntButton>
        </div>
      </div>
    </td>
  )
}

type TableCellSubtotalProps = TableCellProps & {
  quantity?: number
}
function TableCellSubtotal({ quantity = 0, rowValue }: TableCellSubtotalProps) {
  const sum = quantity * rowValue.price
  return <td className="p-4 text-right">{formatCurrency(sum)}</td>
}

type TableTotalProps = {
  total: number
}
function TableTotal({ total }: TableTotalProps) {
  return (
    <div className="flex w-[400px] gap-64 bg-gray-200 px-4 py-3 ml-auto">
      <span>Total</span>
      <span>{formatCurrency(total)}</span>
    </div>
  )
}

function TableHeader({
  children,
  align,
}: {
  children: React.ReactNode
  align?: string
}) {
  return (
    <th
      className={`h-12 bg-gray-200 font-normal text-stone-500 px-4 py-3 border-b border-stone-300 ${generateAlign(align)}`}
    >
      {children}
    </th>
  )
}
