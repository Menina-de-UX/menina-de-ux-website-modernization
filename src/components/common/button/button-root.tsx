// Components
// Utilities
import { tv, VariantProps } from 'tailwind-variants'
import Link from 'next/link'
// Hooks
// Interfaces
import { ButtonHTMLAttributes, ReactNode } from 'react'

const button = tv({
  base: [
    'flex px-[1.75rem] max-h-12 py-[0.75rem] justify-center items-center rounded-[1.6875rem]',
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
      desabled: [
        'bg-gray-200 cursor-none px-[1.75rem] py-[0.75rem]',
        'text-gray-400 text-md font-medium font-avenir',
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
  href?: string
}

export function ButtonRoot({
  children,
  variant,
  className,
  href = '#',
  ...res
}: ButtonRootProps) {
  return (
    <div {...res} className="group">
      <Link href={href} className={button({ variant, className })}>
        {children}
      </Link>
    </div>
  )
}
