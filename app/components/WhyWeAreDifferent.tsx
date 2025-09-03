const WhyWeAreDifferent = () => {
  return (
    <section className='p-6 mt-12'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='uppercase underline-offset-5 underline decoration-1  font-outfit font-medium text-2xl md:text-3xl text-center  my-10'>
          why we're different
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6'>
          {/* Left-Col */}
          <img
            src={`${import.meta.env.VITE_BACKEND_URL_STATIC}/images/about_us/about_us.jpg`}
            alt='about_us'
            className='w-full object-cover rounded-lg'
          />
          {/* Middle Col */}
          <div className='font-outfit flex flex-col md:flex-row items-center  justify-evenly flex-wrap gap-6 text-center'>
            {/* Active Properties */}
            <div>
              <span className='text-gray-400 text-4xl inline-block'>
                1,200+
              </span>
              <p className='text-gray-700 text-sm'>
                Active Properties Listed Across UAE
              </p>
            </div>

            {/* Verified Listings */}
            <div>
              <span className='text-gray-400 text-4xl'>500+</span>
              <p className='text-gray-700 text-sm'>
                Verified Listings Nationwide
              </p>
            </div>

            {/* Global Reach */}
            <div>
              <span className='text-gray-400 text-4xl'>10+</span>
              <p className='text-gray-700 text-sm'>Clients Across Countries</p>
            </div>
            {/* User rating */}
            <div>
              <span className='text-gray-400 text-4xl'>96%</span>
              <p className='text-gray-700 text-sm'>
                Of users rate their experience 4 stars or higher
              </p>
            </div>
          </div>
          {/* Right Col */}
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreDifferent;
