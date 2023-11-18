import {
  useErc721BalanceOf,
  useMapComputeLocalRecord,
  useMapComputeRecordTileAddress,
} from "wagmi-config";
import { usePosition } from "./usePosition";
import { useAccount } from "wagmi";

/**
 * This hook is used to fetch the local record address (ERC6551) of the user.
 */
const useLocalRecord = () => {
  const { address } = useAccount();
  const { position } = usePosition();

  const { data: recordTileAddress } = useMapComputeRecordTileAddress({
    args: [position.geohash],
    enabled: !!position.geohash,
  });
  const { data: balanceOfRecordTile } = useErc721BalanceOf({
    address: recordTileAddress,
    // @ts-ignore
    args: [address],
    enabled: !!address,
  });

  const { data } = useMapComputeLocalRecord({
    // @ts-ignore
    args: [address, position.geohash],
    enabled: Boolean(balanceOfRecordTile),
  });
};

export default useLocalRecord;
