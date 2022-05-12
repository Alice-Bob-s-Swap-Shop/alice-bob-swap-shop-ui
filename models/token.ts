import Moralis from "moralis/types";

export interface Token extends Moralis.NFTResult {
  metadata?: any;
}
