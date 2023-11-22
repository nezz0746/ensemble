// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {IStateTileVerifier} from "../interfaces/IStateTileVerifier.sol";

contract NoCheckVerifier is IStateTileVerifier {
    function verifyLocation(
        address,
        string memory,
        bytes calldata
    ) public pure override returns (bool) {
        return true;
    }
}
