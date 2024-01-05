import { Title } from '@/components/common/title'
import { SectionNews } from '@/components/sections/news'
import { SectionSocialNetworks } from '@/components/sections/social-networks'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato',
}

export default function Contato() {
  return (
    <main className="w-screen min-h-screen">
      <section className="bg-pink-50">
        <div className="lg:pt-44 pt-40 py-20 lg:container px-5 flex justify-center">
          <Title type="h1" size="b1">
            Contato
          </Title>
        </div>
      </section>
      <section>
        <div className="lg:container px-5 py-20">
          <div className="flex flex-col lg:flex-row gap-5 justify-between">
            <SectionNews />
            <SectionSocialNetworks />
          </div>
        </div>
      </section>
    </main>
  )
}
