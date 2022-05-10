import type { NextPage } from "next";
import { useNFTBalances } from "react-moralis";
import TokenCard from "../components/token-card";

import { useVerifyMetadata } from "../hooks/useVerifyMetadata";

const Swap: NextPage = () => {
  const { data: nfts } = useNFTBalances();
  const { verifyMetadata } = useVerifyMetadata();

  return (
    <div className="container flex gap-12 py-8 h-2/3">
      <div className="flex-1 border rounded bg-slate-200 flex flex-wrap gap-2 p-4">
        {nfts &&
          nfts.result!.map((nft, i) => {
            nft = verifyMetadata(nft);
            return <TokenCard key={i} token={nft as any}></TokenCard>;
          })}
      </div>
      <div className="flex-1 border rounded bg-slate-200"></div>
    </div>
  );
};

export default Swap;
