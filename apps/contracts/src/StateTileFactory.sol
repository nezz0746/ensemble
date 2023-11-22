// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {StateTile} from "./StateTile.sol";
import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";

contract StateTileFactory {
    event TileCreated(
        address indexed stateAddress,
        address indexed verifier,
        address creator,
        string baseURI
    );

    function _createNewState(
        address map,
        address verifier,
        string memory baseURI
    ) internal returns (address stateAddress) {
        stateAddress = Create2.deploy(
            0,
            bytes32(""),
            abi.encodePacked(
                type(StateTile).creationCode,
                abi.encode(map, verifier, baseURI)
            )
        );

        emit TileCreated(stateAddress, verifier, msg.sender, baseURI);
    }
}
