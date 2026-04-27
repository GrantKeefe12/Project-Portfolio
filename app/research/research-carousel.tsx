"use client"

import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"

interface ResearchCarouselProps {
  images: string[]
}

export function ResearchCarousel({ images }: ResearchCarouselProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <Swiper
        slidesPerView={1}
        loop={images.length > 1}
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: false }}
        observer
        observeParents
        modules={[Autoplay]}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <div className="aspect-[16/7] min-h-[280px] w-full overflow-hidden bg-slate-100">
              <img
                src={image}
                alt={`Search and rescue UAV research image ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
