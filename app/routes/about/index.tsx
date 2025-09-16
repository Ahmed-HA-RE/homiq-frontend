import type { Route } from './+types';
import { Link } from 'react-router';
import AboutHeader from '~/components/AboutHeader';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import WhyWeAreDifferent from '~/components/WhyWeAreDifferent';
import Principles from '~/components/Principles';
import { getAgents } from '~/api/getAgents';
import type { AgentData } from '~/schema/agentsSchema';
import AgentsSection from '~/components/ui/AgentsCard';
import Footer from '~/components/ui/Footer';

type LoaderReturn = {
  agents: AgentData[];
};

export async function loader({
  request,
}: Route.LoaderArgs): Promise<LoaderReturn> {
  try {
    const agents = await getAgents();
    return { agents };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

const AboutPage = ({ loaderData }: Route.ComponentProps) => {
  const { agents } = loaderData;

  const starOffsets = [-634.728, -447.914, -261.961, -76.024, 109.853];

  return (
    <>
      <AboutHeader />
      <main className='bg-gray-200 '>
        <section>
          {/* Hero Image */}
          <div className='relative z-0'>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL_STATIC}/images/about_us/About_hero.jpg`}
              alt='Hero-image'
              className='w-full md:h-[500px] mx-auto object-cover'
            />
            <h4 className='hidden md:block absolute bottom-4 left-4 text-white text-6xl font-bold font-outfit tracking-wide uppercase'>
              Homiq
            </h4>

            {/* User Experience */}
            <div className='hidden md:flex flex-col items-start space-y-4 bg-white rounded-2xl shadow p-4 px-6 absolute -bottom-2 right-4 z-20 w-58'>
              <h3 className='font-outfit font-medium text-xl'>
                96% of users rate <br /> their experience
              </h3>
              <svg
                viewBox='0 0 881 130'
                className='stroke-linejoin:round;stroke-miterlimit:2 text-blue-500 w-30'
              >
                {starOffsets.map((x, i) => (
                  <g key={i} transform={`matrix(1,0,0,1,${x},-382.568)`}>
                    <path
                      d='M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z'
                      fill='currentColor'
                    />
                  </g>
                ))}
              </svg>
              <p className='text-sm font-outfit'>
                "Finding my dream property was so easy with Homiq. The listings
                were accurate, verified, and the whole process felt smooth and
                trustworthy."
              </p>
            </div>
          </div>
          <div className='p-4 px-6  max-w-9xl  mt-4 md:mt-10'>
            <p className='font-semibold w-full max-w-2xl mb-5 font-outfit'>
              Homiq is a leading real estate company in the UAE, dedicated to
              helping clients buy, sell, and invest in premium residential and
              commercial properties. With a focus on innovation, quality, and
              trust, we deliver tailored solutions that ensure every property
              exceeds expectations and achieves maximum value.
            </p>
            <Link
              className='text-sm bg-blue-500 hover:bg-blue-600 transition duration-200 text-white rounded-full px-4 py-2 font-outfit inline-block'
              to='/contact-us'
            >
              Contact Us
              <FaArrowAltCircleRight className='text-lg inline-block ml-2' />
            </Link>
          </div>
        </section>
        <WhyWeAreDifferent />
        <Principles />

        {/* Our Agnets */}
        <AgentsSection agents={agents} />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
