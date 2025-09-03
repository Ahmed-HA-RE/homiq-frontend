const WhyWeAreDifferent = () => {
  return (
    <section className='p-6 mt-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 justify-between '>
          {/* Left-Col */}
          <div className='flex flex-col justify-between'>
            <h2 className='uppercase font-outfit font-light mb-10 md:mb-0'>
              why we're different
            </h2>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL_STATIC}/images/about_us/about_us.jpg`}
              alt='about_us'
              className='w-full h-48 md:h-64 object-cover rounded-lg'
            />
          </div>
          {/* Middle Col */}
          <div className='font-outfit text-center md:text-left space-y-8 self-center'>
            {/* Active Properties */}
            <div className=''>
              <span className='text-gray-400 text-4xl inline-block'>
                1,200+
              </span>
              <p className='text-gray-700 text-sm'>
                Active Properties Listed Across UAE
              </p>
            </div>

            {/* Verified Listings */}
            <div className=''>
              <span className='text-gray-400 text-4xl'>500+</span>
              <p className='text-gray-700 text-sm'>
                Verified Listings Nationwide
              </p>
            </div>

            {/* Global Reach */}
            <div className=''>
              <span className='text-gray-400 text-4xl'>10+</span>
              <p className='text-gray-700 text-sm'>Clients Across Countries</p>
            </div>
            {/* User rating */}
            <div className=''>
              <span className='text-gray-400 text-4xl'>96%</span>
              <p className='text-gray-700 text-sm'>
                Of users rate their experience 4 stars or higher
              </p>
            </div>
          </div>
          {/* Right Col */}
          <div className='hidden lg:block'>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL_STATIC}/images/about_us/about_us_team.jpg`}
              alt=''
              className='w-full max-w-sm h-82 rounded-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreDifferent;
