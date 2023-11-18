import useLocationTiles from "@/hooks/useLocationTiles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const AppNavigationBar = () => {
  const [inputFocused, setInputFocused] = useState(false);
  const { locationTiles } = useLocationTiles();
  const blurTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const { push } = useRouter();

  return (
    <div className="flex flex-row justify-between gap-2 items-center bg-opacity-90 p-3 bg-neutral rounded-lg">
      <div className="flex flex-row">
        <Link href={"/map"}>
          <button className="btn">Home</button>
        </Link>
      </div>
      <div className="flex-grow relative">
        <input
          onFocus={(e) => {
            clearTimeout(blurTimeoutRef.current);
            setInputFocused(true);
          }}
          onBlur={(e) => {
            blurTimeoutRef.current = setTimeout(() => {
              setInputFocused(false);
            }, 200);
          }}
          className="input input-primary w-full"
          placeholder="Search Network State (by tile address) or location (by geohash)"
        />
        {inputFocused && (
          <div className="absolute mt-2 rounded-md border border-primary overflow-hidden bg-neutral z-20 w-full">
            {locationTiles.map((tile) => {
              return (
                <div
                  key={tile.args.tileAddress}
                  className="cursor-pointer p-2 hover:bg-neutral-600"
                  onClick={(e) => {
                    clearTimeout(blurTimeoutRef.current);
                    push("/map/tile/" + tile.args.tileAddress);
                    setInputFocused(false);
                  }}
                >
                  Tile: {tile.args.tileAddress}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        <Link href={"/map/profile"}>
          <button className="btn">My Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default AppNavigationBar;
