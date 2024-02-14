// Components
import { Button } from '@/components/common/button'
import { Title } from '@/components/common/title'
import { SectionGoals } from '@/components/sections/goals'
// Utilities
import { Metadata } from 'next'
import Image from 'next/image'
// Interfaces
// Hooks

export const metadata: Metadata = {
  title: 'Sobre',
}

export default function Sobre() {
  return (
    <main className="w-screen min-h-screen">
      <section className="bg-pink-50">
        <div className="lg:pt-40 pt-40  lg:container px-5 items-end grid grid-cols-1 lg:grid-flow-col lg:gap-x-16">
          <div className="h-full flex items-end pb-28  ">
            <div className="flex flex-col text-center lg:text-left  lg:items-start items-center space-y-6">
              <Title type="h1" size="b1">
                Sobre a Menina de UX
              </Title>
              <Image
                src="/sobre/banner.png"
                width={259}
                height={259}
                alt="hero"
                quality={100}
                priority
                className="block  lg:hidden"
              />
              <p className="text-blue-700  font-avenir font-ultraLight text-md leading-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con.
              </p>
              <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2">
                Vou te contar como essa iniciativa surgiu!
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/sobre/banner.png"
              width={398}
              height={390}
              alt="hero"
              quality={100}
              priority
              className="lg:block  hidden"
            />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="lg:container px-5 items-center grid grid-cols-1 lg:grid-flow-col">
          <div className=" hidden lg:flex justify-center lg:justify-normal">
            <Image
              src="/sobre/hero-1.png"
              width={523}
              height={445}
              alt="hero 1"
              quality={100}
              priority
            />
          </div>
          <div className="fle flex-col space-y-6 text-left  lg:max-w-[593px]">
            <Title type="h2" size="b2">
              Tudo começou em 2021...
            </Title>
            <div className=" flex lg:hidden justify-center text-center lg:text-left lg:justify-normal">
              <Image
                src="/sobre/hero-1.png"
                width={523}
                height={445}
                alt="hero 1"
                quality={100}
                priority
              />
            </div>
            <p className="text-blue-700 font-avenir text-center lg:text-left font-ultraLight text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              con. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatu.
            </p>
            <p className="text-blue-700 font-avenir font-ultraLight text-md text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              con. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatu.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 pb-10">
        <div className="lg:container px-5 items-center grid grid-cols-1 lg:grid-flow-col">
          <div className="fle flex-col space-y-6 text-left  lg:max-w-[630px]">
            <Title type="h2" size="b2">
              Só que eu queria mais que isso
            </Title>
            <div className="lg:hidden flex justify-center">
              <Image
                src="/sobre/hero-2.png"
                width={445}
                height={445}
                alt="hero 2"
                quality={100}
              />
            </div>

            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2">
                Com o tempo, fui percebendo que eu sempre gostei de educação e
                queria ser uma influência nessa área, poder ajudar outras
                pessoas com o que eu sabia (e ainda ia aprender).Foquei para que
                a Menina de UX desse dicas e ensinasse coisas legais sobre
                design, carreira.
              </p>
              <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla.
              </p>
            </div>
          </div>
          <div className="hidden lg:flex justify-center lg:justify-normal">
            <Image
              src="/sobre/hero-2.png"
              width={445}
              height={445}
              alt="hero 2"
              quality={100}
            />
          </div>
        </div>
      </section>

      <SectionGoals />
      <section className="py-10">
        <div className="lg:container px-5 items-center grid grid-cols-1 lg:grid-flow-col">
          <div className="hidden lg:flex justify-center lg:justify-normal">
            <Image
              src="/sobre/hero-3.png"
              width={513}
              height={433}
              alt="hero 3"
              quality={100}
            />
          </div>
          <div className="fle flex-col space-y-6 text-left  lg:max-w-[593px]">
            <Title type="h2" size="b2">
              Conheça a Equipe de voluntários da Menina de UX
            </Title>
            <div className="lg:hidden flex justify-center">
              <Image
                src="/sobre/hero-3.png"
                width={445}
                height={445}
                alt="hero 3"
                quality={100}
              />
            </div>

            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con. Duis aute irure dolor in reprehenderit voluptate
                velit esse cillum dolore eu fugiat nulla pariatu
              </p>
            </div>

            <div className="w-auto flex gap-4 flex-wrap justify-center  lg:items-start">
              <Button.Root href="./secao-de-voluntarias">
                <Button.Text>Conheça nossos Voluntários!</Button.Text>
              </Button.Root>
              <Button.Root variant="outline-blue">
                <Button.Text>Vagas da Menina de UX</Button.Text>
              </Button.Root>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-5 py-10 lg:py-20 flex flex-col space-y-10">
        <Title type="h2" size="b2">
          ODS Apoiadas pela Menina de UX
        </Title>
        <div className="flex flex-col lg:flex-row lg:space-x-16 items-center justify-between ">
          <div className="flex flex-wrap justify-center gap-6 order-2 lg:order-1">
            <Image
              src="/sobre/ods-4.png"
              width={185}
              height={185}
              alt="ods-4"
            />
            <Image
              src="/sobre/ods-5.png"
              width={185}
              height={185}
              alt="ods-5"
            />
          </div>
          <div className="order-1 lg:order-2 lg:w-3/5">
            <p className="text-center lg:text-left text-blue-700 font-avenir font-ultraLight text-md  ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              commodi mollitia beatae error sit natus. Officia minus molestias
              nihil facere iure asperiores provident, eius ad, culpa soluta
              debitis repellat quaerat.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
