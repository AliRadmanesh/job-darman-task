import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


type CarouselItem = {
  id: number;
  item: ReactNode
}

type CarouselProps = {
  items: CarouselItem[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => (
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    // pagination={{ clickable: true }}
    className="w-full"
  >
    {items.map(({ id, item }) => (
      <SwiperSlide key={id}>{item}</SwiperSlide>
    ))}
  </Swiper>
);
