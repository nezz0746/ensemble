// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {ILocationTileVerifier} from "../interfaces/ILocationTileVerifier.sol";
import {GeohashLogic} from "../GeohashLogic.sol";

contract ManagedVerifier is ILocationTileVerifier, AccessControl {
    mapping(uint256 => bool) public verifiedLocations;

    mapping(address => bool) public allowedAccounts;

    bytes32 public constant LAND_MANAGER = keccak256("LAND_MANAGER");

    bytes32 public constant ACCOUNT_MANAGER = keccak256("ACCOUNT_MANAGER");

    constructor(address defaultManager) {
        _setupRole(DEFAULT_ADMIN_ROLE, defaultManager);
        _setupRole(LAND_MANAGER, defaultManager);
        _setupRole(ACCOUNT_MANAGER, defaultManager);
    }

    function verifyLocation(
        address account,
        string memory geohash,
        bytes calldata
    ) public view override returns (bool) {
        require(
            allowedAccounts[account],
            "ManagedVerifier: account not allowed"
        );
        require(
            verifiedLocations[GeohashLogic.geoHashToUint256(geohash)],
            "ManagedVerifier: location not verified"
        );

        return true;
    }

    function setAllowedAccount(
        address account,
        bool allowed
    ) public onlyRole(ACCOUNT_MANAGER) {
        allowedAccounts[account] = allowed;
    }

    function setVerifiedLocation(
        string memory geohash,
        bool verified
    ) public onlyRole(LAND_MANAGER) {
        verifiedLocations[GeohashLogic.geoHashToUint256(geohash)] = verified;
    }
}
