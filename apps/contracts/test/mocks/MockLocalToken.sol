// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MockLocalToken is ERC721 {
    constructor() ERC721("LOCAL", "MOCK_LOCAL_TOKEN") {}

    function mint(address account, uint256 tokenId) external {
        _safeMint(account, tokenId);
    }
}
