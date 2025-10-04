import NewPropertyForm from '~/components/NewPropertyForm';
import Footer from '~/components/ui/Footer';
import UploadImagesForm from '~/components/ui/UploadImagesForm';
import useImageModalStore from '~/store/imageModalStore';

const CreatePropertyForm = () => {
  const propertyId = useImageModalStore((state) => state.propertyId);
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
          {/* Upload image form */}
          <UploadImagesForm
            id={propertyId}
            subtitle='Your property was saved. Would you like to add images too'
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CreatePropertyForm;
