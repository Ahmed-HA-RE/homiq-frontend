import type { Route } from './+types/edit';
import { type Property, propertySchema } from '~/schema/propertiesSchema';
import EditPropertyForm from '~/components/EditPropertyForm ';
import api from '~/lib/axios';

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
      {/* top content */}
      <header className='bg-gray-200 pt-40'>
        <div className='space-y-3'>
          <h1 className='text-3xl md:text-4xl text-center font-outfit font-bold'>
            Edit Your Property Listing
          </h1>
          <h3 className='text-center font-outfit max-w-sm md:max-w-lg md:text-lg mx-auto'>
            Review your property details to ensure accuracy. Listings are
            verified before being updated.
          </h3>
        </div>
      </header>

      <main className='py-8 pb-10 px-6 bg-gray-200'>
        <section className='max-w-5xl mx-auto'>
          {/* Form */}
          <EditPropertyForm property={property} />
        </section>
      </main>
    </>
  );
};

export default EditProperty;
