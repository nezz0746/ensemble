import { configureStore } from "@reduxjs/toolkit";
import { subgraphAPI } from "./subgraph";
import React from "react";
import { Provider } from "react-redux";
import { LocalAccountProvider } from "../src/LocalAccountButton";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { chains } from "wagmi-config";
import { DaisyTheme } from "shared-config";
import { nftAPI } from "./nft";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [subgraphAPI.reducerPath]: subgraphAPI.reducer,
    [nftAPI.reducerPath]: nftAPI.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(subgraphAPI.middleware)
      .concat(nftAPI.middleware),
});

export const InstateProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: DaisyTheme;
}) => {
  return (
    <RainbowKitProvider
      theme={darkTheme({
        accentColor: theme.secondary,
        accentColorForeground: theme["base-100"],
        borderRadius: "medium",
        fontStack: "system",
        overlayBlur: "small",
      })}
      chains={chains}
    >
      <Provider store={store}>
        <LocalAccountProvider>{children}</LocalAccountProvider>
      </Provider>
    </RainbowKitProvider>
  );
};

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)
