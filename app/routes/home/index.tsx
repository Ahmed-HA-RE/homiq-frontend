import type { Route } from './+types';
import z from 'zod';
import Glimpse from '~/components/Glimpse';
import CarouselProjects from '~/components/CarouselProjects';
import Hero from '~/components/Hero';
import { type Project, projectSchema } from '~/schema/projectsSchema';
import {
  type Testimonial,
  testimonialSchema,
} from '~/schema/testimonialsSchema';
import { getLatestProjects } from '~/api/getProjects';
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
const projectsSchema = z.array(projectSchema);
const testimonialsSchema = z.array(testimonialSchema);

type LoaderReturn = {
  projects: Project[];
  testimonials: Testimonial[];
};

export async function loader({
  request,
}: Route.LoaderArgs): Promise<LoaderReturn> {
  try {
    const [projects, testimonials] = await Promise.all([
      getLatestProjects(),
      getTestimonials(),
    ]);

    const parsedProjects = projectsSchema.parse(projects);
    const parsedtestimonials = testimonialsSchema.parse(testimonials);

    return { projects: parsedProjects, testimonials: parsedtestimonials };
  } catch (error: any) {
    throw new Error('Something went Wrong');
  }
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, testimonials } = loaderData;
  return (
    <>
      <header>
        <Hero
          bgImage='/images/header_img.png'
          title='your perfect home awaits'
          subtitle='Discover our curated selection of villas and apartments, hear from
            happy residents, and explore what makes our homes truly special.'
          cta={[
            { label: 'Projects', href: '/projects', variant: 'primary' },
            { label: 'Contact Us', href: '/contact-us', variant: 'secondary' },
          ]}
        />
      </header>
      <main>
        <Glimpse />
        <CarouselProjects projects={projects} />
        <TestimonialsCarousel testimonials={testimonials} />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
