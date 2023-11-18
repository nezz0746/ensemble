// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {LocationTile} from "./LocationTile.sol";
import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";

contract LocationTileFactory {
    event TileCreated(address indexed tileAddress, address creator);

    function _createNewTile(
        address map,
        address verifier,
        string memory baseURI
    ) internal returns (address tileAddress) {
        tileAddress = Create2.deploy(
            0,
            bytes32(""),
            abi.encodePacked(
                type(LocationTile).creationCode,
                abi.encode(map, verifier, baseURI)
            )
        );

        emit TileCreated(tileAddress, msg.sender);
    }
}
