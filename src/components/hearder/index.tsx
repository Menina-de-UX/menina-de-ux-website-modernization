'use client'
// Components
import { LinkHeader } from './link'
import { Logo } from './logo'
import { MenuMobile } from './menu-mob'
// Utilities
import Link from 'next/link'
// Hooks
import { useEffect, useState } from 'react'
// Interfaces

export function Header() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    window.scrollTo(0, 0)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full h-20 flex ${
        scrollPosition > 0 ? 'bg-white shadow-sm' : 'bg-transparent'
      } duration-500 z-10 item-center lg:h-20`}
    >
      <div className="container px-5 flex items-center justify-between gap-8">
        <Link href="/" className="">
          <Logo />
        </Link>
        <nav className="hidden  lg:h-auto lg:flex lg:justify-around gap-5 lg:gap-10">
          <LinkHeader href="/" title="Início" />
          <LinkHeader href="/estude" title="Estude" />
          <LinkHeader href="/cursos" title="Cursos" />
          <LinkHeader href="/parcerias" title="Parcerias" />
          <LinkHeader href="/sobre" title="Sobre" />
          <LinkHeader href="/contato" title="Contato" />
        </nav>
        <MenuMobile />
      </div>
    </header>
  )
}
