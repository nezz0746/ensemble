import type { NextPage } from "next";
import AppMap from "@/components/Map/Map";
import dynamic from "next/dynamic";

const SidePannel = dynamic(() => import("@/components/SidePannel"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className="h-screen flex flex-row p-5 gap-2">
      <div className="h-full flex-grow overflow-hidden border shadow-lg">
        <AppMap />
      </div>
      <div className="h-full flex flex-col justify-between w-96 p-2 overflow-hidden border shadow-lg">
        <SidePannel />
      </div>
    </div>
  );
};

export default Home;
