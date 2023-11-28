import { create } from "kubo-rpc-client";
import { promises as fs } from "fs";

const main = async () => {
  const client = create({ url: "http://localhost:5001" });

  const statesBasePath = "./items/network-states";

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
};

main();
