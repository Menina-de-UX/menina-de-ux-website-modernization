// Components
import { Title } from '@/components/common/title'
import { Bootcamps } from '@/components/sections/bootcamps'
import { FreeCourses } from '@/components/sections/free-courses'
import { LargeCourses } from '@/components/sections/large-courses'
// Utilities
import { Metadata } from 'next'
import Image from 'next/image'
// Interfaces
// Hooks

export const metadata: Metadata = {
  title: 'Cursos',
}

export default function Cursos() {
  return (
    <main className="w-screen min-h-screen">
      <section className="bg-pink-50">
        <div className="lg:pt-44 pt-40 py-10 lg:container px-5 items-end grid grid-cols-1 lg:grid-flow-col lg:gap-x-16">
          <div className="h-full flex  justify-center lg:justify-start lg:items-end lg:pb-16 ">
            <div className="flex flex-col space-y-6 items-center lg:items-start ">
              <div className="lg:w-6/6">
                <Title type="h1" size="b1">
                  Cursinhos, cursos grandes e bootcamps
                </Title>
              </div>
              <Image
                src="/cursos/banner.png"
                width={558}
                height={340}
                alt="hero"
                quality={100}
                priority
                className="block  lg:hidden"
              />
              <div>
                <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2 text-center lg:text-left">
                  As melhores e maiores certificações pra quem quer entrar na
                  área tech (e outras áreas, hein) e se destacar!
                </p>
                <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2 text-center lg:text-left">
                  Você pode filtrar os cursos por uma área específica, mas tem
                  sites que têm todos os tipos de cursos!
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/cursos/banner.png"
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

      <div className="pt-10" />
      <FreeCourses />

      <LargeCourses />

      <Bootcamps />
    </main>
  )
}
