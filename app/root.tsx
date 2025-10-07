import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import '@mantine/core/styles.css';
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';

import type { Route } from './+types/root';
import './app.css';
import { Toaster } from './components/ui/sonner';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { useEffect } from 'react';
import { refreshAccessToken } from './api/auth';
import { useAuthStore } from './store/authstore';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/Navbar/Navbar';

// new instance for query hooks
const queryClient = new QueryClient();

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'icon',
    href: 'data:;base64,iVBORw0KGgo=', // blank favicon
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' {...mantineHtmlProps}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <ColorSchemeScript />
        <Meta />
        <Links />
      </head>
      <body className='h-21'>
        <MantineProvider>
          <QueryClientProvider client={queryClient}>
            <Navbar />
            {children}
          </QueryClientProvider>
          {/* <Navbar /> */}
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
        <Toaster
          toastOptions={{
            style: {
              display: 'flex',
              alignItems: 'center',
            },
          }}
        />
      </body>
    </html>
  );
}

export default function App() {
  const setUser = useAuthStore((state) => state.setUser);
  useEffect(() => {
    async function refreshUser() {
      const data = await refreshAccessToken();
      setUser(
        {
          id: data.user._id,
          name: data.user.name,
          email: data.user.email,
          userType: data.user.userType,
        },
        data.accessToken
      );
    }
    refreshUser();
  }, []);

  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const message = 'Something bad just happened...';
  let details = `${import.meta.env.DEV ? 'An unexpected error occurred.' : 'Our servers could not handle your request. Don&apos;t worry, our development team was already notified. Try refreshing the page.'}`;
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <ErrorPage status={401} details={details} stack={stack} message={message} />
  );
}
