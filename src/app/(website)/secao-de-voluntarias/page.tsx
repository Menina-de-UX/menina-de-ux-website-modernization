// Components
import { Title } from '@/components/common/title'
import { SectionInvited } from '@/components/sections/invitation'
import { Voluntary } from '@/components/sections/voluntary'
// Utilities
import Image from 'next/image'
import { Metadata } from 'next'
// Interfaces
// Hooks

export const metadata: Metadata = {
  title: 'Seção de Voluntárias',
}

export default function SecaoVoluntarias() {
  return (
    <main className="w-screen min-h-screen">
      <section className="bg-pink-50">
        <div className="lg:pt-44 pt-40 py-10 lg:container px-5 items-end grid grid-cols-1 lg:grid-flow-col lg:gap-x-16">
          <div className="h-full flex  justify-center lg:justify-start lg:items-end lg:pb-16 ">
            <div className="flex flex-col space-y-6 items-center lg:items-start ">
              <div className="lg:w-5/6">
                <Title type="h1" size="b1">
                  Conheça nossa Equipe
                </Title>
              </div>
              <Image
                src="/secao-voluntarias/banner.png"
                width={558}
                height={340}
                alt="hero"
                quality={100}
                priority
                className="block  lg:hidden"
              />
              <div>
                <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2 text-center lg:text-left">
                  Para tornar o projeto Menina de UX viável, nós contamos com o
                  apoio de uma rede de voluntários de várias áreas de atuação.
                </p>
                <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2 text-center lg:text-left">
                  Conheça um pouquinho sobre cada um deles abaixo!
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/secao-voluntarias/banner.png"
              width={524}
              height={336}
              alt="hero"
              quality={100}
              priority
              className="lg:block  hidden"
            />
          </div>
        </div>
      </section>
      <Voluntary />
      <SectionInvited />
    </main>
  )
}
