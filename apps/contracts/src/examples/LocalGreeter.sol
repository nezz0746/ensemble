// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Map} from "../Map.sol";
import {Localized} from "../extensions/Localized.sol";

contract LocalGreeter is Localized {
    string public greeting;

    constructor(Map map, string memory geohash) Localized(map, geohash) {}

    function greet(
        Localized.LocalCaller memory caller,
        string memory _greeting
    ) public onlyLocalAccount(caller) {
        greeting = _greeting;
    }
}
