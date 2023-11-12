import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@rainbow-me/rainbowkit/styles.css";
import DappProvider from "@/components/DappProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DappProvider>
      <Component {...pageProps} />
    </DappProvider>
  );
}

export default MyApp;
