export interface ButtonTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export function ButtonText({ children, ...res }: ButtonTextProps) {
  return <span {...res}>{children}</span>
}
