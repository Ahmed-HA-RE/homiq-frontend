import type { Route } from '../../+types/root';
import About from '~/components/About';
import CarouselProjects from '~/components/CarouselProjects';
import Navbar from '~/components/Navbar';
import Hero from '~/components/Hero';
import { ImagePath } from '~/enums';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Estate' },
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
        <Navbar />
        <Hero
          image={ImagePath.HEADER}
          ctaProjects={{ label: 'Projects', route: '/projects' }}
          heading='Explore homes that fit your dreams'
        />
      </header>
      <main>
        <About />
        <CarouselProjects />
      </main>
    </>
  );
};

export default HomePage;
