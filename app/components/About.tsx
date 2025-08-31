import { Link } from 'react-router';
import { ImagePath } from '~/enums';

const About = () => {
  return (
    <section>
      <div
        id='about'
        className='mt-16 px-10 md:px-4 max-w-5xl mx-auto font-outfit'
      >
        {/*About section - shows brand intro and vision statement */}
        <div className='text-center mb-10'>
          <h3 className='font-bold inline-block text-2xl md:text-4xl'>About</h3>
          <span className='inline-block underline-offset-4 decoration-1 underline ml-1.5 text-2xl  md:text-4xl font-light'>
            Our Brand
          </span>
          <p className='mt-3 text-gray-600 md:max-w-lg mx-auto'>
            We combine expertise in real estate with a commitment to
            understanding your unique needs. Our mission is to guide you toward
            properties that feel like home while delivering unmatched service
            every step of the way.
          </p>
        </div>

        {/* About */}
        <div className='flex flex-col md:flex-row items-center md:items-start justify-center space-y-10 md:space-y-0 md:space-x-16'>
          {/* About Image */}
          <div className=''>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL_STATIC}/images/${ImagePath.BRAND}`}
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
              We specialize in delivering premium real estate solutions across
              the UAE, offering properties that reflect modern design, comfort,
              and long-term value. From luxurious apartments in Dubai to family
              villas in Abu Dhabi, our mission is to connect you with homes and
              investments that match your vision while maintaining the highest
              standards of service and trust.
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

export default About;
