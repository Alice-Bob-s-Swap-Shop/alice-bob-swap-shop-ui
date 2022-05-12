import { combineReducers, configureStore } from "@reduxjs/toolkit";

import swapReducer from "./swap/swap-slice";

const rootReducer = combineReducers({ swapReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
