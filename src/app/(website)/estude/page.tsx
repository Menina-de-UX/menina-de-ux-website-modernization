// Components
import { Button } from '@/components/common/button'
import { Title } from '@/components/common/title'
import { SectionEstud } from '@/components/sections/estud'
// Utilities
import { Metadata } from 'next'
import Image from 'next/image'
// Interfaces
// Hooks

export const metadata: Metadata = {
  title: 'Estude',
}

export default function Estude() {
  return (
    <main className="w-screen min-h-screen">
      <section className="bg-pink-50">
        <div className="lg:pt-44 pt-40 py-10 lg:container px-5 items-end grid grid-cols-1 lg:grid-flow-col lg:gap-x-16">
          <div className="h-full flex  justify-center lg:justify-start lg:items-end lg:pb-16 ">
            <div className="flex flex-col space-y-6 items-center lg:items-start ">
              <div className="lg:w-4/6">
                <Title type="h1" size="b1">
                  Estude com a Menina de UX
                </Title>
              </div>
              <Image
                src="/estude/banner.png"
                width={558}
                height={340}
                alt="hero"
                quality={100}
                priority
                className="block  lg:hidden"
              />
              <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2 text-center lg:text-left">
                Aprenda sobre carreira, currículo, design e tecnologia com os
                vários conteúdos gratuitos aqui!
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/estude/banner.png"
              width={558}
              height={340}
              alt="hero"
              quality={100}
              priority
              className="lg:block  hidden"
            />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="lg:container px-5 items-center grid grid-cols-1 lg:grid-flow-col">
          <div className="fle flex-col space-y-6 text-left  lg:max-w-[593px]">
            <Title type="h2" size="b2">
              Criando seu Case
            </Title>
            <div className="lg:hidden flex justify-center">
              <Image
                src="/estude/hero-1.png"
                width={445}
                height={445}
                alt="hero 2"
                quality={100}
                className="w-48 h-48 lg:h-auto lg:w-auto"
              />
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-blue-700 font-avenir text-center lg:text-left font-ultraLight text-md leading-2">
                Com um template no Figma, os posts de guia e os conteúdos que
                você só encontra com a Menina de UX, você vai conseguir se guiar
                para construir o seu case do zero!
              </p>
            </div>

            <div className="w-full flex gap-4  justify-center lg:justify-start">
              <Button.Root>
                <Button.Text>Crie seu primeiro projeto!</Button.Text>
              </Button.Root>
            </div>
          </div>
          <div className="hidden lg:flex justify-center lg:justify-normal">
            <Image
              src="/estude/hero-1.png"
              width={460}
              height={440}
              alt="hero 2"
              quality={100}
            />
          </div>
        </div>
      </section>
      <SectionEstud />
    </main>
  )
}
