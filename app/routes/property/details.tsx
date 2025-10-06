import PropertyDetails from '~/components/PropertyDetails';
import type { Property } from '~/type';
import type { Route } from './+types/details';
import api from '~/lib/axios';
import { useDisclosure } from '@mantine/hooks';
import Footer from '~/components/ui/Footer';
import { Button, Flex, Group } from '@mantine/core';
import useMediaQuery from '@mui/material/useMediaQuery';
import classes from '../../mantine-themes/mantine.module.css';
import { Link } from 'react-router';
import DeleteDialog from '~/components/ui/DeleteDialog';
import { useAuthStore } from '~/store/authstore';

export async function loader({ params }: Route.LoaderArgs): Promise<Property> {
  const { id } = params;
  const { data } = await api.get(`properties/${id}`);
  return data;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Homiq | Project Details ' },
    {
      name: 'description',
      content:
        'Discover your dream home with Dream Homes Real Estate. Browse listings, explore properties, and find your perfect home today.',
    },
  ];
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const property = loaderData;
  const matchesBr = useMediaQuery('(min-width:768px)');
  const [opened, { toggle, close }] = useDisclosure(false);
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <main className='p-4 py-35  bg-white'>
        <section className='mt-10 max-w-7xl mx-auto'>
          <Flex justify='space-between' align='center' px={matchesBr ? 20 : 10}>
            <h1 className='text-center text-4xl md:text-5xl font-medium'>
              Project{' '}
              <span className='underline-offset-4 underline decoration-1 font-extralight'>
                Details
              </span>
            </h1>
            <Group>
              {user?.id !== property.user._id &&
              user?.userType !== 'admin' ? null : (
                <>
                  <Button
                    component={Link}
                    to={`/property/edit/${property._id}`}
                    classNames={{ root: classes.project_edit_Btn }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={toggle}
                    classNames={{ root: classes.project_dlt_Btn }}
                  >
                    Delete
                  </Button>
                </>
              )}
            </Group>
            <DeleteDialog close={close} opened={opened} property={property} />
          </Flex>
          <PropertyDetails property={property} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetailsPage;
