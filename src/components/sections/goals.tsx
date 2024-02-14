'use client'
// Components
import { Title } from '../common/title'
import { CardGoals } from '../common/card-goals'
import { CarouselItems } from '../common/carousel-items'
// Utilities
import { objetivos } from '@/data/objetivos'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
// Hooks
import { useRef } from 'react'
// Interfaces

export function SectionGoals() {
  const nextButtonRef = useRef(null)
  const prevButtonRef = useRef(null)

  return (
    <section className="h-auto py-10 bg-background-sobre-sm bg-cover lg:bg-container lg:bg-background-sobre  bg-top bg-no-repeat ">
      <div className="flex justify-center pt-16">
        <Title type="h2" size="b2">
          Objetivos da Menina de UX
        </Title>
      </div>
      <div className=" py-10 lg:py-10 ">
        <div className=" lg:container lg:px-5 flex flex-col lg:flex-row lg:gap-8 items-center justify-center">
          <button
            ref={prevButtonRef}
            className="hidden lg:flex absolute left-10 mb-1 bg-blue-700 rounded-full "
          >
            <RiArrowLeftSLine size={30} className="text-white" />
          </button>
          <CarouselItems
            quantityLg={2}
            quantityMd={2}
            renderItem={(item) => <CardGoals {...item} />}
            items={objetivos}
            nextButtonRef={nextButtonRef}
            prevButtonRef={prevButtonRef}
          />
          <button
            ref={nextButtonRef}
            className="hidden lg:flex  absolute right-10 mb-8  bg-blue-700 rounded-full"
          >
            <RiArrowRightSLine size={30} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
