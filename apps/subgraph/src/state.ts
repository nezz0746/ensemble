import { NetworkStateTravel } from "../generated/schema";
import { Move as MoveEvent } from "../generated/templates/StateTile/StateTile";

export function handleNetworkStateTravel(event: MoveEvent): void {
  const travel = new NetworkStateTravel(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  travel.state = event.transaction.from.toHexString();
  travel.account = event.params.account;
  travel.geohash = event.params.geohash;

  travel.save();
}
