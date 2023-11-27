// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {StateTile} from "../../src/StateTile.sol";

contract StateTileV2 is StateTile {
    function isV2() public pure returns (bool) {
        return true;
    }
}
