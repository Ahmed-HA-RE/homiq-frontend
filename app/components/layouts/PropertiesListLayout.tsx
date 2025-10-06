import Footer from '../ui/Footer';

const PropertiesListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className='p-6 pt-40 bg-white min-h-screen'>{children}</main>
      <Footer />
    </>
  );
};

export default PropertiesListLayout;
