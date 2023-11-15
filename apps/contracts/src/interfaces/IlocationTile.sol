// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

abstract contract IMap {
    function move(
        address account,
        address tile,
        string memory fromGeohash,
        string memory toGeohash
    ) public virtual;
}

abstract contract ILocationTile {
    function move(
        address account,
        string memory fromRecord,
        string memory toRecord
    ) public virtual;
}
