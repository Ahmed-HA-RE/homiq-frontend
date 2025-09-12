import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaMeetup,
} from 'react-icons/fa';
import AddReview from '~/components/AddReview';
const AddReviewPage = () => {
  return (
    <section className='min-h-screen bg-contact-primary w-full grid grid-cols-1 lg:grid-cols-2 items-center bg-gradient-review pt-20 lg:pt-0 '>
      {/* left side */}
      <div className='h-full p-8 md:p-10 lg:px-6 font-outfit space-y-5  lg:flex lg:flex-col justify-center'>
        <h1 className='text-3xl md:text-4xl text-white font-medium'>
          Share Your Experience
        </h1>
        <p className='text-white max-w-md tracking-wide mb-6'>
          Help others find their dream home by sharing your Homiq journey.
        </p>
        <span className='text-white'>
          Follow us on social media for the latest property updates
        </span>
        {/* social links */}
        <div className='flex flex-row items-center justify-start space-x-5 mt-6'>
          <a
            className='text-white text-3xl hover:text-cyan-500 transition duration-300'
            href='http://www.instgram.com'
            target='_blank'
          >
            <FaInstagram />
          </a>
          <a
            className='text-white text-3xl hover:text-cyan-500 transition duration-300'
            href='http://www.facebook.com'
            target='_blank'
          >
            <FaFacebookSquare />
          </a>
          <a
            className='text-white text-3xl hover:text-cyan-500 transition duration-300'
            href='http://www.linkedin.com'
            target='_blank'
          >
            <FaLinkedin />
          </a>
          <a
            className='text-white text-3xl hover:text-cyan-500 transition duration-300'
            href='https://www.meetup.com'
            target='_blank'
          >
            <FaMeetup />
          </a>
        </div>
      </div>

      {/* right side */}
      <div className='p-8 flex flex-col justify-center lg:h-full '>
        <AddReview />
      </div>
    </section>
  );
};

export default AddReviewPage;
