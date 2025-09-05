import type { Projects } from '~/types';
import AboutUsTabs from './ui/Tabs';

type ProjectDetailsProps = {
  project: Projects;
};

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className='rounded-md w-full p-4 overflow-hidden mt-10'>
      <div className='flex flex-col-reverse md:flex-col space-y-8'>
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
      <AboutUsTabs project={project} />
    </div>
  );
};

export default ProjectDetails;
