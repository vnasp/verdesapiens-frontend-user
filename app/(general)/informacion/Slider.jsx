'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import sliderData from '../../../data/sliderData';


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
      {sliderData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="px-24">
            <h3>{slide.title}</h3>
            <p className="py-4 text-justify">{slide.content}</p>
            <p className="py-4 text-justify  bg-yellow-200 box__shadow-md p-4 border-0 rounded-3xl">{slide.content2}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
