import NewPropertyForm from '~/components/NewPropertyForm';

const CreatePropertyForm = () => {
  return (
    <>
      {/* top content */}
      <header className='bg-gray-200 pt-40'>
        <div className='space-y-3'>
          <h1 className='text-3xl md:text-4xl text-center font-outfit font-bold'>
            Add Your Property For Sale
          </h1>
          <h3 className='text-center font-outfit max-w-sm md:max-w-lg md:text-lg mx-auto'>
            Ensure your property details are accurate. Listings are verified
            before being published.
          </h3>
        </div>
      </header>

      <main className='py-8 pb-10 px-6 bg-gray-200'>
        <section className='max-w-4xl mx-auto'>
          {/* Form */}
          <NewPropertyForm />
        </section>
      </main>
    </>
  );
};

export default CreatePropertyForm;
