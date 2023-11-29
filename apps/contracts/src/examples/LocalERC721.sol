// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Map} from "../Map.sol";
import {Localized} from "../extensions/Localized.sol";
import {ERC721A} from "ERC721A/ERC721A.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

struct TokenConfig {
    string name;
    string symbol;
    string uri;
}

contract LocalERC721 is ERC721A, Localized, Ownable {
    string public uri;

    constructor(
        TokenConfig memory config,
        string memory geohash,
        Map map
    ) Localized(map, geohash) ERC721A(config.name, config.symbol) {
        uri = config.uri;
    }

    function mint(
        Localized.LocalCaller memory caller
    ) public onlyLocalAccount(caller) {
        _safeMint(caller.localAccount, 1);
    }

    /**
     * @notice Allows the owner to set the drop URI.
     */
    function setUri(string memory _tokenURI) public onlyOwner {
        uri = _tokenURI;
    }

    function tokenURI(uint256) public view override returns (string memory) {
        return uri;
    }
}
