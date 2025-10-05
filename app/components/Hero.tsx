import { ShimmeringText } from './ui/shimmering';
import { motion } from 'framer-motion';
import { useAuthStore } from '~/store/authstore';

type HeroProps = {
  title: string;
  subtitle: string;
  bgImage: string;
};

const Hero = ({ title, subtitle, bgImage }: HeroProps) => {
  return (
    <div className='relative z-0'>
      {/* Hero section */}
      <div
        className={`min-h-screen min-w-screen flex items-center justify-center p-4 pt-10 bg-cover bg-no-repeat bg-center z-40 `}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Hero info */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          className='z-10 font-outfit'
        >
          <ShimmeringText
            text={title}
            className='text-[32px] sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl md:max-w-5xl font-outfit font-semibold md:leading-18  w-full text-center capitalize'
            color='#fff'
            shimmeringColor='#11111'
          />
          <p className='my-2 text-gray-200 text-base md:text-2xl text-center md:max-w-2xl mx-auto'>
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 w-full bg-black/45 z-0'></div>
    </div>
  );
};

export default Hero;
