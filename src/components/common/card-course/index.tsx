// Components
import { Title } from '../title'
// Utilities
import Image from 'next/image'
import Link from 'next/link'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
// Hooks
// Interfaces
interface CardCourseProps {
  title: string
  subTitle: string
  src: string
}

export function CardCourse({ subTitle, src, title }: CardCourseProps) {
  return (
    <div className="group relative h-[28.55956rem] w-60 bg-white rounded-[0.625rem] border-[1px] border-gray-450 flex flex-col gap-6 items-center overflow-hidden ">
      <Image
        src={src}
        alt=""
        width={209}
        height={180}
        quality={100}
        className="group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500 w-full "
      />

      <div className="flex flex-1 flex-col justify-between  self-stretch p-4">
        <Title size="b3">{title}</Title>
        <p className="text-blue-700 font-avenir font-ultraLight text-sm  ">
          {subTitle.length > 130 ? subTitle.slice(0, 130) + '...' : subTitle}
        </p>
        <Link
          href="#"
          className="text-sm text-blue-700 font-extraBold font-avenir flex gap-2 items-center"
        >
          Saiba mais
          <LiaLongArrowAltRightSolid size={25} />
        </Link>
      </div>
    </div>
  )
}
