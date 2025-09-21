import { Card, Image, Text, Button, Group } from '@mantine/core';
import { Link } from 'react-router';
import '../../app.css';
import type { Property } from '~/schema/propertiesSchema';
import { formatLocationName } from '~/utils/formatters';

type PropertyCardProps = {
  property: Property;
};

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card
      __size='md'
      shadow='sm'
      padding='md'
      radius='md'
      withBorder
      className='!font-outfit'
    >
      <Card.Section
        withBorder
        component={Link}
        to={`/properties/${property._id}`}
      >
        <Image
          src={property.images.exterior}
          height={160}
          alt='properties'
          className='hover:scale-105 transition-all duration-200'
        />
      </Card.Section>

      <Group justify='space-between' mt='md' mb='xs'>
        <Text fz={'h3'} fw={700}>
          {property.name}
        </Text>
        <span className='bg-blue-400 !text-white text-xs font-medium rounded-full px-2 py-1 dirham-symbol'>
          &#xea; {property.price.toLocaleString()}
        </span>
      </Group>

      <Text fz={'lg'} mb='xs' fw={200} className='!text-gray-800'>
        {formatLocationName(property.location)}
      </Text>
      <Text size='sm' c='dimmed' lineClamp={4}>
        {property.description}
      </Text>

      <Button
        component={Link}
        variant='filled'
        to={`/properties/${property._id}`}
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

export default PropertyCard;
