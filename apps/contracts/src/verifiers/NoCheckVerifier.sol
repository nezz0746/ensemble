// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {ILocationTileVerifier} from "../interfaces/ILocationTileVerifier.sol";

contract NoCheckVerifier is ILocationTileVerifier {
    function verifyLocation(
        address,
        string memory,
        bytes calldata
    ) public pure override returns (bool) {
        return true;
    }
}
