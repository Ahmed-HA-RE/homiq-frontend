import type { Route } from './+types';
import Hero from '~/components/Hero';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Homiq' },
    {
      name: 'description',
      content:
        'The page you are looking for could not be found. Return to Homiq’s homepage to continue exploring property listings and real estate opportunities.',
    },
  ];
}

const NotFoundPage = () => {
  return (
    <Hero
      bgImage='https://res.cloudinary.com/ahmed--dev/image/upload/v1758479751/404_page_mc0vpe.jpg'
      title='404'
      subtitle='Looks like this listing moved or never existed. Try browsing our available homes.'
    />
  );
};

export default NotFoundPage;
