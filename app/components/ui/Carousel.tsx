import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../carousel.css';
import { FaArrowRightLong } from 'react-icons/fa6';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
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
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {projects.map((project, index) => (
          <SwiperSlide className='relative'>
            <img
              src={`${Images_Backend_URL}/images/exterior/${project.images.exterior}.jpg`}
              alt={project.title}
              className={index === 5 ? 'object-center ' : 'object-cover'}
            />
            <div className='absolute ml-2 left-0 bottom-4 z-20 bg-white/80 backdrop-blur-sm shadow-xl font-outfit rounded-lg max-w-xs py-2 px-4 flex flex-col items-start justify-center'>
              <p className='font-bold text-gray-800 text-left'>
                {project.title} |{' '}
                <span className='text-gray-600'>{project.location}</span>
              </p>
              <Link
                className='text-sm bg-blue-500 hover:bg-blue-700 transition duration-200 text-white rounded px-4 py-2 mt-2 inline-block'
                to={`/project/${project._id}`}
              >
                Learn More{' '}
                <FaArrowRightLong className='inline-block text-xs ml-1' />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselSwiper;
