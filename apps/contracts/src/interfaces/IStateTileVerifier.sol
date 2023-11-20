// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

abstract contract IStateTileVerifier {
    function verifyLocation(
        address account,
        string memory geohash,
        bytes calldata data
    ) public virtual returns (bool);
}
