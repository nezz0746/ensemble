// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {MapBaseTest, Map, console2, RecordTileFactoryConfig} from "./MapBaseTest.t.sol";
import {NoCheckVerifier} from "../src/verifiers/NoCheckVerifier.sol";
import {StateTile, GeohashLogic} from "../src/StateTile.sol";
import {AccountV3} from "tokenbound/AccountV3.sol";
import {NestedAccountExecutor} from "tokenbound/abstract/execution/NestedAccountExecutor.sol";
import {MockLocalToken} from "./mocks/MockLocalToken.sol";
import {MapV2} from "./mocks/MapV2.t.sol";
import {StateTileV2} from "./mocks/StateTileV2.t.sol";
import {BeaconProxy} from "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";

contract MapTest is MapBaseTest {
    address miner = label("miner");
    address user = label("user");
    string geohash = "sbr42g";
    string minGeohash = "sb";
    address stateAddress;

    function setUp() public {
        NoCheckVerifier verifier = new NoCheckVerifier();

        stateAddress = map.createState(
            address(verifier),
            "https://example.com/"
        );
    }

    function testMoveUnexploredMaxPrecision() public {
        string memory newGeohash = "su85hb";

        vm.prank(miner);
        map.move(miner, stateAddress, newGeohash, "");
    }

    function testMoveUnexploredMinPrecision() public {
        string memory newGeohash = "su";

        vm.prank(miner);
        map.move(miner, stateAddress, newGeohash, "");
    }

    function testMoveExploredMax() public {
        vm.prank(miner);
        map.move(miner, stateAddress, geohash, "");
    }

    function testMoveExploredMin() public {
        vm.prank(miner);
        map.move(miner, stateAddress, minGeohash, "");
    }

    function testCannotMoveToSameLocation() public {
        vm.prank(miner);
        map.move(miner, stateAddress, geohash, "");
        vm.prank(miner);
        vm.expectRevert();
        map.move(miner, stateAddress, geohash, "");
    }

    function testUserHasLocalRecord() public {
        vm.prank(miner);
        vm.expectRevert();
        map.move(user, stateAddress, geohash, "");
        vm.prank(user);
        map.move(user, stateAddress, geohash, "");

        AccountV3 localRecord = AccountV3(
            payable(map.computeLocalRecord(user, geohash))
        );

        assertEq(localRecord.owner(), user);
    }

    function testUpgradeMap() public {
        MapV2 mapV2 = new MapV2();

        // No upgrade
        vm.expectRevert();
        MapV2(address(map)).isV2();

        vm.prank(vm.addr(69));
        vm.expectRevert();
        // Not admin
        map.upgradeTo(address(mapV2));

        // Admin
        map.upgradeTo(address(mapV2));

        assertEq(MapV2(address(map)).isV2(), true);
    }

    function testUpgradeStateBeacon() public {
        StateTile state = StateTile(stateAddress);

        StateTileV2 stateTileV2Implementation = new StateTileV2();

        // No upgrade
        vm.expectRevert();
        StateTileV2(address(state)).isV2();

        vm.prank(vm.addr(69));
        vm.expectRevert();
        // Not admin
        stateBeacon.upgradeTo(address(stateTileV2Implementation));

        // Admin
        stateBeacon.upgradeTo(address(stateTileV2Implementation));

        assertEq(StateTileV2(address(state)).isV2(), true);
        assertEq(StateTileV2(address(state)).map(), address(map));
    }
}
