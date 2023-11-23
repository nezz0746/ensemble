import fs from "fs/promises";
import { uploadState } from "./src/uploadState";
import { login } from "./src/login";

const statesBasePath = "./items/network-states";

const main = async () => {
  const client = await login("nezz0746@gmail.com");

  const stateDir = await fs.readdir(statesBasePath);

  /**
   * Update States Metadata
   */
  for (const state of stateDir) {
    await uploadState(client, `${statesBasePath}/${state}`);
  }
};

main();
