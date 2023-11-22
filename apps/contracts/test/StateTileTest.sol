// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {DSTestFull} from "./DSTestFull.sol";
import {console2} from "forge-std/Test.sol";
import {StateTile} from "../src/StateTile.sol";
import {IStateTileVerifier} from "../src/interfaces/IStateTileVerifier.sol";
import {MapBaseTest} from "./MapBaseTest.t.sol";

contract StateTileTest is MapBaseTest {
    StateTile stateTile;
    address user = label("user");
    address tileCreator = label("tileCreator");

    function setUp() public {
        map.grantRole(map.TILE_CREATOR(), tileCreator);
    }
}
