import { ButtonHTMLAttributes, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import Link from 'next/link'

const button = tv({
  base: [
    'flex px-4 lg:px-[1.75rem] max-h-12 py-[0.75rem] justify-center items-center rounded-[1.6875rem]',
  ],
  variants: {
    variant: {
      blue: [
        'bg-blue-400 border-[1px] border-blue-400 group-hover:bg-transparent group-hover:border-blue-400',
        'text-gray-100 font-medium font-avenir text-md group-hover:text-blue-400',
        'transform duration-300 ease-in-out',
      ],
      pink: [
        'bg-pink-400 border-[1px] border-pink-400 group-hover:bg-transparent group-hover:border-pink-400',
        'text-gray-100 font-medium font-avenir text-md group-hover:text-pink-400',
        'transform duration-300 ease-in-out',
      ],
      'outline-pink': [
        'bg-transparent border-[1px] border-pink-400 group-hover:bg-pink-400',
        'text-pink-400 font-medium font-avenir text-md group-hover:text-white',
        'transform duration-300 ease-in-out',
      ],
      'outline-blue': [
        'bg-transparent border-[1px] border-blue-400 group-hover:bg-blue-400',
        'text-blue-400 font-medium font-avenir text-md group-hover:text-white',
        'transform duration-300 ease-in-out',
      ],
    },
  },
  defaultVariants: {
    variant: 'blue',
  },
})

export interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof button> {
  children: ReactNode
}

export function ButtonRoot({
  children,
  variant,
  className,
  ...res
}: ButtonRootProps) {
  return (
    <div {...res} className="group">
      <Link href="#" className={button({ variant, className })}>
        {children}
      </Link>
    </div>
  )
}
