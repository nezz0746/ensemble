import { Client } from "@web3-storage/w3up-client";
import { filesFromPaths } from "files-from-path";
import { existsSync, promises as fs } from "fs";

export const uploadState = async (client: Client, stateFolderPath: string) => {
  const name = stateFolderPath.split("/").pop();

  const files = await filesFromPaths([
    `${stateFolderPath}/manifesto.pdf`,
    `${stateFolderPath}/image.jpg`,
  ]);

  const filesCID = await client.uploadDirectory(files);

  const other = JSON.parse(
    await fs.readFile(`${stateFolderPath}/other.json`, "utf-8")
  );

  const metadata = {
    name,
    ...other,
    image: `ipfs://${filesCID}/image.jpg`,
    manifesto: `ipfs://${filesCID}/manifesto.pdf`,
  };

  const metadataFile = new File([JSON.stringify(metadata)], "metadata.json");

  if (!existsSync(`${stateFolderPath}/upload`)) {
    await fs.mkdir(`${stateFolderPath}/upload`);
  }

  const stateCID = await client.uploadFile(metadataFile);

  await fs.writeFile(
    `${stateFolderPath}/upload/latest.json`,
    JSON.stringify(
      {
        metadata: metadata,
        cid: stateCID,
        create_at: new Date().toISOString(),
      },
      null,
      2
    )
  );
};
