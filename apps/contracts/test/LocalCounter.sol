// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {DSTestFull} from "./DSTestFull.sol";
import {console2} from "forge-std/Test.sol";
import {StateTile} from "../src/StateTile.sol";
import {IStateTileVerifier} from "../src/interfaces/IStateTileVerifier.sol";
import {MapBaseTest} from "./MapBaseTest.t.sol";
import {LocalCounter} from "../src/examples/LocalCounter.sol";
import {AccountV3} from "tokenbound/AccountV3.sol";
import {Localized} from "../src/extensions/Localized.sol";

contract LocalCounterTest is MapBaseTest {
    address user = label("user");

    function setUp() public {}

    function testOnlyLocalUserCanIncrement() public {
        string memory localGeohash = "u0";

        LocalCounter localCounter = new LocalCounter(map, localGeohash);

        AccountV3 userLocalRecord = AccountV3(
            payable(map.computeLocalRecord(user, localGeohash))
        );

        assertEq(localCounter.count(), 0);

        // Account exists and user calls with local Account, should succeed
        vm.prank(user);
        map.move(user, state, localGeohash, "");

        vm.prank(user);
        userLocalRecord.execute(
            address(localCounter),
            0,
            abi.encodeWithSelector(
                localCounter.increment.selector,
                Localized.LocalCaller(user, address(userLocalRecord))
            ),
            0
        );

        assertEq(localCounter.count(), 1);

        // Impersonate user and call directly local contract
        vm.prank(vm.addr(69));
        vm.expectRevert();
        localCounter.increment(
            Localized.LocalCaller(user, address(userLocalRecord))
        );

        // Account exists and user calls with non-local Account, should revert
        string memory newGeohash = "u1";
        vm.prank(user);
        map.move(user, state, newGeohash, "");

        AccountV3 userNewLocalRecord = AccountV3(
            payable(map.computeLocalRecord(user, newGeohash))
        );

        vm.prank(user);
        vm.expectRevert();
        userNewLocalRecord.execute(
            address(localCounter),
            0,
            abi.encodeWithSelector(
                localCounter.increment.selector,
                Localized.LocalCaller(user, address(userNewLocalRecord))
            ),
            0
        );
    }
}
