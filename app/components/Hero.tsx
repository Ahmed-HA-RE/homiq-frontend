import { Link } from 'react-router';
import clsx from 'clsx';
import { ShimmeringText } from './ui/shimmering';
import { motion } from 'framer-motion';

type Cta = {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
};

type HeroProps = {
  title: string;
  subtitle: string;
  bgImage: string;
  cta: Cta[];
};

const Hero = ({ title, subtitle, bgImage, cta }: HeroProps) => {
  return (
    <div className='relative z-0'>
      {/* Hero section */}
      <div
        className={`min-h-screen min-w-screen flex items-center justify-center p-4 bg-cover bg-no-repeat bg-center z-40 `}
        style={{
          backgroundImage: `url(${import.meta.env.VITE_BACKEND_URL_STATIC}${bgImage})`,
        }}
      >
        {/* Hero info */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          className='z-10 pt-6  font-outfit'
        >
          <ShimmeringText
            text={title}
            className='text-3xl md:text-6xl xl:text-7xl max-w-3xl md:max-w-5xl font-outfit font-semibold  md:leading-18 pt-20 w-full text-center capitalize'
            color='#fff'
            shimmeringColor='#11111'
          />
          <p className='my-4 md:my-6 text-gray-200 text-base md:text-2xl text-center md:max-w-2xl mx-auto'>
            {subtitle}
          </p>
          {/* Hero Buttons */}
          <div className='flex flex-row max-w-sm items-center space-x-4 justify-center mx-auto text-center mt-3'>
            {cta.map((cta) => (
              <Link
                key={cta.label}
                to={`${cta.href}`}
                className={clsx(
                  'text-white w-1/2 py-3 inline-block  rounded transition-colors duration-200 md:text-lg',
                  cta.variant === 'primary' &&
                    'border border-white  hover:bg-gray-700 hover:border-gray-700',
                  cta.variant === 'secondary' && 'bg-blue-500 hover:bg-blue-600'
                )}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/45 z-0'></div>
    </div>
  );
};

export default Hero;
