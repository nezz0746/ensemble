import {
  LocalRecordTokenDeployed as LocalRecordTokenDeployedEvent,
  LocalRecordDeployed as LocalRecordDeployedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  TileCreated as TileCreatedEvent,
} from "../generated/Map/Map";
import { StateTile as StateTileTemplate } from "../generated/templates";
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
  NetworkStateMetadata,
} from "../generated/schema";
import { BigInt, JSONValue, Value, ipfs } from "@graphprotocol/graph-ts";

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

  let agent = Agent.load(event.params.recipient);

  if (agent == null) {
    agent = new Agent(event.params.recipient);

    agent.save();
  }

  let localRecord = LocalRecord.load(event.params.account);

  if (localRecord == null) {
    localRecord = new LocalRecord(event.params.account);
  }

  localRecord.owner = event.params.recipient;
  localRecord.geohash = event.params.geohash;
  localRecord.localRecordERC721 = event.params.tileAddress.toHexString();

  localRecord.save();

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTileCreated(event: TileCreatedEvent): void {
  let n_state = NetworkState.load(event.params.stateAddress);

  if (n_state == null) {
    n_state = new NetworkState(event.params.stateAddress);
  }
  n_state.creator = event.params.creator;
  n_state.verifier = event.params.verifier;
  n_state.baseURI = event.params.baseURI;
  n_state.population = BigInt.fromI32(0);

  let isIPFS = event.params.baseURI.startsWith("ipfs://");

  if (isIPFS) {
    let cid = event.params.baseURI.split("//")[1];

    n_state.metadata = cid;

    ipfs.mapJSON(cid, "processItem", Value.fromString(cid));
  }

  StateTileTemplate.create(event.params.stateAddress);

  n_state.save();

  /**
   * GENERATED
   */

  let entity = new TileCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tileAddress = event.params.stateAddress;
  entity.creator = event.params.creator;
  entity.verifier = event.params.verifier;
  entity.baseURI = event.params.baseURI;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function processItem(value: JSONValue, userData: Value): void {
  let obj = value.toObject();
  let name = obj.get("name");
  let description = obj.get("description");
  let image = obj.get("image");
  let manifesto = obj.get("manifesto");

  if (name && description && image && manifesto) {
    let ns_metadata = new NetworkStateMetadata(userData.toString());

    ns_metadata.name = name.toString();
    ns_metadata.description = description.toString();
    ns_metadata.image = image.toString();
    ns_metadata.imageGateway =
      "https://" + image.toString().split("://")[1] + ".ipfs.w3s.link";
    ns_metadata.manifesto = manifesto.toString();
    ns_metadata.manifestoGateway =
      "https://" + manifesto.toString().split("://")[1] + ".ipfs.w3s.link";

    ns_metadata.save();
  }
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
