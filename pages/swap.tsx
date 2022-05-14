import type { NextPage } from "next";
import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useNFTBalances } from "react-moralis";

import SwapBoard from "../components/swap-board";
import TokenCard from "../components/token-card";
import { useVerifyMetadata } from "../hooks/useVerifyMetadata";
import { BoardTypes, Token } from "../models";
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
    const nfts = result.map((nft) => verifyMetadata(nft));
    dispatch(setWalletBoard(nfts));
  }, [data]);

  return (
    <div className="container flex gap-12 py-8 h-2/3">
      <DndProvider backend={HTML5Backend}>
        <SwapBoard name={BoardTypes.WALLET}>
          {walletBoard.map((token) => (
            <TokenCard
              key={token.token_address + token.token_id}
              token={token}
            ></TokenCard>
          ))}
        </SwapBoard>
        <SwapBoard name={BoardTypes.TRADE}>
          {tradeBoard.map((token, i) => (
            <TokenCard
              key={token.token_address + token.token_id}
              token={token}
            ></TokenCard>
          ))}
        </SwapBoard>
      </DndProvider>
    </div>
  );
};

export default Swap;
