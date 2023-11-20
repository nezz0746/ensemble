// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {RecordTile} from "./RecordTile.sol";
import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";
import {ERC6551AccountCreator} from "./extensions/ERC6551AccountCreator.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {GeohashLogic} from "./GeohashLogic.sol";
import {NestedAccountExecutor} from "tokenbound/abstract/execution/NestedAccountExecutor.sol";
import {console2} from "forge-std/Test.sol";

struct RecordTileFactoryConfig {
    address registry;
    address accountProxy;
    address implementation;
}

contract RecordTileFactory is ERC6551AccountCreator {
    constructor(
        RecordTileFactoryConfig memory config
    )
        ERC6551AccountCreator(
            config.registry,
            config.accountProxy,
            config.implementation
        )
    {}

    event LocalRecordTokenDeployed(
        address indexed tileAddress,
        string geohash,
        address creator
    );
    event LocalRecordDeployed(
        address indexed tileAddress,
        address indexed recipient,
        string geohash,
        address account
    );

    function _createRecord(
        address recipient,
        string memory geohash
    ) internal virtual returns (address record) {
        RecordTile recordTile = _getRecordTile(geohash);

        (address recordAddress, bool isNew) = _getAccount(
            address(recordTile),
            recipient
        );

        if (isNew) {
            emit LocalRecordDeployed(
                address(recordTile),
                recipient,
                geohash,
                recordAddress
            );
        }

        _mint(recordTile, recipient, _tokenId(recipient));

        return recordAddress;
    }

    function _mint(RecordTile tile, address account, uint256 tokenId) internal {
        if (tile.balanceOf(account) == 0) {
            tile.mint(account, tokenId);
        }
    }

    function _getAccount(
        address recordTile,
        address recipient
    ) internal returns (address accountAddress, bool isNew) {
        uint256 tokenId = _tokenId(recipient);
        address account = _computeAccount(block.chainid, recordTile, tokenId);

        if (_isContract(account)) {
            accountAddress = account;
        } else {
            accountAddress = _createAccount(block.chainid, recordTile, tokenId);

            isNew = true;
        }
    }

    function _getRecordTile(
        string memory geohash
    ) internal returns (RecordTile recordTile) {
        address recordTileAddress = _computeRecordTileAddress(geohash);

        if (_isContract(recordTileAddress)) {
            recordTile = RecordTile(recordTileAddress);
        } else {
            recordTile = RecordTile(
                Create2.deploy(
                    0,
                    keccak256(abi.encodePacked(geohash)),
                    abi.encodePacked(
                        type(RecordTile).creationCode,
                        abi.encode(geohash)
                    )
                )
            );

            emit LocalRecordTokenDeployed(
                address(recordTile),
                geohash,
                msg.sender
            );
        }
    }

    function computeLocalRecord(
        address account,
        string memory geohash
    ) external view returns (address) {
        return _computeLocalRecord(account, geohash);
    }

    function _computeLocalRecord(
        address account,
        string memory geohash
    ) internal view returns (address) {
        return
            _computeAccount(
                block.chainid,
                _computeRecordTileAddress(geohash),
                _tokenId(account)
            );
    }

    function computeRecordTileAddress(
        string memory geohash
    ) external view returns (address) {
        return _computeRecordTileAddress(geohash);
    }

    function _computeRecordTileAddress(
        string memory geohash
    ) internal view returns (address) {
        return
            Create2.computeAddress(
                keccak256(abi.encodePacked(geohash)),
                keccak256(
                    abi.encodePacked(
                        type(RecordTile).creationCode,
                        abi.encode(geohash)
                    )
                )
            );
    }

    function _tokenId(address recipient) internal pure returns (uint256) {
        return uint256(uint160(recipient));
    }

    function _isContract(address _addr) internal view returns (bool) {
        uint256 size;
        assembly {
            size := extcodesize(_addr)
        }
        return size > 0;
    }
}
