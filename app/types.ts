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
  parking: number;
  images: {
    interior: PropertiesInteriorImages[];
    exterior: PropertiesExteriorImages[];
  };
};
