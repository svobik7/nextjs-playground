import RootsContext, { detectRoots } from 'next-roots/context';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // detect roots context from page component
  const roots = detectRoots(Component, {
    defaultLocale: 'en',
    locales: ['en', 'cs', 'es'],
  });

  return (
    <RootsContext.Provider value={roots}>
      <Component {...pageProps} />
    </RootsContext.Provider>
  );
}

export default MyApp;
