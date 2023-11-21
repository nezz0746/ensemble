import { NetworkStateTravel } from "../generated/schema";
import { StateMove as StateMoveEvent } from "../generated/templates/StateTile/StateTile";

export function handleNetworkStateTravel(event: StateMoveEvent): void {
  const travel = new NetworkStateTravel(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  travel.state = event.params.state.toHexString();
  travel.account = event.params.account;
  travel.geohash = event.params.geohash;

  travel.save();
}
