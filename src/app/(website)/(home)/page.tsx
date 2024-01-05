import { Button } from '@/components/common/button'
import { Title } from '@/components/common/title'
import { SectionNews } from '@/components/sections/news'
import { SectionSocialNetworks } from '@/components/sections/social-networks'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <section className="bg-pink-50">
        <div className="lg:pt-44 pt-40 py-10 lg:container px-5 items-end grid grid-cols-1 lg:grid-flow-col lg:gap-x-16">
          <div className=" h-full flex items-end pb-14 ">
            <div className="flex flex-col space-y-6">
              <Title type="h1" size="b1">
                Ajudando meninas como eu
              </Title>
              <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2">
                Encontre os melhores cursos e processos seletivos na área de
                tecnologia e ainda aprenda sobre o mundo do UX Design!
              </p>
              <div className="w-auto lg:w-48">
                <Button.Root>
                  <Button.Text>Descobrir cursos</Button.Text>
                </Button.Root>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/home/banner.png"
              width={486}
              height={386}
              alt="hero"
              quality={100}
              priority
            />
          </div>
        </div>
      </section>
      <section className="">
        <div className="lg:container px-5 py-20 items-center grid grid-cols-1 lg:grid-flow-col">
          <div className="flex justify-center lg:justify-normal">
            <Image
              src="/home/hero-1.png"
              width={523}
              height={445}
              alt="hero 1"
              quality={100}
              priority
            />
          </div>
          <div className="fle flex-col space-y-6 text-left  lg:max-w-[593px]">
            <Title type="h2" size="b2">
              Comece a sua carreira
            </Title>
            <p className="text-blue-700 font-avenir font-ultraLight text-md">
              Encontre os melhores cursos e processos seletivos na área de
              tecnologia e ainda aprenda sobre o mundo do UX Design!
            </p>
            <div className="w-scrren lg:w-72">
              <Button.Root>
                <Button.Text>Estude com a Menina de UX</Button.Text>
              </Button.Root>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="lg:container px-5 items-center grid grid-cols-1 lg:grid-flow-col">
          <div className="fle flex-col space-y-6 text-left  lg:max-w-[593px]">
            <Title type="h2" size="b2">
              Crie seu primeiro projeto em UX Design
            </Title>
            <div className="lg:hidden flex justify-center">
              <Image
                src="/home/hero-2.png"
                width={445}
                height={445}
                alt="hero 2"
                quality={100}
              />
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2">
                Com um template no Figma e os posts de guia, você vai conseguir
                se guiar para construir o seu case do zero!
              </p>
              <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2">
                Clique agora no botão abaixo e faça o download do template no
                Figma!
              </p>
            </div>

            <div className="w-auto flex gap-4 flex-wrap">
              <Button.Root>
                <Button.Text>Crie seu primeiro projeto!</Button.Text>
              </Button.Root>
              <Button.Root variant="outline-pink">
                <Button.Text>Baixar template</Button.Text>
              </Button.Root>
            </div>
          </div>
          <div className="hidden lg:flex justify-center lg:justify-normal">
            <Image
              src="/home/hero-2.png"
              width={445}
              height={445}
              alt="hero 2"
              quality={100}
            />
          </div>
        </div>
      </section>
      <section className="h-auto bg-hero3 bg-top bg-no-repeat ">
        <div className="lg:container px-5 space-y-10 py-20">
          <div className="flex flex-col space-y-6">
            <Title type="h2" size="b2">
              Parceiros da Menina de UX
            </Title>
            <p className="text-blue-700 font-avenir font-ultraLight text-md leading-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
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
          <div className="flex justify-center items-center">
            <div className="w-auto lg:w-72">
              <Button.Root variant="outline-blue">
                <Button.Text>Quero saber mais!</Button.Text>
              </Button.Root>
            </div>
          </div>
        </div>
        <div className="lg:container py-10 lg:py-36 px-5">
          <div className="flex flex-col lg:flex-row gap-5 justify-between">
            <SectionNews />
            <SectionSocialNetworks />
          </div>
        </div>
      </section>
    </main>
  )
}
