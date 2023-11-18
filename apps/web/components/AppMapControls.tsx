import { usePosition } from "@/hooks/usePosition";
import classNames from "classnames";
import MoveButton from "./MoveButton";
import { useAccount } from "wagmi";
import useVisitedGeohashes from "@/hooks/useVisitedGeohashes";
import useAppAddresses from "@/hooks/useAppAddresses";
import { usePathname } from "next/navigation";

const AppMapControls = () => {
  const { locationTile } = useAppAddresses();
  const { address } = useAccount();
  const { setPrecision, position } = usePosition();
  const { geohashes, getAccountRecords } = useVisitedGeohashes();

  return (
    <div className="flex flex-row justify-between gap-4 items-center bg-opacity-90 p-3 bg-neutral rounded-lg">
      <div className="flex flex-row items-center w-full gap-2 justify-between font-display">
        <div className="border border-primary p-2 rounded-md">
          <p className="text-xl">{position.geohash}</p>
        </div>
      </div>
      <div className="font-display w-full flex flex-row items-center">
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
      <div className="w-full flex flex-row justify-end">
        <MoveButton
          address={address}
          tile={locationTile}
          geohash={position.geohash}
          disabled={geohashes.includes(position.geohash)}
          onMoveSuccess={() => {
            getAccountRecords();
          }}
        />
      </div>
    </div>
  );
};

/**
 * NOTE: Could move to vite app, NextJS slot routing is a hellhole
 * @returns
 */
const AppMapControlsRouted = () => {
  const pathName = usePathname();

  return pathName.includes("/profile") ? <AppMapControls /> : null;
};

export default AppMapControlsRouted;
