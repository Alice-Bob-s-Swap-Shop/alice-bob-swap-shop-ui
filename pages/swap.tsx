import type { NextPage } from "next";
import { useNFTBalances } from "react-moralis";

import { useVerifyMetadata } from "../hooks/useVerifyMetadata";

const Swap: NextPage = () => {
  const { data: nfts } = useNFTBalances();
  const { verifyMetadata } = useVerifyMetadata();

  return (
    <div className="container flex gap-12 py-8 h-full">
      <div className="flex-1 border rounded bg-slate-200 flex flex-wrap gap-2">
        {nfts &&
          nfts.result!.map((nft, i) => {
            nft = verifyMetadata(nft);
            return (
              <img
                key={i}
                className={`w-20 h-20`}
                src={nft.metadata?.image}
              ></img>
            );
          })}
      </div>
      <div className="flex-1 border rounded bg-slate-200"></div>
    </div>
  );
};

export default Swap;
