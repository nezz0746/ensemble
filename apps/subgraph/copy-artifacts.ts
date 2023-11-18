import { mapAddress } from "wagmi-config/generated";
import fs from "fs/promises";

const chainIdToNetwork = {
  1337: "mainnet",
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
};

main();
