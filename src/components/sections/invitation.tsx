'use client'
// Components
import { CarouselItems } from '../common/carousel-items'
import { CardInvited } from '../common/card-invited'
import { Title } from '../common/title'
// Utilities
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { invited } from '@/data/invited'
// Hooks
import { useRef } from 'react'
// Interfaces

export function SectionInvited() {
  const nextButtonRef = useRef(null)
  const prevButtonRef = useRef(null)

  return (
    <section className="pb-10 lg:container lg:px-5">
      <div className="container px-5 flex flex-col text-center justify-center space-y-6">
        <Title type="h2" size="b2" className=" flex justify-center">
          Quer fazer parte da equipe?
        </Title>
        <div className="text-blue-700 text-md font-avenir font-ultraLight">
          <p>Quer saber como se tornar um voluntário também?</p>
          <p>
            Confira as vagas abertas e se candidate para aquela que é a sua
            cara! (:
          </p>
        </div>
      </div>

      <div className=" pt-10 lg:container lg:px-5 flex flex-col lg:flex-row lg:gap-8 items-center justify-center">
        <button ref={prevButtonRef} className="hidden  ">
          <RiArrowLeftSLine size={30} className="text-white" />
        </button>
        <CarouselItems
          quantityLg={4}
          renderItem={(item) => <CardInvited {...item} />}
          items={invited}
          nextButtonRef={nextButtonRef}
          prevButtonRef={prevButtonRef}
        />
        <button ref={nextButtonRef} className="hidden ">
          <RiArrowRightSLine size={30} className="text-white" />
        </button>
      </div>
    </section>
  )
}
