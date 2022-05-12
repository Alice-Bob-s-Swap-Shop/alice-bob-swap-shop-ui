import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "../../models/token";

interface SwapState {
  walletBoard: Token[];
  tradeBoard: Token[];
}

const initialState: SwapState = {
  walletBoard: [],
  tradeBoard: [],
};

export const swapSlice = createSlice({
  name: "swap",
  initialState,
  reducers: {
    setWalletBoard(state, action: PayloadAction<Token[]>) {
      state.walletBoard = action.payload;
    },
  },
});

export const { setWalletBoard } = swapSlice.actions;

export default swapSlice.reducer;
