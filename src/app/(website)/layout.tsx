// Components
import { Footer } from '@/components/footer'
import { Header } from '@/components/hearder'
// Utilities
// Interfaces
import { ReactNode } from 'react'
// Hooks

export default function WebSiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
