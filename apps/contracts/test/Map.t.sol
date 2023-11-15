// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {MapBaseTest, console2} from "./MapBaseTest.t.sol";
import {NoCheckVerifier} from "../src/verifiers/NoCheckVerifier.sol";
import {LocationTile, GeohashLogic} from "../src/LocationTile.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {AccountV3} from "tokenbound/AccountV3.sol";
import {NestedAccountExecutor} from "tokenbound/abstract/execution/NestedAccountExecutor.sol";

contract MockLocalToken is ERC721 {
    constructor() ERC721("LOCAL", "MOCK_LOCAL_TOKEN") {}

    function mint(address account, uint256 tokenId) external {
        _safeMint(account, tokenId);
    }
}

contract MapTest is MapBaseTest {
    address miner = label("miner");
    address user = label("user");
    string geohash = "sbr42g";
    string minGeohash = "sb";
    address tileAddress;

    function setUp() public {
        NoCheckVerifier verifier = new NoCheckVerifier();

        tileAddress = map.createTile(address(verifier), "https://example.com/");
    }

    function testGetBaseGeohash() public {
        string memory baseGeohash = GeohashLogic.getBaseGeohash(geohash, 2);
        assertEq(baseGeohash, "sb");
    }

    function testMoveUnexploredMaxPrecision() public {
        string memory newGeohash = "su85hb";

        vm.prank(miner);
        map.move(miner, tileAddress, newGeohash, "");
    }

    function testMoveUnexploredMinPrecision() public {
        string memory newGeohash = "su";

        vm.prank(miner);
        map.move(miner, tileAddress, newGeohash, "");
    }

    function testMoveExploredMax() public {
        vm.prank(miner);
        map.move(miner, tileAddress, geohash, "");
    }

    function testMoveExploredMin() public {
        vm.prank(miner);
        map.move(miner, tileAddress, minGeohash, "");
    }

    function testCannotMoveToSameLocation() public {
        vm.prank(miner);
        map.move(miner, tileAddress, geohash, "");
        vm.prank(miner);
        vm.expectRevert();
        map.move(miner, tileAddress, geohash, "");
    }

    function testUserHasLocalRecord() public {
        vm.prank(miner);
        vm.expectRevert();
        map.move(user, tileAddress, geohash, "");
        vm.prank(user);
        map.move(user, tileAddress, geohash, "");

        AccountV3 localRecord = AccountV3(
            payable(map.computeLocalRecord(user, geohash))
        );

        assertEq(localRecord.owner(), user);
    }
}
