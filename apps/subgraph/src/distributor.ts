import { JSONValue, Value, ipfs } from "@graphprotocol/graph-ts";
import {LocalTokenDistribution as LocalTokenDistributionEvent} from "../generated/LocalDistributor/LocalDistributor"
import {LocalToken, LocalTokenMetadata} from '../generated/schema'

export function handleLocalTokenDistribution(event: LocalTokenDistributionEvent): void {
  let localToken = LocalToken.load(event.params.tokenAddress);

  if(localToken == null) {
    localToken = new LocalToken(event.params.tokenAddress);
  }

  let isIPFS = event.params.tokenURI.startsWith("ipfs://");

  if (isIPFS) {
    let cid = event.params.tokenURI.split("//")[1];

    localToken.metadata = cid;

    ipfs.mapJSON(cid, "processItem", Value.fromString(cid));
  }

  localToken.geohash = event.params.geohash;
  localToken.uri = event.params.tokenURI;
  

  localToken.save()
}

export function processItem(value: JSONValue, cid: Value): void {
  let obj = value.toObject();
  let name = obj.get("name");
  let description = obj.get("description");
  let image = obj.get("image");

  if (name && description && image) {
    let localToken = LocalTokenMetadata.load(cid.toString());

    if(localToken == null) {
      localToken = new LocalTokenMetadata(cid.toString());
    }
  
    localToken.name = name.toString();
    localToken.description = description.toString();
    localToken.image = image.toString();
    localToken.imageGateway =
      "https://" + image.toString().split("://")[1] + ".ipfs.w3s.link";
      localToken.save();
  }
}