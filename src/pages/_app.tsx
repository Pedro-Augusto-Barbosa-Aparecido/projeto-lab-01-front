import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { defaultTheme } from "../styles/themes/defaults";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>POnk Objects</title>
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}
