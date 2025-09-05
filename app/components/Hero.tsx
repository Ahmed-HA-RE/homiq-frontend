import { Link } from 'react-router';
import clsx from 'clsx';

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
        <div className='z-10 pt-6'>
          <h1 className='text-5xl md:text-7xl max-w-3xl font-outfit font-semibold text-gray-100 text-center leading-14 md:leading-18 pt-20'>
            {title}
          </h1>
          <p className='my-6 mb-8 text-gray-200 text-lg md:text-2xl text-center md:max-w-xl mx-auto'>
            {subtitle}
          </p>
          {/* Hero Buttons */}
          <div className='flex flex-row max-w-sm items-center justify-center mx-auto text-center mt-3'>
            {cta.map((cta) => (
              <Link
                key={cta.label}
                to={`${cta.href}`}
                className={clsx(
                  'text-white w-1/2 py-3 inline-block mr-4 rounded transition-colors duration-200 md:text-lg',
                  cta.variant === 'primary' &&
                    'border border-white  hover:bg-gray-700 hover:border-gray-700',
                  cta.variant === 'secondary' && 'bg-blue-500 hover:bg-blue-600'
                )}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/45 z-0'></div>
    </div>
  );
};

export default Hero;
