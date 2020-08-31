import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../css/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
