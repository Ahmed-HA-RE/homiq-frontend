import type { Projects } from '~/types';
import { Link } from 'react-router';
const BACKEND_URL_ASSESTS = import.meta.env.VITE_BACKEND_URL_STATIC;

type ProjectCardProps = {
  project: Projects;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      className='hover:scale-105 transition duration-200'
      to={`/project/${project._id}`}
    >
      <div className='bg-white overflow-hidden rounded-2xl shadow-lg'>
        {/* Image */}
        <div>
          <img
            src={`${BACKEND_URL_ASSESTS}/images/${project.image}.jpg`}
            alt={project.title}
            className='h-64 w-full object-cover rounded-t-2xl '
          />
        </div>

        {/* Card Info */}
        <div className='p-4 px-6 flex flex-col items-start justify-center tracking-wide'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-1'>
            {project.title}
          </h2>
          <p className='text-lg font-light text-gray-500 mb-3'>
            {project.location}
          </p>
          <h2 className='text-2xl font-medium mb-1'>{project.price}</h2>
          <p className='text-gray-500 font-light mb-2'>
            {project.type} | {project.area}
          </p>
          <p className='line-clamp-2 text-lg font-light text-gray-800 mb-4'>
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
