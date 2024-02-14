// Components
import Image from 'next/image'
import { Title } from '../title'
import { Button } from '../button'
// Utilities
// Hooks
// Interfaces
interface CardInfoProps {
  src: string
  title: string
  description: string
  active?: boolean
}

export function CardInfo({
  title,
  src,
  description,
  active = true,
}: CardInfoProps) {
  return (
    <div className=" h-[32.188rem] w-60 bg-gray-300 rounded-[0.625rem] border-[1px] border-gray-450 flex flex-col gap-6 items-center  p-4">
      <Image
        src={src}
        alt=""
        width={209}
        height={180}
        quality={100}
        className="hover:scale-105 transition-transform duration-500"
      />

      <div className="flex flex-1 flex-col justify-between items-center align self-stretch">
        <Title size="b3">{title}</Title>
        <p className="text-blue-700 font-avenir font-ultraLight text-sm  ">
          {description.length > 130
            ? description.slice(0, 130) + '...'
            : description}
        </p>
        <Button.Root variant={active ? 'blue' : 'desabled'}>
          <Button.Text>{active ? 'Ver mais' : 'Em Breve'}</Button.Text>
        </Button.Root>
      </div>
    </div>
  )
}
