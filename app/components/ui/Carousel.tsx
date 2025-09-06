import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import '../../carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import type { Projects } from '~/types';
import { Link } from 'react-router';
const Images_Backend_URL = import.meta.env.VITE_BACKEND_URL_STATIC;

type CourseSwiperProps = {
  projects: Projects[];
};

const CarouselSwiper = ({ projects }: CourseSwiperProps) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3400,
          disableOnInteraction: false,
        }}
        effect='fade'
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className='mySwiper'
      >
        {projects.map((project, index) => (
          <SwiperSlide>
            <img
              src={`${Images_Backend_URL}/images/exterior/${project.images.exterior}.jpg`}
              alt={project.title}
              className={index === 5 ? 'object-center ' : 'object-cover'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselSwiper;
