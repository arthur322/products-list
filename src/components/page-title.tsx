type Props = { children: React.ReactNode }

export function PageTitle({ children }: Props) {
  return <h1 className="text-3xl text-main">{children}</h1>
}
