import { ImagePath } from './enums';

export type Project = {
  id: string;
  title: string;
  price: string;
  location: string;
  image: ImagePath;
};
