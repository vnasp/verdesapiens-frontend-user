'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
       <div className="px-14">
       <h4>Borra de Café</h4>
        <p>
          La borra son los residuos húmedos y granulados que quedan después de preparar café de máquina. Este subproducto es un material orgánico rico en compuestos como el nitrógeno, que es beneficioso para el suelo y las plantas, y el fósforo y potasio. La textura de la borra de café también mejora la aireación y la retención de humedad en el suelo, lo que contribuye a un entorno de crecimiento más saludable para las plantas.
        </p>
        <p>Para usar la borra del café, simplemente esparce una capa fina alrededor de tus plantas y mézclala ligeramente con la tierra, o incorpórala a tu compost para potenciar su descomposición. Usada con moderación, también puede ayudar a repeler ciertas plagas. Recuerda usarla con cautela para evitar la acidificación excesiva del suelo.
        </p>
       </div>


      </SwiperSlide>
      <SwiperSlide>
      <div className="px-14">
        <h4>Cáscaras de Huevos</h4>
        <p>
          Las cáscaras de huevo trituradas son un excelente complemento para el huerto, ya que aportan calcio al suelo, un nutriente crucial para el desarrollo saludable de las plantas. Para utilizarlas, simplemente sécalas, tritúralas fino y esparce el polvo alrededor de tus plantas o incorpóralo al suelo. Este método no solo mejora la nutrición del suelo, sino que también puede ayudar a prevenir plagas como caracoles y babosas.</p>
          </div>
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  )
}
