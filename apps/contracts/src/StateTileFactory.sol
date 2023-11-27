// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {StateTile} from "./StateTile.sol";
import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";
import {BeaconProxy} from "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";

contract StateTileFactory {
    event TileCreated(
        address indexed stateAddress,
        address indexed verifier,
        address creator,
        string baseURI
    );

    function _createNewState(
        address stateBeacon,
        address map,
        address verifier,
        string memory baseURI
    ) internal returns (address stateAddress) {
        stateAddress = address(
            new BeaconProxy(
                stateBeacon,
                abi.encodeWithSelector(
                    StateTile.initialize.selector,
                    map,
                    verifier,
                    baseURI
                )
            )
        );

        emit TileCreated(stateAddress, verifier, msg.sender, baseURI);
    }
}
