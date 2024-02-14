// Components
import { Title } from '../title'
import { EmailIcon } from '@/components/icons-custom/email'
// Utilities
import Image from 'next/image'
import { FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'
// Hooks
// Interfaces
interface CardVoluntaryProps {
  nome: string
  cargo: string
  area: string
  src: string
}

export function CardVoluntary({ cargo, area, src, nome }: CardVoluntaryProps) {
  return (
    <div className="group relative h-[26.55956rem] w-60 bg-white rounded-[0.625rem] border-[1px] border-gray-450 flex flex-col  items-center overflow-hidden ">
      <Image
        src={src}
        alt=""
        width={209}
        height={180}
        quality={100}
        className="group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500 w-full "
      />

      <div className="flex flex-1 flex-col text-center self-stretch p-4">
        <Title size="b3">{nome}</Title>
        <p className="text-blue-700 font-avenir font-ultraLight text-sm  ">
          {`${cargo} / ${area}`}
        </p>

        <div className="flex justify-center gap-2 pt-4">
          <div className="bg-blue-700 text-white p-1.5 rounded-full">
            <FaLinkedinIn />
          </div>
          <div className="bg-blue-700 text-white p-1.5 rounded-full">
            <EmailIcon />
          </div>
        </div>
      </div>
      <div className="pb-7">
        <Link
          href="#"
          className="flex justify-center items-center py-2 px-5 border-[1.5px] rounded-[1.6875rem] border-blue-700 w-32 text-blue-700 font-avenir font-medium text-xxs hover:bg-blue-700 hover:text-white transform duration-300 ease-in-ou"
        >
          Saiba mais
        </Link>
      </div>
    </div>
  )
}
