import Link from 'next/link'

interface RoundIconProps {
  icon: React.ElementType
  href: string
}
export function RoundIcon({ href, icon: Icon }: RoundIconProps) {
  return (
    <div className="group transition-all duration-300 ease-in-out">
      <Link
        href={href}
        className="h-8 w-8 p-2 flex justify-center items-center rounded-full bg-blue-700 group-hover:bg-pink-400 transition-all duration-300 ease-in-out"
        target="_blank"
      >
        <Icon size={17} className="text-gray-100" />
      </Link>
    </div>
  )
}
