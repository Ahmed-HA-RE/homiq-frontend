import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import '../../carousel.css';
import Tooltip, {
  type TooltipProps,
  tooltipClasses,
} from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import Fade from '@mui/material/Fade';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import type { Projects } from '~/types';
import { Link } from 'react-router';
const Images_Backend_URL = import.meta.env.VITE_BACKEND_URL_STATIC;

type CourseSwiperProps = {
  projects: Projects[];
};

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#222',
    color: '#fff',
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 'bold',
    border: '1px solid #dadde9',
    borderRadius: '10px',
    padding: '10px 14px',
  },
}));

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
            <HtmlTooltip
              title='Learn More'
              slots={{
                transition: Fade,
              }}
            >
              <Link
                className='inline-block'
                key={project._id}
                to={`/project/${project._id}`}
              >
                <img
                  src={`${Images_Backend_URL}/images/exterior/${project.images.exterior}.jpg`}
                  alt={project.title}
                  className={index === 5 ? 'object-center ' : 'object-cover'}
                />
              </Link>
            </HtmlTooltip>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselSwiper;
