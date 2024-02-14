'use client'
// Components
// Utilities
import { Swiper, SwiperSlide } from 'swiper/react'
import { Skeleton, useMediaQuery } from '@chakra-ui/react'
// Hooks
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
// Interfaces
import React, { Suspense, useEffect, useRef, useState } from 'react'

interface ICarouselProps<T> {
  renderItem: (item: T) => React.ReactNode
  items: T[]
  nextButtonRef: React.RefObject<HTMLButtonElement>
  prevButtonRef: React.RefObject<HTMLButtonElement>
  pagination?: boolean
  quantityLg?: number
  quantityMd?: number
}

export function CarouselItems<T>({
  renderItem,
  items,
  nextButtonRef,
  prevButtonRef,
  pagination = true,
  quantityLg = 4,
  quantityMd = 2,
}: ICarouselProps<T>) {
  const [isClient, setIsClient] = useState(false)
  const swiperRef: any = useRef(null)
  const [lg] = useMediaQuery('(max-width: 1024px)')
  const [sm] = useMediaQuery('(max-width: 425px)')

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.pause()
    }
  }

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start()
    }
  }
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div
      className="flex justify-center w-dvw  container items-center "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Suspense fallback={<Skeleton height="300px" width="100%" />}>
        {isClient && (
          <Swiper
            autoplay={{
              delay: lg ? 3500 : 3000,
            }}
            pagination={{
              clickable: pagination,
            }}
            effect={'fade'}
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={lg ? (sm ? 1 : quantityMd) : quantityLg}
            slidesPerGroup={1}
            loop={true}
            ref={swiperRef}
            navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current,
            }}
            className="flex lg:gap-2 mySwiper"
          >
            {items.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center px-10 items-center lg:px-5 pb-16 w-full lg:w-auto "
              >
                <div className="flex  justify-center">{renderItem(item)}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Suspense>
    </div>
  )
}
