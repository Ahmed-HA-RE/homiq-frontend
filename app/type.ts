export type Property = {
  _id: string;
  name: string;
  price: number;
  location: string;
  type: string;
  description: string;
  area: number;
  beds: number;
  floors: number;
  Bathrooms: number;
  parking: number;
  amenities: string[];
  images: {
    interior: string[];
    exterior: string[];
  };
  user: {
    _id: string;
    name: string;
    email: string;
  };
};

export type CarouselProperty = Pick<
  Property,
  '_id' | 'name' | 'location' | 'images'
>;
