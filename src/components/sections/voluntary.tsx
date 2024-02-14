'use client'
// Components
import { CarouselItems } from '../common/carousel-items'
import { CardVoluntary } from '../common/card-voluntary'
// Utilities
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { VoluntarioProps, volutario } from '@/data/voluntarios'
// Hooks
import { useRef, useState } from 'react'
// Interfaces

export function Voluntary() {
  const nextButtonRef = useRef(null)
  const prevButtonRef = useRef(null)
  const [filter, setFilter] = useState('all')

  const filteredVoluntary: VoluntarioProps[] = volutario.filter(
    (item: VoluntarioProps) => {
      if (filter === 'all') {
        return true
      } else {
        return item.areas.includes(filter)
      }
    },
  )
  return (
    <section className="py-20 lg:container md:px-5 max-w-screen">
      <div className=" container px-5 w-full flex gap-x-2 items-center overflow-x-auto">
        <button
          className={`filter-item ${
            filter === 'all'
              ? 'border border-blue-700 transition-transform duration-300'
              : ''
          }`}
          onClick={() => setFilter('all')}
        >
          Todos
        </button>
        <button
          className={`filter-item ${
            filter === 'gestao'
              ? 'border border-blue-700 transition-transform duration-300'
              : ''
          }`}
          onClick={() => setFilter('gestao')}
        >
          Gestão
        </button>
        <button
          className={`filter-item ${
            filter === 'design'
              ? 'border border-blue-700 transition-transform duration-300'
              : ''
          }`}
          onClick={() => setFilter('design')}
        >
          Design
        </button>
        <button
          className={`filter-item ${
            filter === 'detetives'
              ? 'border border-blue-700 transition-transform duration-300'
              : ''
          }`}
          onClick={() => setFilter('detetives')}
        >
          Detetives
        </button>
        <button
          className={`filter-item ${
            filter === 'rede sociais'
              ? 'border border-blue-700 transition-transform duration-300'
              : ''
          }`}
          onClick={() => setFilter('rede sociais')}
        >
          Redes Sociais
        </button>
        <button
          className={`filter-item ${
            filter === 'desenvolvimento'
              ? 'border border-blue-700 transition-transform duration-300'
              : ''
          }`}
          onClick={() => setFilter('desenvolvimento')}
        >
          Desenvolvimento
        </button>
      </div>
      {filteredVoluntary ? (
        <div className=" pt-10 lg:container lg:px-5 flex flex-col lg:flex-row lg:gap-8 items-center justify-center">
          <button
            ref={prevButtonRef}
            className="hidden lg:flex absolute left-10 mb-1 bg-blue-700 rounded-full "
          >
            <RiArrowLeftSLine size={30} className="text-white" />
          </button>
          <CarouselItems
            quantityLg={
              filteredVoluntary.length < 4
                ? filteredVoluntary.length < 3
                  ? filteredVoluntary.length < 2
                    ? 1
                    : 2
                  : 3
                : 4
            }
            renderItem={(item) => <CardVoluntary {...item} />}
            items={filteredVoluntary}
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
      ) : (
        <p className="">nao encontramos nem um curso nessa categoria</p>
      )}
    </section>
  )
}
