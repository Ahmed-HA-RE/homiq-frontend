import PropertyDetails from '~/components/PropertyDetails';
import type { Property } from '~/type';
import type { Route } from './+types/details';
import api from '~/lib/axios';
import { useDisclosure } from '@mantine/hooks';
import Footer from '~/components/ui/Footer';
import { Avatar, Button, Text, Group } from '@mantine/core';
import classes from '../../mantine-themes/mantine.module.css';
import { Link } from 'react-router';
import DeleteDialog from '~/components/ui/DeleteDialog';
import { useAuthStore } from '~/store/authstore';
import { FaAt } from 'react-icons/fa6';

export async function loader({ params }: Route.LoaderArgs): Promise<Property> {
  const { id } = params;
  const { data } = await api.get(`properties/${id}`);
  return data;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Homiq' },
    {
      name: 'description',
      content:
        'Discover your dream home with Dream Homes Real Estate. Browse listings, explore properties, and find your perfect home today.',
    },
  ];
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const property = loaderData;
  const [opened, { toggle, close }] = useDisclosure(false);
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <main className='p-4 py-35  bg-white'>
        <section className='mt-10 max-w-7xl mx-auto'>
          <Group align='center' justify='start' gap={25}>
            <h1 className='text-2xl md:text-3xl font-outfit '>Sold By</h1>
            <div>
              <Group wrap='nowrap'>
                <Avatar src={property.user.avatar} size={72} radius='md' />
                <div>
                  <Text fz='lg' fw={500}>
                    {property.user.name}
                  </Text>

                  <Group wrap='nowrap' gap={4} mt={3}>
                    <FaAt size={14} />
                    <Text fz='sm' c='dimmed'>
                      {property.user.email}
                    </Text>
                  </Group>
                </div>
              </Group>
            </div>
          </Group>
          <Group className='absolute top-30 right-5'>
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
          <PropertyDetails property={property} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetailsPage;
