import CarouselSwiper from './ui/Carousel';
import type { Property } from '~/schema/propertiesSchema';

const CarouselProperties = ({ properties }: { properties: Property[] }) => {
  return (
    <section
      id='projects'
      className='p-4 mt-20 my-4 max-w-4xl mx-auto relative z-0'
    >
      {/*project section - project completed */}
      <div className='text-center mb-8'>
        <h3 className='font-bold inline-block text-2xl md:text-4xl'>
          Latest Projects
        </h3>
        <p className='mt-3 text-gray-600 text-sm md:max-w-3xl mx-auto'>
          Explore our curated portfolio of real estate properties across the
          UAE. Each listing reflects our commitment to quality, modern design,
          and client satisfaction—whether you’re looking to buy or sell.
        </p>
      </div>
      <CarouselSwiper properties={properties} />
    </section>
  );
};

export default CarouselProperties;
