import { formatLocationName } from '~/utils/formatters';
import PropertyDetailsTabs from './PropertyDetailsInfo';
import type { Property } from '~/type';

type PropertyDetailsProps = {
  property: Property;
};

const PropertyDetails = ({ property }: PropertyDetailsProps) => {
  return (
    <div className='rounded-md w-full overflow-hidden mt-5'>
      <div className='flex flex-col-reverse md:flex-col space-y-8'>
        {/* Image Gallery */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          <div>
            <img
              src={`${property.images?.exterior}`}
              alt={property.name}
              className='overflow-hidden rounded-lg w-full h-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 gap-4'>
            {property.images?.interior.map((interior, indx) => (
              <img
                src={interior}
                alt={property.name}
                className='overflow-hidden rounded-lg object-cover w-full md:h-42 lg:h-[240px]'
                key={indx}
              />
            ))}
          </div>
        </div>
        {/* Content */}
        <div className='font-outfit text-center md:text-start flex flex-col md:flex-row justify-between items-start space-y-6 border-b border-gray-300 pb-4'>
          <div className='text-left'>
            <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 '>
              {property.name}
            </h2>
            <small className='text-gray-500 md:text-base text-left'>
              {formatLocationName(property.location)}
            </small>
          </div>
          <span className='dirham-symbol !text-2xl md:!text-4xl'>
            {' '}
            &#xea;
            <h4 className='font-medium inline-block ml-2'>
              {property.price.toLocaleString()}
            </h4>
          </span>
        </div>
      </div>
      {/* Property Info */}
      <PropertyDetailsTabs property={property} />
    </div>
  );
};

export default PropertyDetails;
