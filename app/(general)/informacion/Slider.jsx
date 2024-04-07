'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import dataSlider from '../../../data/dataSlider';
import Image from "next/image";



export const Slider = () => {
  return (
    <Swiper
      modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      keyboard={{ enabled: true }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {dataSlider.map((slide, index) => (
        <SwiperSlide key={index} className="px-24 py-10">
            <h3>{slide.title}</h3>
            <section className="flex flex-col justify-center items-center gap-4">
            <p className="text-justify">{slide.content}</p>
            <Image
                  src={`/icons/${slide.icon}.webp`}
                  width={225}
                  height={150}
                  alt={slide.title}
                />
           
            <p className="py-4 text-justify bg-yellow-200 box__shadow-md p-4 border-0 rounded-2xl">{slide.content2}</p>
            </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
