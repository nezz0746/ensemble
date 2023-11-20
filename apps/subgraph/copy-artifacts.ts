import { mapAddress, mapABI, stateTileABI } from "wagmi-config/generated";
import fs from "fs/promises";

const chainIdToNetwork = {
  1337: "localhost",
  5: "goerli",
};

const main = async () => {
  for (const [chainId, address] of Object.entries(mapAddress)) {
    await fs.writeFile(
      `./config/${chainId}.json`,
      JSON.stringify(
        {
          mapAddress: address,
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
};

main();
