import type { Route } from './+types/edit';

import EditPropertyForm from '~/components/EditPropertyForm ';
import api from '~/lib/axios';
import Footer from '~/components/ui/Footer';
import UploadImagesForm from '~/components/ui/UploadImagesForm';
import type { Property } from '~/type';
import { redirect } from 'react-router';

export async function loader({ request, params }: Route.LoaderArgs) {
  const { id } = params;
  const { data } = await api.get(`/properties/${id}`);
  return { property: data };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Homiq' },
    {
      name: 'description',
      content:
        'Update your property information, images, and details to keep your Homiq listing accurate and appealing to potential clients.',
    },
  ];
}

const EditProperty = ({ loaderData }: Route.ComponentProps) => {
  const { property } = loaderData;

  return (
    <>
      <main className='py-8 pb-10 pt-40 px-6 min-h-screen bg-white'>
        <section className='max-w-7xl mx-auto'>
          {/* top content */}
          <div className='space-y-3'>
            <h1 className='text-3xl md:text-4xl text-center font-outfit font-bold'>
              Add Your Property For Sale
            </h1>
            <h3 className='text-center font-outfit max-w-sm md:max-w-lg md:text-lg mx-auto mb-4'>
              Ensure your property details are accurate. Listings are verified
              before being published.
            </h3>
          </div>

          {/* Form */}
          <EditPropertyForm property={property} />
        </section>
        {/* Upload image form */}
        <UploadImagesForm
          id={property._id}
          subtitle='Your property was saved. Would you like to edit images too?'
        />
      </main>
      <Footer />
    </>
  );
};

export default EditProperty;
