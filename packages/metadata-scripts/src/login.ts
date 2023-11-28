import { Client, create } from "@web3-storage/w3up-client";

export const login = async (email: `${string}@${string}`): Promise<Client> => {
  const client = await create();
  await client.login(email);
  await client.setCurrentSpace(
    "did:key:z6MkqEx57Ydz9ptcuA1Vd5L7BZ7Afz2Qo6Zz33aixvfQAv68"
  );

  return client;
};
