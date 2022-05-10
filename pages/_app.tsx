import type { AppProps } from "next/app";
import Head from "next/head";
import { MoralisProvider } from "react-moralis";

import Layout from "../components/layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      // Testnet
      serverUrl="https://t5sltoahuxi9.usemoralis.com:2053/server"
      appId="iKhBPtyG6n4w84nFI4xsWh4Pj4GDUI76Px0mek8v"
      // Mainnet
      // serverUrl="https://5sckt8fi0d0v.usemoralis.com:2053/server"
      // appId="Ud2LF2tpkPbO4T5kviPClEANmRDI4baJmcmb9h6l"
    >
      <Head>
        <title>Alice & Bob's Swap Shop</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoralisProvider>
  );
}

export default MyApp;
