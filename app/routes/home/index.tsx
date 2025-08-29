import type { Route } from '../../+types/root';
import Navbar from '../../components/Navbar';
import { useState } from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'RealEstate' },
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
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default HomePage;
