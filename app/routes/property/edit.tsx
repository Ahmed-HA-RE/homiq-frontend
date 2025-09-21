import type { Route } from './+types/edit';
import { type Property, propertySchema } from '~/schema/propertiesSchema';
import EditPropertyForm from '~/components/EditPropertyForm ';
import api from '~/lib/axios';
import Footer from '~/components/ui/Footer';

type LoaderReturn = {
  property: Property;
};

export async function loader({
  request,
  params,
}: Route.LoaderArgs): Promise<LoaderReturn> {
  const { id } = params;
  const { data } = await api.get(`/properties/${id}`);
  return { property: data };
}

const EditProperty = ({ loaderData }: Route.ComponentProps) => {
  const { property } = loaderData;

  return (
    <>
      <main className='py-8 pb-10 pt-40 px-6 min-h-screen bg-gray-200'>
        <section className='max-w-5xl mx-auto'>
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
      </main>
      <Footer />
    </>
  );
};

export default EditProperty;
