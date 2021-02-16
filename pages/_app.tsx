import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/global';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  let url = '';
  if (typeof window !== 'undefined') url = window.location.href ?? '';

  return (
    <>
      <Head>
        <title>Spider Man - Miles Morales</title>
        <meta name="title" content="Spider Man - Miles Morales" />
        <meta name="description" content="Spider Man - Miles Morales" />

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Spider Man - Miles Morales" />
        <meta property="og:description" content="Spider Man - Miles Morales" />
        <meta property="og:image" content="Spider Man - Miles Morales" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Marvel&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
