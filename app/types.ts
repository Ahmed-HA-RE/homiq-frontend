import { PropertiesExteriorImages, PropertiesInteriorImages } from './enums';
export type Projects = {
  _id: string;
  title: string;
  price: number;
  location: string;
  type: string;
  description: string;
  area: string;
  beds: number;
  floors: number;
  Bathrooms: number;
  amenities: string[];
  parking: number;
  images: {
    interior: PropertiesInteriorImages[];
    exterior: PropertiesExteriorImages[];
  };
};

export type Agents = {
  _id: string;
  name: string;
  email: string;
  description: string;
  role:
    | 'CEO'
    | 'Selling Agent'
    | 'Selling Assistant'
    | 'Broker'
    | 'CEO Assistant'
    | 'Broker Assistant';
  image: string;
  links: { platform: string; url: string }[];
  location: string;
};

export type Testimonials = {
  _id: string;
  name: string;
  feedback: string;
  role: string;
  status: string;
};
