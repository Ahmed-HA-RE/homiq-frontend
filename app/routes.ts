import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home/index.tsx'),
  route('/projects', './routes/projects/index.tsx'),
  route('/project/:id', './routes/projects/details.tsx'),
  route('/about', './routes/about/index.tsx'),
  route('*', './routes/error/index.tsx'),
] satisfies RouteConfig;
