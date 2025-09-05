import Hero from '~/components/Hero';

const NotFoundPage = () => {
  return (
    <Hero
      bgImage='/images/404_page.jpg'
      title='404'
      subtitle='Looks like this listing moved or never existed. Try browsing our available homes.'
      cta={[{ label: 'Back To Home Page', href: '/', variant: 'primary' }]}
    />
  );
};

export default NotFoundPage;
