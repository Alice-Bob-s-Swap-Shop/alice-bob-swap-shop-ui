import type { AppProps } from "next/app";
import Head from "next/head";
import { MoralisProvider } from "react-moralis";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl="https://t5sltoahuxi9.usemoralis.com:2053/server"
      appId="iKhBPtyG6n4w84nFI4xsWh4Pj4GDUI76Px0mek8v"
    >
      <Head>
        <title>Alice & Bob's Swap Shop</title>
      </Head>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
