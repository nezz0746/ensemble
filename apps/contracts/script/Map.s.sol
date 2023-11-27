// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console2} from "forge-std/Script.sol";
import {BaseScript} from "./Base.s.sol";
import {Map} from "../src/Map.sol";
import {StateTile} from "../src/StateTile.sol";
import {RecordTileFactoryConfig} from "../src/RecordTileFactory.sol";
import {NoCheckVerifier} from "../src/verifiers/NoCheckVerifier.sol";
import {UUPSProxy} from "../src/UUPSProxy.sol";
import {StateBeacon} from "../src/StateBeacon.sol";

contract MapScript is BaseScript {
    DeployementChain[] internal _deploymentChains;

    function setUp() public {
        forks[DeployementChain.Anvil] = "local";
        forks[DeployementChain.Goerli] = "goerli";
    }

    function deployMapLocal() public setEnvDeploy(Cycle.Local) {
        _deploymentChains.push(DeployementChain.Anvil);

        _deployMap(_deploymentChains);
    }

    function deployMapTestnets() public setEnvDeploy(Cycle.Testnet) {
        _deploymentChains.push(DeployementChain.Goerli);

        _deployMap(_deploymentChains);
    }

    function _deployMap(
        DeployementChain[] memory targetChains
    ) internal broadcastOn(targetChains) returns (Map map, address state) {
        _deployERC6551Config();

        NoCheckVerifier verifier = new NoCheckVerifier();

        address stateTileImplementation = address(new StateTile());

        StateBeacon stateBeacon = new StateBeacon(stateTileImplementation);

        address mapImplementation = address(new Map());

        map = Map(
            address(
                new UUPSProxy(
                    mapImplementation,
                    abi.encodeWithSelector(
                        Map.initialize.selector,
                        address(stateBeacon),
                        RecordTileFactoryConfig(
                            address(registry),
                            address(accountProxy),
                            address(implementation)
                        ),
                        2,
                        6
                    )
                )
            )
        );

        state = map.createState(
            address(verifier),
            "ipfs://bafkreia4evyfxkoz3vek6m4ewuof6bkpjykgt4ff5prsku2vab2xq43724"
        );

        _saveImplementations(address(map), "Map");
        _saveImplementations(state, "StateTile");
    }
}
