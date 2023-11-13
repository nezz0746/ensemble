"use client";

import AppMap from "@/components/Map/Map";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-row gap-2">
      <div className="w-2/3 relative">
        <AppMap />
      </div>
      <div className="w-1/3 p-4">
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default Home;
