// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {IStateTileVerifier} from "../interfaces/IStateTileVerifier.sol";

/**
 * @title NoCheckVerifier
 * @author nezzar.eth
 * @notice This verifier allows any movement accross state tiles
 */
contract NoCheckVerifier is IStateTileVerifier {
    function verifyLocation(
        address,
        string memory,
        bytes calldata
    ) public pure override returns (bool) {
        // Boundless Bytes: Go where you please <3
        return true;
    }
}
