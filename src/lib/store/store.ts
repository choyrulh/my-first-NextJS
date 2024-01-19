import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/reducer/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    // tambahkan reducer lain jika diperlukan
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
