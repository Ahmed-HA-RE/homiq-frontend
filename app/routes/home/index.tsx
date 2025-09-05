import type { Route } from '../../+types/root';
import Glimpse from '~/components/Glimpse';
import CarouselProjects from '~/components/CarouselProjects';
import Hero from '~/components/Hero';

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

const HomePage = () => {
  return (
    <>
      <header>
        <Hero
          bgImage='/images/header_img.png'
          title='Explore homes that fit your dreams'
          subtitle='Discover our curated selection of villas and apartments, hear from
            happy residents, and explore what makes our homes truly special.'
          cta={[
            { label: 'Projects', href: '/projects', variant: 'primary' },
            { label: 'Contact Us', href: '/contact', variant: 'secondary' },
          ]}
        />
      </header>
      <main>
        <Glimpse />
        <CarouselProjects />
      </main>
    </>
  );
};

export default HomePage;
