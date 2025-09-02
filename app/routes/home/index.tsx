import type { Route } from '../../+types/root';
import Glimpse from '~/components/Glimpse';
import CarouselProjects from '~/components/CarouselProjects';
import Navbar from '~/components/Navbar';
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
      <Navbar bgColor='bg-transparent' />
      <header>
        <Hero />
      </header>
      <main>
        <Glimpse />
        <CarouselProjects />
      </main>
    </>
  );
};

export default HomePage;
