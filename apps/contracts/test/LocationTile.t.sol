// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {DSTestFull} from "./DSTestFull.sol";
import {console2} from "forge-std/Test.sol";
import {LocationTile} from "../src/LocationTile.sol";
import {ILocationTileVerifier} from "../src/interfaces/ILocationTileVerifier.sol";
import {MapBaseTest} from "./MapBaseTest.t.sol";

contract LocationTileTest is MapBaseTest {
    LocationTile locationTile;
    address user = label("user");
    address tileCreator = label("tileCreator");

    function setUp() public {
        map.grantRole(map.TILE_CREATOR(), tileCreator);
    }
}
