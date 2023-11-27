// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {UpgradeableBeacon} from "@openzeppelin/contracts/proxy/beacon/UpgradeableBeacon.sol";

contract StateBeacon is UpgradeableBeacon {
    constructor(address implementation) UpgradeableBeacon(implementation) {}
}
