import type { CarouselProperty } from '~/type';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router';
import { formatLocationName } from '~/utils/formatters';

const LatestProjects = ({ properties }: { properties: CarouselProperty[] }) => {
  return (
    <section
      id='projects'
      className='p-4 mt-40 my-4 max-w-4xl mx-auto relative z-0'
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

      {/* Carousel */}
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-full mx-auto'
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className='-ml-1'>
          {properties.map((property) => (
            <CarouselItem key={property._id} className='pl-1 md:basis-1/2'>
              <Card
                className='p-0 h-[600px] bg-no-repeat bg-cover bg-center border-0'
                style={{ backgroundImage: `url(${property.images.exterior})` }}
              >
                <CardHeader className='pt-7'>
                  <CardDescription className='uppercase font-outfit font-bold text-gray-50'>
                    {formatLocationName(property.location)}
                  </CardDescription>
                  <CardTitle className='text-3xl text-white font-bold font-outfit'>
                    {property.name}
                  </CardTitle>
                </CardHeader>
                <CardFooter className='text-right items-end pb-7  h-full w-full'>
                  <Button
                    asChild
                    className='text-black hover:bg-gray-50 bg-white'
                  >
                    <Link to={`/properties/${property._id}`} className=''>
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default LatestProjects;
