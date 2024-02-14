'use client'
// Components
import { CarouselItems } from '../common/carousel-items'
import { CardCourse } from '../common/card-course'
import { Title } from '../common/title'
// Utilities
import { CourseProps, course } from '@/data/course'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
// Hooks
import { useRef, useState } from 'react'
// Interfaces

export function LargeCourses() {
  const nextButtonRef = useRef(null)
  const prevButtonRef = useRef(null)
  const [filter, setFilter] = useState('all')

  const filteredCourses: CourseProps[] = course.filter((item: CourseProps) => {
    if (filter === 'all') {
      return true
    } else {
      return item.category === 'cursos grandes' && item.type.includes(filter)
    }
  })
  return (
    <section className="py-10 lg:container lg:px-5">
      <Title type="h2" size="b2" className="pb-10">
        Cursos grandes
      </Title>
      <div className="container px-5 w-screen flex gap-x-2 overflow-x-auto">
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
            filter === 'UI/UX Design'
              ? 'border border-blue-700 transition-transform duration-300'
              : ''
          }`}
          onClick={() => setFilter('UI/UX Design')}
        >
          UI/UX Design
        </button>
        <button
          className={`filter-item ${
            filter === 'Desenvolvimento'
              ? 'border border-blue-700 transition-transform duration-300'
              : ''
          }`}
          onClick={() => setFilter('Desenvolvimento')}
        >
          Desenvolvimento
        </button>
        <button
          className={`filter-item ${
            filter === 'Cloud e Data Science'
              ? 'border border-blue-700 transition-transform duration-300'
              : ''
          }`}
          onClick={() => setFilter('Cloud e Data Science')}
        >
          Cloud e Data Science
        </button>
        <button
          className={`filter-item ${
            filter === 'Games'
              ? 'border border-blue-700 transition-transform duration-300'
              : ''
          }`}
          onClick={() => setFilter('Games')}
        >
          Games
        </button>
        <button
          className={`filter-item ${
            filter === 'Marketing'
              ? 'border border-blue-700 transition-transform duration-300'
              : ''
          }`}
          onClick={() => setFilter('Marketing')}
        >
          Marketing
        </button>
        <button
          className={`filter-item ${
            filter === 'Idiomas'
              ? 'border border-blue-700 transition-transform duration-300'
              : ''
          }`}
          onClick={() => setFilter('Idiomas')}
        >
          Idiomas
        </button>
        <button
          className={`filter-item${
            filter === 'Soft-Skills'
              ? 'border border-blue-700 transition-transform duration-300'
              : ''
          }`}
          onClick={() => setFilter('Soft-Skills')}
        >
          Soft-Skills
        </button>
        <button
          className={`filter-item ${
            filter === 'UX Writing'
              ? 'border border-blue-700 transition-transform duration-300'
              : ''
          }`}
          onClick={() => setFilter('UX Writing')}
        >
          UX Writing
        </button>
      </div>
      {filteredCourses ? (
        <div className=" pt-10 lg:container lg:px-5 flex flex-col lg:flex-row lg:gap-8 items-center justify-center">
          <button
            ref={prevButtonRef}
            className="hidden lg:flex absolute left-10 mb-1 bg-blue-700 rounded-full "
          >
            <RiArrowLeftSLine size={30} className="text-white" />
          </button>
          <CarouselItems
            quantityLg={
              filteredCourses.length < 4
                ? filteredCourses.length < 3
                  ? filteredCourses.length < 2
                    ? 1
                    : 2
                  : 3
                : 4
            }
            renderItem={(item) => <CardCourse {...item} />}
            items={filteredCourses}
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
