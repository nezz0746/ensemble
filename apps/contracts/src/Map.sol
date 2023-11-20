// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {GeohashLogic} from "./GeohashLogic.sol";
import {RecordTileFactory, RecordTileFactoryConfig} from "./RecordTileFactory.sol";
import {StateTileFactory} from "./StateTileFactory.sol";
import {StateTile} from "./StateTile.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract Map is RecordTileFactory, StateTileFactory, AccessControl {
    bytes32 public constant TILE_CREATOR = keccak256("TILE_CREATOR");

    uint256 internal _minPrecision;

    uint256 internal _maxPrecision;

    error accountNotSender();

    constructor(
        RecordTileFactoryConfig memory recordTileConfiguration,
        uint256 minPrecision,
        uint256 maxPrecision
    ) RecordTileFactory(recordTileConfiguration) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(TILE_CREATOR, msg.sender);

        _minPrecision = minPrecision;

        _maxPrecision = maxPrecision;
    }

    modifier onlyValidAccount(address account) {
        if (tx.origin != msg.sender || account != msg.sender)
            revert accountNotSender();
        _;
    }

    function move(
        address account,
        address state,
        string memory geohash,
        bytes calldata data
    ) external {
        require(msg.sender == account, "Map: account not sender");
        require(
            GeohashLogic.isValidGeohash(geohash, _minPrecision, _maxPrecision),
            "Map: invalid geohash"
        );

        // Get or create sender local record
        _createRecord(account, geohash);

        // Move account to new location
        StateTile(state).move(account, geohash, data);
    }

    function createTile(
        address verifier,
        string memory baseURI
    ) external onlyRole(TILE_CREATOR) returns (address tileAddress) {
        return _createNewState(address(this), verifier, baseURI);
    }
}
