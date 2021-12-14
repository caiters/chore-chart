import { configureStore } from "@reduxjs/toolkit";

import chartReducer from "./chartSlice";
import choresReducer from "./choresSlice";

export const store = configureStore({
  reducer: {
    chart: chartReducer,
    chores: choresReducer,
  },
});

export default store;
