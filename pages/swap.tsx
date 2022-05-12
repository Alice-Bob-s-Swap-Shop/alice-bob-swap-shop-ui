import type { NextPage } from "next";
import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useNFTBalances } from "react-moralis";

import SwapBoard from "../components/swap-board";
import TokenCard from "../components/token-card";

import { useVerifyMetadata } from "../hooks/useVerifyMetadata";
import { Token } from "../models/token";
import { useAppDispatch, useAppSelector } from "../store/hooks/redux";
import { setWalletBoard } from "../store/swap/swap-slice";

const Swap: NextPage = () => {
  const { walletBoard, tradeBoard } = useAppSelector(
    (state) => state.swapReducer
  );
  const dispatch = useAppDispatch();

  const { data } = useNFTBalances();
  const { verifyMetadata } = useVerifyMetadata();

  useEffect(() => {
    const result: Token[] = (data?.result as any[]) || [];
    const nfts = result.map((nft) => {
      nft = verifyMetadata(nft);
      return nft;
    });
    dispatch(setWalletBoard(nfts));
  }, [data]);

  return (
    <div className="container flex gap-12 py-8 h-2/3">
      <DndProvider backend={HTML5Backend}>
        <SwapBoard name="wallet-box">
          {walletBoard.map((token, i) => (
            <TokenCard key={i} token={token}></TokenCard>
          ))}
        </SwapBoard>
        <SwapBoard name="trade-box">
          {tradeBoard.map((token, i) => (
            <TokenCard key={i} token={token}></TokenCard>
          ))}
        </SwapBoard>
      </DndProvider>
    </div>
  );
};

export default Swap;
