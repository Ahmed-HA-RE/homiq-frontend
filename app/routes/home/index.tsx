import Header from '~/components/Header';
import type { Route } from '../../+types/root';
import { useState } from 'react';
import About from '~/components/About';
import Projects from '~/components/Projects';

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>
        <About />
        <Projects />
      </main>
    </>
  );
};

export default HomePage;
