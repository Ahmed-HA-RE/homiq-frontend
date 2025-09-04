import { Link } from 'react-router';
import type { Projects } from '~/types';

type ProjectDetailsProps = {
  project: Projects;
};

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className='rounded-md w-full overflow-hidden   p-6'>
      <div className='flex flex-col-reverse md:flex-col items-center md:items-start space-y-8'>
        {/* Image Gallery */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          <div>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL_STATIC}/images/exterior/${project.images.exterior}.jpg`}
              alt={project.title}
              className='overflow-hidden rounded-lg w-full h-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 gap-4'>
            {project.images.interior.map((interior, indx) => (
              <img
                src={`${import.meta.env.VITE_BACKEND_URL_STATIC}/images/interior/${interior}.jpg`}
                alt={project.title}
                className='overflow-hidden rounded-lg object-cover w-full md:h-42 lg:h-48'
                key={indx}
              />
            ))}
          </div>
        </div>
        {/* Content */}
        <div className='font-outfit space-y-1 text-center md:text-start'>
          <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
            {project.title}
          </h2>
          <small className='text-gray-500 md:text-base'>
            {project.location}
          </small>
        </div>
      </div>
      {/* Property Info */}
      <div className='w-full max-w-2xl border-2 border-gray-300 py-2 mt-4 rounded-lg bg-white flex flex-col md:flex-row justify-between divide-y md:divide-x md:divide-y-0 divide-gray-400'>
        {/* Price */}
        <div className='flex-1 text-center py-2'>
          <span className='text-gray-600 text-sm'>Price</span>
          <h4 className='font-medium text-base'>
            {project.price.toLocaleString()}
          </h4>
        </div>
        {/* Bedrooms */}
        <div className=' text-center flex-1  py-2'>
          <span className='text-gray-600 text-sm'>Bedrooms</span>
          <h4 className='font-medium text-base'>{project.beds}</h4>
        </div>
        {/* Area */}
        <div className='text-center flex-1  py-2'>
          <span className='text-gray-600 text-sm'>Square Feet</span>
          <h4 className='font-medium text-base'>{project.area}</h4>
        </div>
        {/* Floors */}
        <div className='text-center flex-1  py-2'>
          <span className='text-gray-600 text-sm'>Floors</span>
          <h4 className='font-medium text-base'>{project.floors}</h4>
        </div>
        {/* Type */}
        <div className='text-center flex-1  py-2'>
          <span className='text-gray-600 text-sm'>Type</span>
          <h4 className='font-medium text-base'>{project.type}</h4>
        </div>
        {/* Parking */}
        <div className='flex-1 text-center  py-2'>
          <span className='text-gray-600 text-sm'>Parking</span>
          <h4 className='font-medium text-base'>{project.parking}</h4>
        </div>
      </div>
      {/* Property Description */}
      <div className='mt-12 space-y-4'>
        <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
          Description
        </h2>
        <p className='tracking-wide max-w-5xl mb-6'>{project.description}</p>
      </div>

      <Link
        className='flex justify-self-end bg-link text-white py-3 px-6 rounded hover:bg-secondary-link transition duration-200'
        to={'/projects'}
      >
        Back To Projects
      </Link>
    </div>
  );
};

export default ProjectDetails;
