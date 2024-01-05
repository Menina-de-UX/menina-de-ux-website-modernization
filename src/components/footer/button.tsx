import Link from 'next/link'
export function ButtonFooter() {
  return (
    <Link
      href="https://www.linkedin.com/in/joaotelesk/"
      className="w-full lg:w-80 h-12 rounded-[0.3125rem] bg-blue-700 text-white flex items-center  font-avenir font-bold text-base cursor-pointer justify-start px-6 hover:bg-pink-400 transform duration-300 ease-in-out"
      target="_blank"
    >
      <span>Junte-se à nossa comunidade.</span>
    </Link>
  )
}
