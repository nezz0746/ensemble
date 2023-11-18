// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {DSTestFull} from "./DSTestFull.sol";
import {console2} from "forge-std/Test.sol";
import {ERC6551Registry} from "erc6551/ERC6551Registry.sol";
import {AccountProxy} from "tokenbound/AccountProxy.sol";
import {AccountV3} from "tokenbound/AccountV3.sol";
import {AccountV3Upgradable} from "tokenbound/AccountV3Upgradable.sol";
import {Multicall3} from "multicall-authenticated/Multicall3.sol";
import {AccountGuardian} from "tokenbound/AccountGuardian.sol";
import {Map} from "../src/Map.sol";
import {RecordTileFactoryConfig} from "../src/RecordTileFactory.sol";

contract MapBaseTest is DSTestFull {
    ERC6551Registry registry;
    AccountProxy accountProxy;
    AccountGuardian guardian;
    Multicall3 forwarder;
    AccountV3 implementation;
    AccountV3Upgradable upgradableImplementation;
    Map map;

    constructor() {
        registry = new ERC6551Registry();
        guardian = new AccountGuardian(address(this));
        forwarder = new Multicall3();
        implementation = new AccountV3(
            address(1),
            address(forwarder),
            address(registry),
            address(guardian)
        );

        accountProxy = new AccountProxy(
            address(guardian),
            address(implementation)
        );

        map = new Map(
            RecordTileFactoryConfig(
                address(registry),
                address(accountProxy),
                address(implementation)
            ),
            2,
            6
        );
    }
}
