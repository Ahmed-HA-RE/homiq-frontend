import { Card, Image, Text, Button, Group, Badge } from '@mantine/core';
import { Link } from 'react-router';
import '../../app.css';
import type { Property } from '~/type';
import { formatLocationName } from '~/utils/formatters';
import classes from '../../mantine-themes/mantine.module.css';

type PropertyCardProps = {
  property: Property;
};

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card withBorder radius='md' p='md' className={classes.card}>
      <Card.Section component={Link} to={`/properties/${property._id}`}>
        <Image
          src={property.images.exterior}
          alt={property.name}
          height={180}
          className='hover:scale-105 transition-all duration-200'
        />
      </Card.Section>

      <Card.Section className={classes.section_card} mt='md'>
        <Group justify='apart'>
          <Text fz='lg' fw={500}>
            {property.name}
          </Text>
          <Badge size='sm' variant='light'>
            {formatLocationName(property.location)}
          </Badge>
        </Group>
        <Text fz='sm' mt='xs' className='line-clamp-2'>
          {property.description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section_card}>
        <Text mt='md' className={classes.label_card} c='dimmed'>
          Perfect for you, if you enjoy
        </Text>
        <Group gap={7} mt={5}>
          {property.amenities.map((amenity) => (
            <Badge key={amenity} className='!capitalize' variant='light'>
              {amenity}
            </Badge>
          ))}
        </Group>
      </Card.Section>

      <Group mt='xs'>
        <Button
          component={Link}
          to={`/properties/${property._id}`}
          radius='md'
          style={{ flex: 1 }}
          classNames={{ root: 'card-btn' }}
        >
          Show details
        </Button>
      </Group>
    </Card>
  );
};

export default PropertyCard;
