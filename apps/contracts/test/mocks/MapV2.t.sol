// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Map} from "../../src/Map.sol";

contract MapV2 is Map {
    function isV2() public pure returns (bool) {
        return true;
    }
}
