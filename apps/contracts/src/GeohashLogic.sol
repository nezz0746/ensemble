// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import "solidity-stringutils/strings.sol";

library GeohashLogic {
    using strings for *;

    function isValidGeohash(
        string memory geohash,
        uint256 minPrecision,
        uint256 maxPrecision
    ) internal pure returns (bool) {
        bytes memory b = bytes(geohash);
        uint256 geohashLength = getPrecision(geohash);
        if (geohashLength > maxPrecision || geohashLength < minPrecision)
            return false;
        for (uint i; i < b.length; i++) {
            bytes1 char = b[i];
            if (
                !(char >= 0x30 && char <= 0x39) && //9-0
                !(char >= 0x41 && char <= 0x5A) && //A-Z
                !(char >= 0x61 && char <= 0x7A) //a-z
            ) return false;
        }
        return true;
    }

    function geoHashToUint256(
        string memory geohash
    ) internal pure returns (uint256) {
        bytes32 hash = keccak256(abi.encodePacked(geohash));
        return uint256(hash);
    }

    function getPrecision(string memory input) internal pure returns (uint256) {
        return input.toSlice().len();
    }

    function pop(string memory input) internal pure returns (string memory) {
        bytes memory b = bytes(input);
        uint len = b.length;
        bytes memory c = new bytes(len - 1);
        for (uint i = 0; i < len - 1; i++) {
            c[i] = b[i];
        }
        return string(c);
    }
}
