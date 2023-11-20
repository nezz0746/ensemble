import { subgraphUrls } from "@/services/constants";
import { createApi } from "@reduxjs/toolkit/query/react";
import request, { ClientError } from "graphql-request";

type SubgraphGraphQLBaseQueryParams = {
  document: string;
  variables: Record<string, any>;
  chainId: number;
};

export const subgraphQuery = <T>() => async ({
  document,
  variables,
  chainId,
}: SubgraphGraphQLBaseQueryParams): Promise<{ data: T } | { error: any }> => {
  try {
    const baseUrl = subgraphUrls[chainId];

    const result = await request(baseUrl, document, variables);

    return { data: result } as { data: T };
  } catch (error) {
    if (error instanceof ClientError) {
      return { error: { status: error.response.status, data: error } };
    }
    return { error: { status: 500, data: error } };
  }
};

export const subgraphAPI = createApi({
  reducerPath: "subgraphAPI",
  baseQuery: subgraphQuery(),
  endpoints: (builder) => ({}),
});
