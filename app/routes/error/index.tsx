import Hero from '~/components/Hero';

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
