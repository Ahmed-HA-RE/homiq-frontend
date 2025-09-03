import aboutUsLists from '~/utils/aboutUsList';

const UserExperience = () => {
  return (
    <section className='p-4 md:p-6 md:px-8 mt-10 md:mt-30'>
      <div className='max-w-7xl mx-auto bg-user-experience rounded-lg overflow-hidden'>
        <div className='flex flex-col lg:flex-row items-start justify-between space-y-10 md:space-x-12 md:space-y-0 '>
          {/* Left Side */}
          <img
            src={`${import.meta.env.VITE_BACKEND_URL_STATIC}/images/architecture.jpg`}
            alt=''
            className='w-full lg:max-w-md rounded-md object-cover'
          />
          {/* Right Side */}
          <div className='space-y-5 p-6 pt-10'>
            <h2 className='font-outfit text-white text-2xl md:text-3xl max-w-md'>
              Personalizing every step of your property search.
            </h2>
            <p className='text-gray-300 text-sm font-outfit'>
              At Homiq, we believe that finding your dream property should feel
              effortless and tailored to you. Every listing is carefully
              verified to ensure accuracy and quality, saving you time and
              stress. Our team guides you through each step, turning what is
              often a complex process into a smooth, enjoyable experience. From
              residential apartments to commercial spaces, we cater to your
              unique needs and preferences. Discover a property search
              experience that feels personal, engaging, and stress-free.
            </p>
            <p className='text-gray-300 text-sm font-outfit'>
              We at Homiq provide expert guidance, verified listings, and
              personalized support to make every property journey seamless and
              rewarding.
            </p>
            {/* Why We’re Different Content */}
            <div>
              <h2 className='uppercase text-white font-outfit font-light mt-14'>
                why we're different
              </h2>
              <ul className='flex flex-row flex-wrap items-center gap-4 my-5 max-w-sm'>
                {aboutUsLists.map((list) => (
                  <li
                    key={list}
                    className='font-outfit text-white bg-gray-400 p-2 rounded-full text-sm'
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserExperience;
