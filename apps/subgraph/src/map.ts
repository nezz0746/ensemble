import {
  RecordTileCreated as RecordTileCreatedEvent,
  RecordTileEntered as RecordTileEnteredEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  TileCreated as TileCreatedEvent,
} from "../generated/Map/Map";
import {
  RecordTileCreated,
  RecordTileEntered,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TileCreated,
} from "../generated/schema";

export function handleRecordTileCreated(event: RecordTileCreatedEvent): void {
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

export function handleRecordTileEntered(event: RecordTileEnteredEvent): void {
  let entity = new RecordTileEntered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tileAddress = event.params.tileAddress;
  entity.recipient = event.params.recipient;
  entity.geohash = event.params.geohash;
  entity.account = event.params.account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

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

export function handleTileCreated(event: TileCreatedEvent): void {
  let entity = new TileCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tileAddress = event.params.tileAddress;
  entity.creator = event.params.creator;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
