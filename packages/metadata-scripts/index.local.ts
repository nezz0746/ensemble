import { create } from "kubo-rpc-client";
import { promises as fs } from "fs";

const main = async () => {
  const client = create({ url: "http://localhost:5001" });

  const statesBasePath = "./items/network-states";
  const tokensBasePath = "./items/tokens";

  const statesDir = await fs.readdir(statesBasePath);

  for (const state of statesDir) {
    const stateMetadata = (
      await fs
        .readFile(`${statesBasePath}/${state}/upload/latest.json`, "utf-8")
        .then(JSON.parse)
    ).metadata;

    const { cid } = await client.add(JSON.stringify(stateMetadata), {
      cidVersion: 1,
    });

    client.pin.add(cid);
  }

  const tokensDir = await fs.readdir(tokensBasePath);

  const tokenCIDs = {} as Record<string, string>;

  for (const token of tokensDir) {
    const tokenMetadata = (
      await fs
        .readFile(`${tokensBasePath}/${token}/upload/latest.json`, "utf-8")
        .then(JSON.parse)
    ).metadata;

    const { cid } = await client.add(JSON.stringify(tokenMetadata), {
      cidVersion: 1,
    });

    tokenCIDs[token] = cid.toString();

    client.pin.add(cid);
  }

  await fs.writeFile(
    "./items/local-token-cids.json",
    JSON.stringify(tokenCIDs, null, 2)
  );
};

main();
