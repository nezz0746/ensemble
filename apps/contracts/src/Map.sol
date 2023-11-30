// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {GeohashLogic} from "./GeohashLogic.sol";
import {RecordTileFactory, RecordTileFactoryConfig} from "./RecordTileFactory.sol";
import {StateTileFactory} from "./StateTileFactory.sol";
import {StateTile} from "./StateTile.sol";
import {AccessControlUpgradeable} from "@openzeppelin-upgradeable/access/AccessControlUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin-upgradeable/access/OwnableUpgradeable.sol";
import {UUPSUpgradeable} from "@openzeppelin-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract Map is
    RecordTileFactory,
    StateTileFactory,
    AccessControlUpgradeable,
    UUPSUpgradeable
{
    bytes32 public constant TILE_CREATOR = keccak256("TILE_CREATOR");

    uint256 internal _minPrecision;

    uint256 internal _maxPrecision;

    address internal _stateBeacon;

    error accountNotSender();

    constructor() {
        _disableInitializers();
    }

    function initialize(
        address stateBeacon,
        RecordTileFactoryConfig memory recordTileConfiguration,
        uint256 minPrecision,
        uint256 maxPrecision
    ) public initializer {
        __RecordTileFactory__init(recordTileConfiguration);
        __AccessControl_init();
        __UUPSUpgradeable_init();
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(TILE_CREATOR, msg.sender);

        _minPrecision = minPrecision;

        _maxPrecision = maxPrecision;

        _stateBeacon = stateBeacon;
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

    function createRecord(address account, string memory geohash) external {
        require(msg.sender == account, "Map: account not sender");
        require(
            GeohashLogic.isValidGeohash(geohash, _minPrecision, _maxPrecision),
            "Map: invalid geohash"
        );

        _createRecord(account, geohash);
    }

    function createState(
        address verifier,
        string memory baseURI
    ) external onlyRole(TILE_CREATOR) returns (address tileAddress) {
        return _createNewState(_stateBeacon, address(this), verifier, baseURI);
    }

    function _authorizeUpgrade(
        address
    ) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}
}
