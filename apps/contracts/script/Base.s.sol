// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console2} from "forge-std/Script.sol";
import {ERC6551Registry} from "erc6551/ERC6551Registry.sol";
import {AccountV3Upgradable} from "tokenbound/AccountV3Upgradable.sol";
import {AccountProxy} from "tokenbound/AccountProxy.sol";
import {AccountGuardian} from "tokenbound/AccountGuardian.sol";
import {Multicall3} from "multicall-authenticated/Multicall3.sol";

contract BaseScript is Script {
    ERC6551Registry public registry =
        ERC6551Registry(0x000000006551c19487814612e58FE06813775758);
    AccountProxy public accountProxy =
        AccountProxy(payable(0x55266d75D1a14E4572138116aF39863Ed6596E7F));
    AccountV3Upgradable public implementation =
        AccountV3Upgradable(
            payable(0x41C8f39463A868d3A88af00cd0fe7102F30E44eC)
        );
    AccountGuardian internal _guardian;
    Multicall3 internal _forwarder;

    enum Cycle {
        Local,
        Testnet,
        Mainnet
    }

    Cycle internal _cycle;

    enum DeployementChain {
        Anvil,
        Goerli
    }
    string internal constant TEST_MNEMONIC =
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

    modifier broadcastForLocalTestData() {
        if (_cycle != Cycle.Local) {
            revert();
        }

        for (uint256 i = 1; i < 10; i++) {
            (, uint256 accountPrivateKey) = deriveRememberKey({
                mnemonic: TEST_MNEMONIC,
                index: uint32(i)
            });
            vm.startBroadcast(accountPrivateKey);
            _;
            vm.stopBroadcast();
        }
    }

    modifier setEnvDeploy(Cycle cycle) {
        _cycle = cycle;
        if (cycle == Cycle.Local) {
            (, deployerPrivateKey) = deriveRememberKey({
                mnemonic: TEST_MNEMONIC,
                index: 0
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

    function _deployERC6551Config() internal {
        (, address sender, ) = vm.readCallers();

        // Exception to cycle to deploy ERC6551Config on local chain
        if (_cycle == Cycle.Local) {
            registry = new ERC6551Registry();

            _guardian = new AccountGuardian(sender);

            _forwarder = new Multicall3();

            implementation = new AccountV3Upgradable(
                address(1),
                address(_forwarder),
                address(registry),
                address(_guardian)
            );

            accountProxy = new AccountProxy(
                address(_guardian),
                address(implementation)
            );
        }

        _saveImplementations(address(registry), "ERC6551Registry");
        _saveImplementations(address(accountProxy), "AccountProxy");
    }
}
