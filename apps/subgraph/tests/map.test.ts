import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
} from "matchstick-as/assembly/index";
import { Address } from "@graphprotocol/graph-ts";
import { handleLocalRecordTokenDeployed } from "../src/map";
import { createRecordTileCreatedEvent } from "./map-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let tileAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    );
    let geohash = "Example string value";
    let creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    );
    let newRecordTileCreatedEvent = createRecordTileCreatedEvent(
      tileAddress,
      geohash,
      creator
    );
    handleLocalRecordTokenDeployed(newRecordTileCreatedEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("RecordTileCreated created and stored", () => {
    assert.entityCount("RecordTileCreated", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "RecordTileCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tileAddress",
      "0x0000000000000000000000000000000000000001"
    );
    assert.fieldEquals(
      "RecordTileCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "geohash",
      "Example string value"
    );
    assert.fieldEquals(
      "RecordTileCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "creator",
      "0x0000000000000000000000000000000000000001"
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
