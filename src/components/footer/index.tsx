import { Logo } from './logo'
import { FaLinkedin } from 'react-icons/fa6'
import { BsInstagram } from 'react-icons/bs'
import { LinkFooter } from './link'
import { ButtonFooter } from './button'
import { Icon } from './icone'

export function Footer() {
  return (
    <div className="w-full h-auto lg:h-[520px] bg-pink-100 pb-12 pt-[4.5rem]">
      <div className="container px-5  h-full flex flex-col  space-y-20">
        <div className="w-auto">
          <Logo />
        </div>
        <div className="flex-col space-y-10 lg:space-y-0 lg:flex lg:flex-row justify-between">
          <div>
            <h3 className="font-avenir text-lg font-extraBold text-blue-700">
              Projetos
            </h3>
            <ul className="mt-4 space-y-2">
              <LinkFooter href="#" text="Crie seu case" />
            </ul>
          </div>
          <div>
            <h3 className="font-avenir text-lg font-extraBold text-blue-700">
              Sobre a menina de UX
            </h3>
            <ul className="mt-4 space-y-2 w-auto">
              <LinkFooter href="#" text="Conheça a iniciativa" />
              <LinkFooter href="#" text="Quem criou" />
            </ul>
          </div>
          <div>
            <h3 className="font-avenir text-lg font-extraBold text-blue-700">
              Redes sociais
            </h3>
            <ul className="mt-4 space-y-2">
              <LinkFooter href="#" text="Instagram" />
              <LinkFooter href="#" text="LinkedIn" />
              <LinkFooter href="#" text="Telegram" />
            </ul>
          </div>
          <div>
            <h3 className="font-avenir text-lg font-extraBold text-blue-700">
              Suporte
            </h3>
            <ul className="mt-4 space-y-2">
              <LinkFooter href="#" text="FAQ" />

              <LinkFooter href="#" text="Contato" />
            </ul>
          </div>
          <div>
            <ButtonFooter />
            <div className=" flex mt-4 gap-4 lg:justify-end">
              <Icon href="#" icon={FaLinkedin} />
              <Icon href="#" icon={BsInstagram} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center before:content-[''] before:h-[1px] before:w-full before:bg-pink-200  ">
          <h1 className="font-avenir text-xl font-bold text-blue-700 mt-7">
            Feito por Menina de UX
          </h1>
          <span className="font-avenir font-ultraLight text-sm text-blue-700">
            Ilustrações por Storyset
          </span>
        </div>
      </div>
    </div>
  )
}
