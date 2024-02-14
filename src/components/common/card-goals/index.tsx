// Components
import { Box } from '../box'
import { Title } from '../title'
// Utilities
import Image from 'next/image'
// Hooks
// Interfaces
interface CardGoalsProps {
  src: string
  title: string
  description: string
}

export function CardGoals({ title, description, src }: CardGoalsProps) {
  return (
    <Box>
      <div className="flex flex-col  items-center justify-between space-y-6 text-center lg:text-left ">
        <Image
          src={src}
          alt=""
          width={435}
          height={290}
          quality={100}
          priority
          className="pb-1.5 h-[163px] lg:h-[290px] "
        />

        <Title type="h2" size="b3">
          {title}
        </Title>
        <p className="text-blue-700 font-avenir font-ultraLight text-sm lg:text-md leading-2">
          {description}
        </p>
      </div>
    </Box>
  )
}
