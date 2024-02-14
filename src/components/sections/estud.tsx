'use client'
// Components
import { CarouselItems } from '../common/carousel-items'
import { CardInfo } from '../common/card-info'
// Utilities
import { estud } from '@/data/estude'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
// Hooks
import { useRef } from 'react'
// Interfaces

export function SectionEstud() {
  const nextButtonRef = useRef(null)
  const prevButtonRef = useRef(null)
  return (
    <section className="h-auto pb-20   ">
      <div className=" flex  lg:gap-20 items-center pt-16 justify-center">
        <button ref={prevButtonRef} className="hidden ">
          <RiArrowLeftSLine size={30} className="text-red-700" />
        </button>
        <CarouselItems
          renderItem={(item) => <CardInfo {...item} />}
          items={estud}
          nextButtonRef={nextButtonRef}
          prevButtonRef={prevButtonRef}
          pagination={false}
        />
        <button ref={nextButtonRef} className="hidden">
          <RiArrowRightSLine size={30} className="text-red-700" />
        </button>
      </div>
    </section>
  )
}
