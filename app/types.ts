import { ImagePath } from './enums';

export type Projects = {
  _id: string;
  title: string;
  price: string;
  location: string;
  type: string;
  description: string;
  area: string;
  image: ImagePath;
};
