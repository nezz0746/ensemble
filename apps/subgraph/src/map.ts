import {
  LocalRecordTokenDeployed as LocalRecordTokenDeployedEvent,
  LocalRecordDeployed as LocalRecordDeployedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  TileCreated as TileCreatedEvent,
} from "../generated/Map/Map";
import { LocationTile as LocationTileTemplate } from "../generated/templates";
import {
  Agent,
  LocalRecord,
  RecordTileCreated,
  RecordTileEntered,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TileCreated,
  NetworkState,
} from "../generated/schema";

export function handleLocalRecordTokenDeployed(
  event: LocalRecordTokenDeployedEvent
): void {
  let entity = new RecordTileCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tileAddress = event.params.tileAddress;
  entity.geohash = event.params.geohash;
  entity.creator = event.params.creator;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleLocalRecordDeployed(
  event: LocalRecordDeployedEvent
): void {
  let entity = new RecordTileEntered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tileAddress = event.params.tileAddress;
  entity.recipient = event.params.recipient;
  entity.geohash = event.params.geohash;
  entity.account = event.params.account;

  let agent = Agent.load(event.params.recipient.toHexString());

  if (agent == null) {
    agent = new Agent(event.params.recipient.toHexString());

    agent.save();
  }

  let localRecord = LocalRecord.load(event.params.account.toHexString());

  if (localRecord == null) {
    localRecord = new LocalRecord(event.params.account.toHexString());
  }

  localRecord.owner = event.params.recipient.toHexString();
  localRecord.geohash = event.params.geohash;
  localRecord.localRecordERC721 = event.params.tileAddress.toHexString();

  localRecord.save();

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTileCreated(event: TileCreatedEvent): void {
  let entity = new TileCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tileAddress = event.params.tileAddress;
  entity.creator = event.params.creator;
  entity.verifier = event.params.verifier;
  entity.baseURI = event.params.baseURI;

  let n_state = NetworkState.load(event.params.tileAddress.toHexString());

  if (n_state == null) {
    n_state = new NetworkState(event.params.tileAddress.toHexString());
  }
  n_state.creator = event.params.creator;
  n_state.verifier = event.params.verifier;
  n_state.baseURI = event.params.baseURI;
  LocationTileTemplate.create(event.params.tileAddress);
  n_state.save();

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

/**
 *
 *
 *
 *
 */

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.role = event.params.role;
  entity.previousAdminRole = event.params.previousAdminRole;
  entity.newAdminRole = event.params.newAdminRole;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.role = event.params.role;
  entity.account = event.params.account;
  entity.sender = event.params.sender;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.role = event.params.role;
  entity.account = event.params.account;
  entity.sender = event.params.sender;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
