import type { Route } from '../../+types/root';
import About from '~/components/About';
import CarouselProjects from '~/components/CarouselProjects';
import Navbar from '~/components/Navbar';
import Hero from '~/components/Hero';

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
        <Hero />
      </header>
      <main>
        <About />
        <CarouselProjects />
      </main>
    </>
  );
};

export default HomePage;
