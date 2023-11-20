"use client";

import type { NextPage } from "next";

import useAppAgent from "@/hooks/useAppAgent";
import { truncateAddress } from "@/services/utils";

const Home: NextPage = () => {
  const { agent } = useAppAgent();

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col flex-grow justify-between pt-4">
        <div className="flex flex-col">
          Local Records
          <div className="grid grid-cols-2 gap-2 mt-2">
            {agent?.records.map(({geohash, id}) => {
              return (
                <div
                  key={geohash}
                  className="border border-primary bg-neutral p-2"
                >
                  <p className="font-bold">{geohash}</p>
                  <p>{truncateAddress(id, 6)}</p>
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
