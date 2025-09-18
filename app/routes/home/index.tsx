import type { Route } from './+types';
import z from 'zod';
import Glimpse from '~/components/Glimpse';
import CarouselProperties from '~/components/CarouselProperties';
import Hero from '~/components/Hero';
import { type Property, propertySchema } from '~/schema/propertiesSchema';
import {
  type Testimonial,
  testimonialSchema,
} from '~/schema/testimonialsSchema';
import { getLatestProperties } from '~/api/properties';
import { getTestimonials } from '~/api/getTestimonials';
import Footer from '~/components/ui/Footer';
import TestimonialsCarousel from '~/components/ui/Testimonials';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Homiq | Welcome' },
    {
      name: 'description',
      content:
        'Discover your dream home with Dream Homes Real Estate. Browse listings, explore properties, and find your perfect home today.',
    },
  ];
}

// Validate project and testimonial objects from backend and ensure correct array structure
const propertiesSchema = z.array(propertySchema);
const testimonialsSchema = z.array(testimonialSchema);

type LoaderReturn = {
  properties: Property[];
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

    const parsedProperties = propertiesSchema.parse(properties);
    const parsedtestimonials = testimonialsSchema.parse(testimonials);

    return { properties: parsedProperties, testimonials: parsedtestimonials };
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { properties, testimonials } = loaderData;
  return (
    <>
      <header>
        <Hero
          bgImage='/images/header_img.png'
          title='your perfect home awaits'
          subtitle='Explore our handpicked villas and apartments across the UAE, see what satisfied residents have to say, and discover why our properties and services stand out—whether you’re buying or selling your home.'
          cta={[
            { label: 'Projects', href: '/properties', variant: 'primary' },
            { label: 'Contact Us', href: '/contact-us', variant: 'secondary' },
          ]}
        />
      </header>
      <main>
        <Glimpse />
        <CarouselProperties properties={properties} />
        <TestimonialsCarousel testimonials={testimonials} />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
