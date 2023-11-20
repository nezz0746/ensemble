// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {MapBaseTest, console2} from "./MapBaseTest.t.sol";
import {NoCheckVerifier} from "../src/verifiers/NoCheckVerifier.sol";
import {StateTile, GeohashLogic} from "../src/StateTile.sol";
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
    address stateAddress;

    function setUp() public {
        NoCheckVerifier verifier = new NoCheckVerifier();

        stateAddress = map.createTile(
            address(verifier),
            "https://example.com/"
        );
    }

    function testMoveUnexploredMaxPrecision() public {
        string memory newGeohash = "su85hb";

        vm.prank(miner);
        map.move(miner, stateAddress, newGeohash, "");
    }

    function testMoveUnexploredMinPrecision() public {
        string memory newGeohash = "su";

        vm.prank(miner);
        map.move(miner, stateAddress, newGeohash, "");
    }

    function testMoveExploredMax() public {
        vm.prank(miner);
        map.move(miner, stateAddress, geohash, "");
    }

    function testMoveExploredMin() public {
        vm.prank(miner);
        map.move(miner, stateAddress, minGeohash, "");
    }

    function testCannotMoveToSameLocation() public {
        vm.prank(miner);
        map.move(miner, stateAddress, geohash, "");
        vm.prank(miner);
        vm.expectRevert();
        map.move(miner, stateAddress, geohash, "");
    }

    function testUserHasLocalRecord() public {
        vm.prank(miner);
        vm.expectRevert();
        map.move(user, stateAddress, geohash, "");
        vm.prank(user);
        map.move(user, stateAddress, geohash, "");

        AccountV3 localRecord = AccountV3(
            payable(map.computeLocalRecord(user, geohash))
        );

        assertEq(localRecord.owner(), user);
    }
}
