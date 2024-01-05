import { Footer } from '@/components/footer'
import { Header } from '@/components/hearder'
import { ReactNode } from 'react'

export default function WebSiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
