import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import scooterImg1 from '../../assets/img/main/product-item/scooter-img-1.png';
import scooterImg2 from '../../assets/img/main/product-item/scooter-img-2.png';
import scooterImg3 from '../../assets/img/main/product-item/scooter-img-3.png';
import scooterImg4 from '../../assets/img/main/product-item/scooter-img-5.png';

import { Navigation } from 'swiper';

export const Gallery: React.FC = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      effect={'fade'}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};
