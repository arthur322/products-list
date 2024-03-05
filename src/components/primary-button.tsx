type PrimaryButtonProps = {
  children: React.ReactNode
}
export function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <button className="h-10 bg-green-700 text-white text-sm px-3">
      {children}
    </button>
  )
}
