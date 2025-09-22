import NewPropertyForm from '~/components/NewPropertyForm';
import Footer from '~/components/ui/Footer';

const CreatePropertyForm = () => {
  return (
    <>
      <main className='py-8 pb-10 pt-40 px-6 min-h-screen bg-gray-200'>
        <section className='max-w-5xl mx-auto'>
          {/* top content */}
          <div className='space-y-3'>
            <h1 className='text-3xl md:text-4xl text-center font-outfit font-bold'>
              Add Your Property For Sale
            </h1>
            <h3 className='text-center font-outfit max-w-sm md:max-w-lg md:text-lg mx-auto mb-10'>
              Ensure your property details are accurate. Listings are verified
              before being published.
            </h3>
          </div>
          {/* Form */}
          <NewPropertyForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CreatePropertyForm;
