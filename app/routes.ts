import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home/index.tsx'),
  route('/properties', './routes/property/index.tsx'),
  route('/properties/:id', './routes/property/details.tsx'),
  route('/property/new', './routes/property/new.tsx'),
  route('/about', './routes/about/index.tsx'),
  route('/contact-us', './routes/contact/index.tsx'),
  route('/reviews/add', './routes/reviews/index.tsx'),
  route('*', './routes/error/index.tsx'),
] satisfies RouteConfig;
