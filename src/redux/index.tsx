import { configureStore } from "@reduxjs/toolkit";
import adviseryReducer from "./slice/adviserySlice";

const store = configureStore({
  reducer: {
    advisery: adviseryReducer,
  },
});

// Define the root state type
export type RootState = ReturnType<typeof store.getState>;

export default store;
