import { usePosition } from "@/hooks/usePosition";
import ConnectButton from "./ConnectButton";

const SidePannel = () => {
  const { position, setPrecision } = usePosition();
  return (
    <>
      <div>
        <p className="text-lg font-bold">
          <ConnectButton />
        </p>
      </div>
      <div className="flex flex-col gap-4">
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
              className="range range-xs"
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

        <button className="btn btn-outline cursor-not-allowed w-full rounded-none">
          <p className="font-display">Move</p>
        </button>
      </div>
    </>
  );
};

export default SidePannel;
