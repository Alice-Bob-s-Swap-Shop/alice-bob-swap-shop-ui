import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BoardTypes, Token } from "../../models";

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
      state.tradeBoard = [];
    },
    moveToken(state, action: PayloadAction<MovePayload>) {
      const { toBoard, token } = action.payload;
      const fromBoard =
        toBoard === BoardTypes.WALLET ? BoardTypes.TRADE : BoardTypes.WALLET;

      const index = state[fromBoard].findIndex(
        (item) => item.token_address === token.token_address
      );
      state[fromBoard].splice(index, 1);
      state[toBoard].push(token);
    },
  },
});

export const { setWalletBoard, moveToken } = swapSlice.actions;

export default swapSlice.reducer;

interface MovePayload {
  toBoard: BoardTypes;
  token: Token;
}
