import { Title } from '@/components/common/title'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Parcerias',
}

export default function Parcerias() {
  return (
    <main className="w-screen min-h-screen">
      <section className="bg-pink-50">
        <div className="pt-40 py-10 lg:py-9 lg:container px-5 items-end grid grid-cols-1 lg:grid-flow-col lg:gap-x-16">
          <div className="h-full flex items-end pb-20 ">
            <div className="flex flex-col space-y-6 max-w-[620px]">
              <Title type="h1" size="b1">
                Parcerias da Menina de UX
              </Title>
              <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/parcerias/Parcerias.png"
              width={510}
              height={406}
              alt="hero"
              quality={100}
              priority
            />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="lg:container px-5">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col items-center">
              <Image
                src="/parcerias/how.png"
                width={150}
                height={150}
                alt="logo da How Bootcamps"
                quality={100}
              />
              <span className="text-blue-700 font-ncs font-light text-lg">
                How Bootcamps
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/parcerias/start.png"
                width={150}
                height={150}
                alt="logo da TheStarter"
                quality={100}
              />
              <span className="text-blue-700 font-ncs font-light text-lg">
                TheStarter
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/parcerias/cubos.png"
                width={150}
                height={150}
                alt="logo da Cubos Academy"
                quality={100}
              />
              <span className="text-blue-700 font-ncs font-light text-lg">
                Cubos Academy
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/parcerias/coder.png"
                width={150}
                height={150}
                alt="logo da Coderhouse"
                quality={100}
              />
              <span className="text-blue-700 font-ncs font-light text-lg">
                Coderhouse
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
