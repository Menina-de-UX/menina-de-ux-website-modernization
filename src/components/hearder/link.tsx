'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LinkHeadProps {
  title: string
  href: string
  handleClick?: () => void
}

export function LinkHeader({ href, title, handleClick }: LinkHeadProps) {
  const pathname = usePathname()

  return (
    <Link href={href} className="relative group" onClick={() => handleClick}>
      <span
        className={`${
          pathname === href ? 'text-blue-700' : 'text-gray-400'
        } font-ncs text-base font-light leading-6 group-hover:text-blue-700`}
      >
        {title}
      </span>
      <div
        className={`${
          pathname === href
            ? "content-[''] bg-pink-400 h-[2px] absolute w-10 lg:w-[60%] left-0 -bottom-[5px] "
            : "after:content-[''] after:bg-pink-400 after:h-[2px] after:absolute after:w-[0%] after:left-0 after:-bottom-[5px] after:duration-300 group-hover:after:w-10 lg:w-[60%]"
        }`}
      />
    </Link>
  )
}
