import type { Route } from './+types';
import z from 'zod';
import Glimpse from '~/components/Glimpse';
import Hero from '~/components/Hero';
import type { CarouselProperty } from '~/type';
import {
  type Testimonial,
  testimonialSchema,
} from '~/schema/testimonialsSchema';
import { getLatestProperties } from '~/api/properties';
import { getTestimonials } from '~/api/getTestimonials';
import Footer from '~/components/ui/Footer';
import TestimonialsCarousel from '~/components/ui/Testimonials';
import LatestProjects from '~/components/LatestProjects';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Homiq' },
    {
      name: 'description',
      content:
        'Discover your dream home with Dream Homes Real Estate. Browse listings, explore properties, and find your perfect home today.',
    },
  ];
}

// Validate project and testimonial objects from backend and ensure correct array structure
const testimonialsSchema = z.array(testimonialSchema);

type LoaderReturn = {
  properties: CarouselProperty[];
  testimonials: Testimonial[];
};

export async function loader({
  request,
}: Route.LoaderArgs): Promise<LoaderReturn> {
  try {
    const [properties, testimonials] = await Promise.all([
      getLatestProperties(),
      getTestimonials(),
    ]);

    const parsedtestimonials = testimonialsSchema.parse(testimonials);

    return { properties, testimonials: parsedtestimonials };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { properties, testimonials } = loaderData;
  return (
    <>
      <header>
        <Hero
          bgImage='https://res.cloudinary.com/ahmed--dev/image/upload/v1758479750/header_img_nhnkfl.jpg'
          title='your perfect home awaits'
          subtitle='Explore our handpicked villas and apartments across the UAE, see what satisfied residents have to say, and discover why our properties and services stand out—whether you’re buying or selling your home.'
        />
      </header>
      <main>
        <Glimpse />
        <LatestProjects properties={properties} />
        <TestimonialsCarousel testimonials={testimonials} />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
