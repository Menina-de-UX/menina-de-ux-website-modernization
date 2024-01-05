import Link from 'next/link'

interface IconProps {
  icon: React.ElementType
  href: string
}
export function Icon({ href, icon: Icon }: IconProps) {
  return (
    <div className="group transition-all duration-300 ease-in-out">
      <Link
        href={href}
        className="text-blue-700 hover:text-pink-400 transform duration-300 ease-in-out"
        target="_blank"
      >
        <Icon size={30} />
      </Link>
    </div>
  )
}
