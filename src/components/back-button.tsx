import { ChevronIcon } from './icons'

type Props = {
  onClick?: () => void
}
export function BackButton({ onClick }: Props) {
  return (
    <button
      className="center text-main size-10 border border-main"
      onClick={onClick}
    >
      <ChevronIcon />
    </button>
  )
}
