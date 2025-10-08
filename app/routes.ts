import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home/index.tsx'),
  route('/properties', './routes/property/index.tsx'),
  route('/properties/:id', './routes/property/details.tsx'),
  route('/property/new', './routes/property/new.tsx'),
  route('/property/edit/:id', './routes/property/edit.tsx'),
  route('/my-properties', './routes/property/userProperties.tsx'),
  route('/about', './routes/about/index.tsx'),
  route('/contact-us', './routes/contact/index.tsx'),
  route('/reviews/add', './routes/reviews/index.tsx'),
  route('/signup', './routes/auth/signup.tsx'),
  route('/login', './routes/auth/login.tsx'),
  route('/settings/account', './routes/settings/index.tsx'),
  route('/recover-password', './routes/auth/recoverPassword.tsx'),
  route('/reset-password/:resetToken', './routes/auth/resetPassword.tsx'),
  route('*', './routes/not-found/index.tsx'),
] satisfies RouteConfig;
