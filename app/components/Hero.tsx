import { Link } from 'react-router';

type HeroProps = {
  image: string;
  heading: string;
  ctaProjects?: { label: string; route: string };
  description?: string;
};

const Hero = ({ image, ctaProjects, description, heading }: HeroProps) => {
  return (
    <div className='relative'>
      {/* Hero section */}
      <div
        className={`min-h-screen min-w-screen flex items-center justify-center p-4 bg-cover bg-no-repeat bg-center z-40 `}
        style={{
          backgroundImage: `url(${import.meta.env.VITE_BACKEND_URL_STATIC}/images/${image})`,
        }}
      >
        {/* Hero info */}
        <div className='z-20'>
          <h1 className='text-5xl md:text-[82px] max-w-3xl font-outfit font-semibold text-white text-center leading-14 md:leading-24 pt-20'>
            {heading}
          </h1>
          <p>{description}</p>
          {/* Hero Buttons */}
          <div className='flex flex-row max-w-sm items-center justify-center mx-auto text-center mt-12'>
            <Link
              className='text-white border border-white w-1/2 py-3 inline-block mr-4 rounded hover:bg-gray-700 hover:border-gray-700 transition-colors duration-200 md:text-lg'
              to={ctaProjects?.route as string}
            >
              {ctaProjects?.label}
            </Link>
            <Link
              className='text-white bg-blue-500 w-1/2 py-3 inline-block rounded hover:bg-blue-700 transition-colors duration-200 md:text-lg'
              to={'/contact'}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/45 z-0'></div>
    </div>
  );
};

export default Hero;
