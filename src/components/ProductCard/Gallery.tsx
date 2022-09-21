import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export const Gallery: React.FC = () => {
  const SwiperSlides = [
    { image: require('../../assets/img/main/product-item/scooter-img-1.png') },
    { image: require('../../assets/img/main/product-item/scooter-img-2.png') },
    { image: require('../../assets/img/main/product-item/scooter-img-3.png') },
    { image: require('../../assets/img/main/product-item/scooter-img-5.png') }
  ];

  const SwiperSlideTemplate = SwiperSlides.map((slide, key) => {
    return (
      <SwiperSlide key={key}>
        <img
          src={slide.image}
          data-src={slide.image}
          data-srcset={slide.image}
        />
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="product-card-swiper"
    >
      {SwiperSlideTemplate}
    </Swiper>
  );
};
