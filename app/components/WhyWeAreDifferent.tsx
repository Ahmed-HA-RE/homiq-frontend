import { BiSolidCoinStack } from 'react-icons/bi';
import { MdVerifiedUser } from 'react-icons/md';
import { MdLibraryBooks } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

const WhyWeAreDifferent = () => {
  return (
    <section className='p-6 my-20'>
      <div className='max-w-7xl mx-auto'>
        {/* title */}
        <div className='text-center font-outfit capitalize mb-8'>
          <h3 className='font-bold inline-block text-2xl md:text-3xl'>Why</h3>
          <span className='inline-block underline-offset-4 decoration-1 underline ml-1.5 text-2xl  md:text-3xl font-light'>
            we're different
          </span>
        </div>

        {/* Card */}
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center space-y-10 lg:space-y-0 lg:space-x-20 bg-gray-50 shadow rounded-4xl px-6 py-6 md:py-25'>
          {/* Left side */}
          <div className='space-y-5'>
            <h2 className='font-medium text-gray-900 font-outfit text-center lg:text-left text-2xl tracking-wide md:text-3xl max-w-lg'>
              Excellence in Real Estate, Backed by Experience
            </h2>
            <p className='max-w-lg font-outfit text-gray-500 text-center lg:text-left'>
              At Homiq, we are passionate about making property ownership simple
              and transparent. Our dedicated local agents guide you every step
              of the way, ensuring a seamless experience from search to closing.
            </p>
          </div>
          {/* Right Side */}
          <ul className='grid grid-cols-1 sm:grid-cols-2 items-center justify-items-start  gap-x-10 gap-y-8'>
            {/* Transparent Pricing */}
            <li>
              <div className='flex flex-row items-center justify-center space-x-3'>
                {/* Icon */}
                <span className='bg-green-100 rounded-full p-2 text-xl text-green-600'>
                  <BiSolidCoinStack />
                </span>
                {/* Number + label */}
                <div>
                  <h3 className='text-4xl md:text-5xl text-gray-600 font-semibold text-center sm:text-left'>
                    100%
                  </h3>
                  <p className='text-gray-900 font-outfit text-center text-sm md:text-base '>
                    Transparent Pricing
                  </p>
                </div>
              </div>
            </li>
            {/* Hidden Fees */}
            <li>
              <div className='flex flex-row items-center space-x-4'>
                {/* Icon */}
                <span className=' bg-red-100 rounded-full p-2 text-xl text-red-600'>
                  <MdVerifiedUser />
                </span>
                {/* Number + label */}
                <div>
                  <h3 className='text-4xl md:text-5xl text-gray-600 font-semibold text-center'>
                    0
                  </h3>
                  <p className='text-gray-900 font-outfit text-center text-sm md:text-base '>
                    No Hidden Fees
                  </p>
                </div>
              </div>
            </li>
            {/* Instant Booking */}
            <li>
              <div className='flex flex-row items-center space-x-4'>
                {/* Icon */}
                <span className=' bg-blue-100 rounded-full p-2 text-xl text-blue-600'>
                  <MdLibraryBooks />
                </span>
                {/* Number + label */}
                <div>
                  <h3 className='text-4xl md:text-5xl  text-gray-600 font-semibold text-center'>
                    200+
                  </h3>
                  <p className='text-gray-900 font-outfit text-center text-sm md:text-base '>
                    Instant Booking
                  </p>
                </div>
              </div>
            </li>
            {/* Local Agents */}
            <li>
              <div className='flex flex-row items-center space-x-4'>
                {/* Icon */}
                <span className='bg-purple-100 rounded-full p-2 text-xl text-purple-600'>
                  <FaUsers />
                </span>
                {/* Number + label */}
                <div>
                  <h3 className='text-4xl md:text-5xl text-gray-600 font-semibold text-center'>
                    50+
                  </h3>
                  <p className='text-gray-900 font-outfit text-center text-sm md:text-base '>
                    Local Agents
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreDifferent;
