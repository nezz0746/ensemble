// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract RecordTile is ERC721 {
    error nonTransferable();

    constructor(string memory geohash) ERC721(geohash, "REC_TILE") {}

    function mint(address account, uint256 tokenId) external {
        _safeMint(account, tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address,
        uint256,
        uint256
    ) internal virtual override {
        if (from != address(0)) revert nonTransferable();
    }
}
