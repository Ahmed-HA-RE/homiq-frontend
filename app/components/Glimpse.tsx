import { Link } from 'react-router';
const Glimpse = () => {
  return (
    <section>
      <div
        id='about'
        className='mt-16 px-10 md:px-4 max-w-5xl mx-auto font-outfit'
      >
        {/*About section - shows brand intro and vision statement */}
        <div className='text-center mb-10'>
          <h3 className='font-bold inline-block text-2xl md:text-4xl'>
            Glimpse{' '}
          </h3>
          <span className='inline-block underline-offset-4 decoration-1 underline ml-1.5 text-2xl  md:text-4xl font-light'>
            of Us
          </span>
          <p className='mt-3 text-gray-600 md:max-w-lg mx-auto'>
            With deep expertise in UAE real estate and a focus on your unique
            needs, we help you find or sell properties that truly feel like
            home—while ensuring exceptional service every step of the way
          </p>
        </div>

        {/* About */}
        <div className='flex flex-col md:flex-row items-center md:items-start justify-center space-y-10 md:space-y-0 md:space-x-16'>
          {/* About Image */}
          <div className=''>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL_STATIC}/images/brand_img.png`}
              alt='about our brand'
              className='w-full max-w-sm md:max-w-[600px] object-cover'
            />
          </div>
          {/* About section: Info  */}
          <div className='flex flex-col space-y-10 md:pt-16'>
            {/* About Stats */}
            <div className='grid grid-cols-2 items-center justify-center gap-10 gap-x-20'>
              {/* Excellence */}
              <div>
                <span className='about-stats-numbers'>10+</span>
                <p className='about-stats w-full'>Years of Excellence</p>
              </div>
              {/* Projects */}
              <div>
                <span className='about-stats-numbers'>12+</span>
                <p className='about-stats'>Projects Completed</p>
              </div>
              {/*  Delivered */}
              <div>
                <span className='about-stats-numbers'>20+</span>
                <p className='about-stats w-full'>Mn. Sq. Ft. Delivered</p>
              </div>
              {/* Ongoing Projects */}
              <div>
                <span className='about-stats-numbers'>30+</span>
                <p className='about-stats'>Ongoing Projects</p>
              </div>
            </div>
            {/* About description */}
            <p className='text-gray-600 max-w-lg'>
              We provide premium real estate solutions across the UAE, offering
              modern, comfortable, and high-value properties. Whether it’s a
              luxury apartment in Dubai, a family villa in Abu Dhabi, or selling
              your own property, our mission is to connect you with
              opportunities that match your vision—backed by trust and
              exceptional service.
            </p>
            <Link
              to={'/about'}
              className='secondary-btn text-center px-3 !py-2'
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glimpse;
