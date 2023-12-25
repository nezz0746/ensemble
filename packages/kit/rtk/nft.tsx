import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAlchemyNFT } from "shared-config";

export const nftAPI = createApi({
  reducerPath: "nftAPI",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    listAccountNFTs: builder.query({
      queryFn: async ({ chainId, account }) => {
        const nfts = getAlchemyNFT(chainId);

        const { ownedNfts } = await nfts.getNftsForOwner(account);

        return {
          data: ownedNfts,
        };
      },
    }),
  }),
});

export const { useListAccountNFTsQuery } = nftAPI;
