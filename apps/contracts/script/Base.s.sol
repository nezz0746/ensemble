// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console2} from "forge-std/Script.sol";
import {ERC6551Registry} from "erc6551/ERC6551Registry.sol";
import {AccountV3} from "tokenbound/AccountV3.sol";
import {AccountProxy} from "tokenbound/AccountProxy.sol";
import {AccountGuardian} from "tokenbound/AccountGuardian.sol";
import {Multicall3} from "multicall-authenticated/Multicall3.sol";

contract BaseScript is Script {
    ERC6551Registry registry;
    AccountProxy accountProxy;
    AccountGuardian guardian;
    Multicall3 forwarder;
    AccountV3 implementation;

    enum Cycle {
        Local,
        Testnet,
        Mainnet
    }

    enum DeployementChain {
        Anvil,
        Goerli
    }
    string internal mnemonic =
        "test test test test test test test test test test test junk";

    uint256 internal deployerPrivateKey;

    mapping(DeployementChain => string forkId) public forks;

    modifier broadcastOn(DeployementChain[] memory targetChains) {
        for (uint256 i = 0; i < targetChains.length; i++) {
            vm.createSelectFork(forks[targetChains[i]]);
            console2.log("Broadcasting on chain: ", forks[targetChains[i]]);
            vm.startBroadcast(deployerPrivateKey);
            _;
            vm.stopBroadcast();
            console2.log(
                "Broadcasting on chain: ",
                forks[targetChains[i]],
                " done"
            );
        }
    }

    modifier setEnvDeploy(Cycle cycle) {
        if (cycle == Cycle.Local) {
            (, deployerPrivateKey) = deriveRememberKey({
                mnemonic: mnemonic,
                index: 1
            });
        } else if (cycle == Cycle.Testnet) {
            deployerPrivateKey = vm.envUint("TESTNET_PK");
        } else if (cycle == Cycle.Mainnet) {
            deployerPrivateKey = vm.envUint("MAINNET_PK");
        }

        _;
    }

    function _saveImplementations(
        address contractAddress,
        string memory contractName
    ) internal {
        string memory objectName = "export";
        string memory json;

        string memory filePathWithEncodePacked = string(
            abi.encodePacked(
                "./deployments/",
                vm.toString(block.chainid),
                "/",
                contractName,
                ".json"
            )
        );

        json = vm.serializeAddress(objectName, "address", contractAddress);

        vm.writeFile(filePathWithEncodePacked, json);
    }

    function _deployERC6551Config(
        DeployementChain[] memory targetChains
    ) internal broadcastOn(targetChains) {
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
    }
}
