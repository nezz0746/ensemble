"use client";

import ConnectButton from "@/components/ConnectButton";
import { usePosition } from "@/hooks/usePosition";
import classNames from "classnames";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { position, setPrecision } = usePosition();

  return (
    <div className="h-full flex flex-col">
      <div className="">
        <ConnectButton />
      </div>
      <div className="flex flex-col flex-grow justify-between pt-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center justify-between font-display">
            <p>Geohash</p>
            <p>{position.geohash}</p>
          </div>
          <div className="font-display flex flex-row justify-between gap-4">
            <p>Precision</p>
            <div className="flex-grow ml-10">
              <input
                type="range"
                min={2}
                max={6}
                value={position.precision}
                onChange={(e) => {
                  setPrecision(parseInt(e.target.value));
                }}
                className={classNames("range range-xs", {
                  "range-success": position.precision < 5,
                  "range-warning": position.precision >= 5,
                })}
                step={1}
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-center items-center text-center">
            {position.precision >= 5 && (
              <p className="text-sm text-warning font-display">
                Warning: you&apos;re about to share your location with high
                precision. Make sure you use the approriate identity.
              </p>
            )}
          </div>

          <button className="btn cursor-not-allowed w-full">
            <p className="font-display">Move</p>
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Home;
