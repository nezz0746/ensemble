# Instate - Localized Web3

<img src="./InstateGrey.jpg">

Instate is an conceptual protocol created to build localized applications with local accounts. As well as a factory to create customizable network states.

## @instate/kit

This kit exports Rainbowkit's original ConnectButton with an additional LocalAccountButton that let user's pick the local account they would like to use for your application. Just like for networks, you can require a certain location and
propose a local account switch to your user, or (soon) a move if the user doesn't have a local account in your application vicinity.

<img src="./LocalAccountButton.png" />

```tsx

import { ConnectButton } from "@instate/kit"

const YourApp = () => {
  return <ConnectButton>
}

```

## Localized Mint

For you smart contract, you can then use a **Localized** extension in order to allow only certain local accounts to call a specific function. For the demo available in the InstateScan explorer: Localized Mint, you can only mint a specific Token like such:

```solidity
contract MyLocalNFT is ERC721, Localized {
  string internal _geohash;

  constructor(Map map, string memory geohash) Localized(map, geohash) {}

  function mint(LocalCaller caller) onlyLocalAccount(caller) {
    _safeMint(caller.account)
  }
}
```

Deployments:

|Contract|Network|Proxy|Implementation|
|----|----|----|----|
|Map|Goerli|0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339|0x6D87C1647f228Baf8DE0374FCd7FdEBF6900fdFF|
|----|----|----|

More about it here: [Notion](https://savory-jumbo-54b.notion.site/Instate-Protocol-Localized-web3-d0653d226bf44831b8d07200d31d8f54?pvs=4)