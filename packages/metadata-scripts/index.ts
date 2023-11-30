import fs from "fs/promises";
import { uploadState } from "./src/uploadState";
import { login } from "./src/login";
import { uploadToken } from "./src/uploadToken";

const statesBasePath = "./items/network-states";
const tokensBasePath = "./items/tokens";

const main = async () => {
  const client = await login("nezz0746@gmail.com");

  const stateDir = await fs.readdir(statesBasePath);

  /**
   * Update States Metadata
   */
  for (const state of stateDir) {
    await uploadState(client, `${statesBasePath}/${state}`);
  }

  /**
   * Update Tokens Metadata
   */
  const tokenDir = await fs.readdir(tokensBasePath);

  for (const token of tokenDir) {
    await uploadToken(client, `${tokensBasePath}/${token}`);
  }
};

main();
