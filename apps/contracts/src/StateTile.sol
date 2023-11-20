// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {GeohashLogic} from "./GeohashLogic.sol";
import {IStateTileVerifier} from "./interfaces/IStateTileVerifier.sol";

contract StateTile is ERC1155 {
    address public map;

    IStateTileVerifier public verifier;

    mapping(address => uint256) public accountPosition;

    event Move(address indexed account, string geohash);

    error accountNotSender();
    error movingToSameLocation();
    error nonTransferable();

    constructor(
        address _map,
        address _verifier,
        string memory _baseURI
    ) ERC1155(_baseURI) {
        verifier = IStateTileVerifier(_verifier);
        map = _map;
    }

    modifier onlyMap() {
        if (msg.sender != address(map)) revert accountNotSender();
        _;
    }

    ///////////////////// PUBLIC FUNCTIONS /////////////////////

    function move(
        address account,
        string memory geohash,
        bytes calldata data
    ) public onlyMap {
        require(
            verifier.verifyLocation(account, geohash, data),
            "StateTile: invalid location"
        );

        _move(account, geohash);
    }

    ///////////////////// INTERNAL FUNCTIONS //////////////////

    function _move(address account, string memory geohash) internal {
        uint256 geohashId = GeohashLogic.geoHashToUint256(geohash);
        uint256 previousGeohashId = accountPosition[account];

        if (geohashId == previousGeohashId) revert movingToSameLocation();

        _mint(account, geohashId, 1, "");

        if (previousGeohashId != 0) {
            _burn(account, previousGeohashId, 1);
        }

        accountPosition[account] = geohashId;

        emit Move(account, geohash);
    }

    function _beforeTokenTransfer(
        address,
        address from,
        address to,
        uint256[] memory,
        uint256[] memory,
        bytes memory
    ) internal virtual override {
        if (from != address(0) && to != address(0)) revert nonTransferable();
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC1155) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
