import { IoIosCheckmarkCircle } from 'react-icons/io';

const AboutHeader = () => {
  return (
    <header className='pt-35 md:pt-40 p-6 bg-gray-200'>
      <div className='max-w-8xl mx-auto'>
        <div className='flex flex-col md:flex-row items-start justify-between space-y-2 md:space-y-0 md:border-b md:border-b-gray-300 pb-4'>
          <div className='flex-1'>
            <h1 className='font-medium text-4xl md:text-5xl font-outfit'>
              Our Story
            </h1>
            <h2 className='text-2xl md:text-3xl font-outfit pl-0.5 opacity-50 mt-1 tracking-wider uppercase '>
              Projects.
            </h2>
          </div>
          <p className='text-gray-600 font-outfit flex-1 text-sm pt-0 md:pt-1 max-w-md'>
            Homiq is a leading real estate company in the UAE, dedicated to
            delivering premium residential and commercial properties. Our team
            of experts combines innovation and quality to create spaces that
            exceed client expectations.
          </p>
        </div>

        {/* Stats */}
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 space-x-4  md:space-y-0 mt-4 md:mt-10 font-outfit'>
          {/* Active Properties */}
          <div className='flex items-center space-x-2'>
            <IoIosCheckmarkCircle className='text-green-600 text-xl' />
            <p className='text-lg uppercase'>1,200+ Active Properties Listed</p>
          </div>

          {/* Verified Listings */}
          <div className='flex flex-row items-center space-x-2'>
            <IoIosCheckmarkCircle className='text-green-600 text-xl' />
            <p className='text-lg uppercase'>
              500+ Verified Listings Nationwide
            </p>
          </div>

          {/* Global Reach */}
          <div className='flex items-center space-x-2'>
            <IoIosCheckmarkCircle className='text-green-600 text-xl' />
            <p className='text-lg uppercase'>Clients Across 10+ Countries</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
