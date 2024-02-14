import type { Metadata } from 'next'
import '../styles/globals.css'
import '@/styles/carousel.css'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

export const metadata: Metadata = {
  title: {
    template: '%s | Menina de UX',
    default: 'Menina de UX',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="text-black antialiased">{children}</body>
    </html>
  )
}
