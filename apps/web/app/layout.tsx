"use client";

import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@rainbow-me/rainbowkit/styles.css";
import DappProvider from "@/components/DappProvider";
import { Provider } from "react-redux";
import { store } from "@/rtk/store";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Provider store={store}>
          <DappProvider>
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow">{children}</main>
            </div>
          </DappProvider>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
