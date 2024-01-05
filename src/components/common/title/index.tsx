import { tv, VariantProps } from 'tailwind-variants'

const title = tv({
  base: 'font-ncs text-blue-700',
  variants: {
    size: {
      b1: 'text-3xl text-center lg:text-6xl lg:text-left',
      b2: 'text-3xl text-center lg:text-left',
      b3: 'text-xl',
      b4: 'text-lg',
    },
    weight: {
      extraBold: 'font-extraBold',
      medium: 'font-medium',
      normal: 'font-light',
    },
  },
  defaultVariants: {
    size: 'b1',
    weight: 'normal',
  },
})

interface TitleProps extends VariantProps<typeof title> {
  children: React.ReactNode
  className?: string
  type?: 'h1' | 'h2' | 'h3' | 'h4'
}

export function Title({
  children,
  size,
  weight,
  className,
  type = 'h1',
  ...res
}: TitleProps) {
  const Tag = type
  return (
    <Tag {...res} className={title({ size, weight, className })}>
      {children}
    </Tag>
  )
}
