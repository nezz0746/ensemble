// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Map} from "../Map.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {TokenConfig, LocalERC721} from "./LocalERC721.sol";

struct LocalTokenConfig {
    TokenConfig config;
    string geohash;
}

contract LocalDistributor is Ownable {
    Map internal _map;

    event LocalTokenDistribution(
        string geohash,
        address tokenAddress,
        string tokenURI
    );

    constructor(Map map) {
        _map = map;
    }

    function distribute(
        LocalTokenConfig[] memory localTokenDistribution
    ) public onlyOwner {
        for (uint256 i = 0; i < localTokenDistribution.length; i++) {
            LocalTokenConfig memory localTokenConfig = localTokenDistribution[
                i
            ];

            LocalERC721 localERC721 = new LocalERC721(
                localTokenConfig.config,
                localTokenConfig.geohash,
                _map
            );

            emit LocalTokenDistribution(
                localTokenConfig.geohash,
                address(localERC721),
                localTokenConfig.config.uri
            );
        }
    }
}
