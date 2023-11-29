import {
  mapAddress,
  mapABI,
  stateTileABI,
  localDistributorABI,
  localDistributorAddress,
} from "wagmi-config/generated";
import fs from "fs/promises";

const chainIdToNetwork = {
  1337: "localhost",
  5: "goerli",
  84531: "base-testnet",
};

const main = async () => {
  for (const [chainId, address] of Object.entries(mapAddress)) {
    await fs.writeFile(
      `./config/${chainId}.json`,
      JSON.stringify(
        {
          mapAddress: address,
          localDistributorAddress: localDistributorAddress[chainId],
          startBlock: 0,
          network: chainIdToNetwork[chainId],
        },
        null,
        2
      )
    );
  }
  await fs.writeFile("./abis/Map.json", JSON.stringify(mapABI, null, 2));
  await fs.writeFile(
    "./abis/StateTile.json",
    JSON.stringify(stateTileABI, null, 2)
  );
  await fs.writeFile(
    "./abis/LocalDistributor.json",
    JSON.stringify(localDistributorABI, null, 2)
  );
};

main();
