import type { Property } from '~/type';
import { capitalizeText } from '~/utils/formatters';

const PropertyDetailsInfo = ({ property }: { property: Property }) => {
  return (
    <div className='mt-12 space-y-4 bg-gray-50 shadow-lg p-6 rounded mx-auto'>
      {/* discription */}
      <div>
        <h3 className='font-outfit text-gray-600 text-xl mb-6'>Description</h3>
        <p className='tracking-wider text-gray-500 leading-6 text-sm max-w-5xl mb-6'>
          {property.description}
        </p>
      </div>
      {/* amenities */}
      <div>
        <ul className='grid grid-cols-2 sm:grid-cols-3 items-center justify-items-start gap-8 font-outfit'>
          {/* Area */}
          <li>
            <div className='flex flex-row items-center justify-center'>
              {/* icon */}
              <img src='/svgs/features/area.svg' alt='area' width={50} />
              {/* info */}
              <div className='flex flex-col items-start'>
                <h4 className='text-gray-700'>Area:</h4>
                <span className='text-xs text-gray-400'>
                  {property.area} Sqft
                </span>
              </div>
            </div>
          </li>
          {/* floors */}
          <li>
            <div className='flex flex-row items-center justify-center space-x-2'>
              {/* icon */}
              <img src='/svgs/features/floor-stage.svg' alt='area' width={40} />
              {/* info */}
              <div className='flex flex-col items-start'>
                <h4 className='text-gray-700'>
                  {' '}
                  {property.floors > 1 ? 'Floors:' : 'Floor:'}
                </h4>
                <span className='text-xs text-gray-400'>
                  {property.floors > 1
                    ? `${property.floors} Floors`
                    : `${property.floors} Floor`}
                </span>
              </div>
            </div>
          </li>
          {/* Bathrooms */}
          <li>
            <div className='flex flex-row items-center justify-center space-x-2'>
              {/* icon */}
              <img src='/svgs/features/bathrooms.svg' alt='area' width={40} />
              {/* info */}
              <div className='flex flex-col items-start'>
                <h4 className='text-gray-700'>Baths:</h4>
                <span className='text-xs text-gray-400'>
                  {property.Bathrooms > 1
                    ? `${property.Bathrooms} Bathrooms`
                    : `${property.Bathrooms} Bathroom`}
                </span>
              </div>
            </div>
          </li>
          {/* Type */}
          <li>
            <div className='flex flex-row items-center justify-center space-x-2'>
              {/* icon */}
              <img
                src={`/svgs/features/${property.type === 'villa' ? 'villa' : 'apartment'}.svg`}
                alt='area'
                width={40}
              />
              {/* info */}
              <div className='flex flex-col items-start'>
                <h4 className='text-gray-700'>Type:</h4>
                <span className='text-xs text-gray-400'>
                  {capitalizeText(property.type)}
                </span>
              </div>
            </div>
          </li>
          {/* Garage */}
          <li>
            <div className='flex flex-row items-center justify-center space-x-2'>
              {/* icon */}
              <img src='/svgs/features/garage.svg' alt='area' width={40} />
              {/* info */}
              <div className='flex flex-col items-start'>
                <h4 className='text-gray-700'>
                  {' '}
                  {property.parking > 1 ? 'Garages:' : 'Garage:'}
                </h4>
                <span className='text-xs text-gray-400'>
                  {property.parking > 1
                    ? `${property.parking} Garages`
                    : `${property.parking} Garage`}
                </span>
              </div>
            </div>
          </li>
          {/* beds */}
          <li>
            <div className='flex flex-row items-center justify-center space-x-2'>
              {/* icon */}
              <img src='/svgs/features/beds.svg' alt='area' width={40} />
              {/* info */}
              <div className='flex flex-col items-start'>
                <h4 className='text-gray-700'>
                  {' '}
                  {property.beds > 1 ? 'Beds:' : 'Bed:'}
                </h4>
                <span className='text-xs text-gray-400'>
                  {property.beds > 1
                    ? `${property.beds} Beds`
                    : `${property.beds} Bed`}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetailsInfo;
