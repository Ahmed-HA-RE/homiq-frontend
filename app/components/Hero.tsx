import { ImagePath } from '~/enums';
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  return (
    <>
      {/* Hero section */}
      <div
        id='header'
        className={`min-h-screen min-w-screen flex items-center justify-center p-4 bg-cover bg-no-repeat bg-center`}
        style={{
          backgroundImage: `url(${import.meta.env.VITE_BACKEND_URL}/images/${ImagePath.HEADER})`,
        }}
      >
        {/* Hero info */}
        <div>
          <h1 className='text-5xl md:text-[82px] max-w-3xl font-outfit font-semibold text-white text-center leading-14 md:leading-24 pt-20'>
            Explore homes that fit your dreams
          </h1>
          {/* Hero Buttons */}
          <div className='flex flex-row items-center justify-center max-w-xs mx-auto text-center mt-12'>
            <HashLink
              className='text-white border border-white flex-1/12 py-3 inline-block mr-4 rounded hover:bg-gray-700 hover:border-gray-700 transition-colors duration-200 md:text-lg'
              to={'#projects'}
            >
              Projects
            </HashLink>
            <HashLink
              className='text-white bg-blue-500 flex-1/12 py-3 inline-block rounded hover:bg-blue-700 transition-colors duration-200 md:text-lg'
              to={'#contact'}
            >
              Contact Us
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
