// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console2} from "forge-std/Script.sol";
import {BaseScript} from "./Base.s.sol";
import {Map} from "../src/Map.sol";
import {RecordTileFactoryConfig} from "../src/RecordTileFactory.sol";

contract MapScript is BaseScript {
    DeployementChain[] deploymentChains;

    function setUp() public {
        forks[DeployementChain.Anvil] = "local";
        forks[DeployementChain.Goerli] = "goerli";
    }

    function deployMapLocal() public setEnvDeploy(Cycle.Local) {
        deploymentChains.push(DeployementChain.Anvil);

        _deployERC6551Config(deploymentChains);
        _deployMap(deploymentChains);
    }

    function deployMapTesnet() public setEnvDeploy(Cycle.Testnet) {}

    function _deployMap(
        DeployementChain[] memory targetChains
    ) internal broadcastOn(targetChains) {
        // Map map = new Map(
        //     RecordTileFactoryConfig(
        //         address(registry),
        //         address(accountProxy),
        //         address(implementation)
        //     ),
        //     2,
        //     6
        // );
    }
}
