"use client";

import type { NextPage } from "next";

import useAppAgent from "@/hooks/useAppAgent";

const Home: NextPage = () => {
  const { geohashes } = useAppAgent();

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col flex-grow justify-between pt-4">
        <div className="flex flex-col">
          My accounts
          <div className="grid grid-cols-3 gap-2 mt-2">
            {geohashes.map((geohash) => {
              return (
                <div
                  key={geohash}
                  className="border border-primary rounded-md bg-neutral text-center p-1"
                >
                  <p>{geohash}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4"></div>
      </div>
    </div>
  );
};

export default Home;
