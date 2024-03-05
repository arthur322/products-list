export function formatCurrency(value: number | string) {
  const toFormat = typeof value === 'string' ? Number.parseFloat(value) : value

  if (isNaN(toFormat)) {
    return ''
  }

  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }
  const formatNumber = new Intl.NumberFormat('pt-BR', options)

  return formatNumber.format(toFormat)
}
