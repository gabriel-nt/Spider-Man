import { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import Card from '../Card';
import { Container } from './styles';

interface ICarouseProps {
  data: Array<{
    title?: string;
    description?: string;
    img: string;
    level?: string | number;
    fichas?: string | number;
    tweet?: string;
    user?: string;
    createdAt?: string;
  }>;
  pagination: {
    nextEl: string;
    prevEl: string;
  };
  type: 'costume' | 'concept';
}

const Carousel: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ICarouseProps
> = ({ data, type, pagination }, ref) => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);

  return (
    <Container ref={ref}>
      <Swiper
        navigation={{
          nextEl: pagination.nextEl,
          prevEl: pagination.prevEl,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          450: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Card data={item} type={type} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default forwardRef(Carousel);
