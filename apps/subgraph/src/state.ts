import { BigInt } from "@graphprotocol/graph-ts";
import {
  NetworkState,
  NetworkStateTravel,
  StateAgent,
} from "../generated/schema";
import { StateMove as StateMoveEvent } from "../generated/templates/StateTile/StateTile";

export function handleNetworkStateTravel(event: StateMoveEvent): void {
  const travel = new NetworkStateTravel(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  travel.state = event.params.state;
  travel.account = event.params.account;
  travel.previousGeohash = event.params.previousGeohash;
  travel.nextGeohash = event.params.nextGeohash;

  let stateAgentId = event.params.state.concat(event.params.account);

  let stateAgent = StateAgent.load(stateAgentId);

  if (stateAgent == null) {
    stateAgent = new StateAgent(stateAgentId);
    stateAgent.state = event.params.state;
    stateAgent.agent = event.params.account;
    stateAgent.save();

    let state = NetworkState.load(event.params.state);

    if (state) {
      state.population = state.population.plus(BigInt.fromI32(1));
      state.save();
    }
  }

  travel.save();
}
