import type { Route } from './+types';
import {
  FaFacebookSquare,
  FaMeetup,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { redirect } from 'react-router';
import ContactForm from '~/components/ContactUsForm';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Homiq' },
    {
      name: 'description',
      content:
        'Get in touch with the Homiq team for inquiries, support, or partnership opportunities. We’re here to help you with your real estate journey.',
    },
  ];
}

const ContactPage = () => {
  return (
    <section className='min-h-screen bg-gradient-primary w-full grid grid-cols-1 lg:grid-cols-2 items-center pt-20 lg:pt-0 '>
      {/* left side */}
      <div className='p-6 pb-0 md:py-10  font-outfit space-y-5  lg:flex lg:flex-col justify-center'>
        <h1 className='text-3xl md:text-4xl text-black font-medium'>
          Get in Touch with Homiq
        </h1>
        <p className='text-black max-w-md tracking-wide mb-6'>
          Have questions or need assistance finding your dream home? Our team is
          here to help. Reach out today and let us guide you every step of the
          way.
        </p>
        <span className='text-black'>
          Follow us on social media for the latest property updates
        </span>
        {/* social links */}
        <div className='flex flex-row items-center justify-start space-x-5 mt-6'>
          <a
            className='text-black text-3xl hover:text-cyan-700 transition duration-300'
            href='http://www.instgram.com'
            target='_blank'
          >
            <FaInstagram />
          </a>
          <a
            className='text-black text-3xl hover:text-cyan-700 transition duration-300'
            href='http://www.facebook.com'
            target='_blank'
          >
            <FaFacebookSquare />
          </a>
          <a
            className='text-black text-3xl hover:text-cyan-700 transition duration-300'
            href='http://www.linkedin.com'
            target='_blank'
          >
            <FaLinkedin />
          </a>
          <a
            className='text-black text-3xl hover:text-cyan-700 transition duration-300'
            href='https://www.meetup.com'
            target='_blank'
          >
            <FaMeetup />
          </a>
        </div>
      </div>

      {/* right side */}
      <div className='p-6 py-0 flex flex-col justify-center lg:h-full'>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
