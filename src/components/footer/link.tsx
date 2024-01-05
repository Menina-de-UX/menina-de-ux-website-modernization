import Link from 'next/link'
interface LinkFooterProps {
  href: string
  text: string
}

export function LinkFooter({ href, text }: LinkFooterProps) {
  return (
    <li className="group w-full">
      <Link
        href={href}
        className="font-avenir text-lg font-ultraLight text-blue-700 group-hover:text-pink-400 transform duration-300 ease-in-out"
      >
        {text}
      </Link>
    </li>
  )
}
