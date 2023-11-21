// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Map} from "../Map.sol";
import {Localized} from "../extensions/Localized.sol";

contract LocalCounter is Localized {
    uint256 public count;

    constructor(Map map, string memory geohash) Localized(map, geohash) {
        count = 0;
    }

    function increment(
        Localized.LocalCaller memory caller
    ) public onlyLocalAccount(caller) {
        count += 1;
    }
}
