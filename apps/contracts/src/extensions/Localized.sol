// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Map} from "../Map.sol";

contract Localized {
    Map internal _map;
    string internal _geohash;

    struct LocalCaller {
        address rootAgent;
        address localAccount;
    }

    constructor(Map map, string memory geohash) {
        _map = map;
        _geohash = geohash;
    }

    modifier onlyLocalAccount(LocalCaller memory caller) {
        require(_isLocalAccount(caller), "LocalContract: not local account");

        _;
    }

    function _isLocalAccount(
        LocalCaller memory caller
    ) internal view returns (bool) {
        address computedLocalAccount = _map.computeLocalRecord(
            caller.rootAgent,
            _geohash
        );

        if (
            (computedLocalAccount != caller.localAccount) ||
            (msg.sender != computedLocalAccount)
        ) {
            return false;
        }

        return true;
    }
}
