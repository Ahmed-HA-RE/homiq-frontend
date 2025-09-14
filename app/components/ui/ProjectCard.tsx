import { Card, Image, Text, Button, Group } from '@mantine/core';
import { Link } from 'react-router';
import '../../app.css';
import type { Project } from '~/schema/projectsSchema';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card
      __size='md'
      shadow='sm'
      padding='md'
      radius='md'
      withBorder
      className='!font-outfit'
    >
      <Card.Section withBorder component={Link} to={`/project/${project._id}`}>
        <Image
          src={`${import.meta.env.VITE_BACKEND_URL_STATIC}/images/exterior/${project.images.exterior}.jpg`}
          height={160}
          alt='properties'
          className='hover:scale-105 transition-all duration-200'
        />
      </Card.Section>

      <Group justify='space-between' mt='md' mb='xs'>
        <Text fz={'h3'} fw={700}>
          {project.title}
        </Text>
        <span className='bg-blue-400 !text-white text-xs font-medium rounded-full px-2 py-1 dirham-symbol'>
          &#xea; {project.price.toLocaleString()}
        </span>
      </Group>

      <Text fz={'lg'} mb='xs' fw={200} className='!text-gray-800'>
        {project.location}
      </Text>
      <Text size='sm' c='dimmed' lineClamp={4}>
        {project.description}
      </Text>

      <Button
        component={Link}
        variant='filled'
        to={`/project/${project._id}`}
        fullWidth
        mt='md'
        radius='md'
        classNames={{ root: 'card-btn' }}
      >
        View Property
      </Button>
    </Card>
  );
};

export default ProjectCard;
