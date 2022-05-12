import type { NextPage } from "next";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useNFTBalances } from "react-moralis";

import SwapBoard from "../components/swap-board";
import TokenCard from "../components/token-card";

import { useVerifyMetadata } from "../hooks/useVerifyMetadata";

const Swap: NextPage = () => {
  const { data: nfts } = useNFTBalances();
  const { verifyMetadata } = useVerifyMetadata();

  return (
    <div className="container flex gap-12 py-8 h-2/3">
      <DndProvider backend={HTML5Backend}>
        <SwapBoard name="wallet-box">
          {nfts?.result!.map((nft, i) => {
            nft = verifyMetadata(nft);
            return <TokenCard key={i} token={nft as any}></TokenCard>;
          })}
        </SwapBoard>
        <SwapBoard name="trade-box" />
      </DndProvider>
    </div>
  );
};

export default Swap;
