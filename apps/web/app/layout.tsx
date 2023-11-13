"use client";

import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@rainbow-me/rainbowkit/styles.css";
import DappProvider from "@/components/DappProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className="bg-white">
        <DappProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
          </div>
        </DappProvider>
      </body>
    </html>
  );
};

export default Layout;
