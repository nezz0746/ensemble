import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  RecordTileCreated,
  RecordTileEntered,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TileCreated
} from "../generated/Map/Map"

export function createRecordTileCreatedEvent(
  tileAddress: Address,
  geohash: string,
  creator: Address
): RecordTileCreated {
  let recordTileCreatedEvent = changetype<RecordTileCreated>(newMockEvent())

  recordTileCreatedEvent.parameters = new Array()

  recordTileCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tileAddress",
      ethereum.Value.fromAddress(tileAddress)
    )
  )
  recordTileCreatedEvent.parameters.push(
    new ethereum.EventParam("geohash", ethereum.Value.fromString(geohash))
  )
  recordTileCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return recordTileCreatedEvent
}

export function createRecordTileEnteredEvent(
  tileAddress: Address,
  recipient: Address,
  geohash: string,
  account: Address
): RecordTileEntered {
  let recordTileEnteredEvent = changetype<RecordTileEntered>(newMockEvent())

  recordTileEnteredEvent.parameters = new Array()

  recordTileEnteredEvent.parameters.push(
    new ethereum.EventParam(
      "tileAddress",
      ethereum.Value.fromAddress(tileAddress)
    )
  )
  recordTileEnteredEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  recordTileEnteredEvent.parameters.push(
    new ethereum.EventParam("geohash", ethereum.Value.fromString(geohash))
  )
  recordTileEnteredEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return recordTileEnteredEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createTileCreatedEvent(
  tileAddress: Address,
  creator: Address
): TileCreated {
  let tileCreatedEvent = changetype<TileCreated>(newMockEvent())

  tileCreatedEvent.parameters = new Array()

  tileCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tileAddress",
      ethereum.Value.fromAddress(tileAddress)
    )
  )
  tileCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return tileCreatedEvent
}
