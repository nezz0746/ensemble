import { Client } from "@web3-storage/w3up-client";
import { filesFromPaths } from "files-from-path";
import { existsSync, promises as fs } from "fs";

export const uploadToken = async (client: Client, tokenFolderPath: string) => {
  const name = tokenFolderPath.split("/").pop();

  const files = await filesFromPaths([
    `${tokenFolderPath}/image.jpeg`,
  ]);

  let imageCID = await client.uploadFile(files[0]);

  const metadata = {
    name: "Local Token: " + name,
    image: `ipfs://${imageCID}`,
    description: ""
  };

  const metadataFile = new File([JSON.stringify(metadata)], "metadata.json");

  if (!existsSync(`${tokenFolderPath}/upload`)) {
    await fs.mkdir(`${tokenFolderPath}/upload`);
  }

  const tokenCID = await client.uploadFile(metadataFile);

  await fs.writeFile(
    `${tokenFolderPath}/upload/latest.json`,
    JSON.stringify(
      {
        metadata: metadata,
        cid: tokenCID,
        create_at: new Date().toISOString(),
      },
      null,
      2
    )
  );
};
