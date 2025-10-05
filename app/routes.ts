import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home/index.tsx'),
  route('/properties', './routes/property/index.tsx'),
  route('/properties/:id', './routes/property/details.tsx'),
  route('/property/new', './routes/property/new.tsx'),
  route('/property/edit/:id', './routes/property/edit.tsx'),
  route('/about', './routes/about/index.tsx'),
  route('/contact-us', './routes/contact/index.tsx'),
  route('/reviews/add', './routes/reviews/index.tsx'),
  route('/signup', './routes/auth/Signup.tsx'),
  route('/login', './routes/auth/Login.tsx'),
  route('/recover-password', './routes/auth/RecoverPassword.tsx'),
  route('/reset-password/:resetToken', './routes/auth/ResetPassword.tsx'),
  route('*', './routes/error/index.tsx'),
] satisfies RouteConfig;
