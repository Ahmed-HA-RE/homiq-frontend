import { Link } from 'react-router';
const Hero = () => {
  return (
    <div className='relative'>
      {/* Hero section */}
      <div
        className={`min-h-screen min-w-screen flex items-center justify-center p-4 bg-cover bg-no-repeat bg-center z-40 `}
        style={{
          backgroundImage: `url(${import.meta.env.VITE_BACKEND_URL_STATIC}/images/header_img.png)`,
        }}
      >
        {/* Hero info */}
        <div className='z-20 pt-6'>
          <h1 className='text-5xl md:text-7xl max-w-3xl font-outfit font-semibold text-gray-100 text-center leading-14 md:leading-18 pt-20'>
            Explore homes that fit your dreams
          </h1>
          <p className='my-6 mb-8 text-gray-200 text-lg md:text-2xl text-center md:max-w-xl mx-auto'>
            Discover our curated selection of villas and apartments, hear from
            happy residents, and explore what makes our homes truly special.
          </p>
          {/* Hero Buttons */}
          <div className='flex flex-row max-w-sm items-center justify-center mx-auto text-center mt-3'>
            <Link
              className='text-white border border-white w-1/2 py-3 inline-block mr-4 rounded hover:bg-gray-700 hover:border-gray-700 transition-colors duration-200 md:text-lg'
              to={'/projects'}
            >
              Projects
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
