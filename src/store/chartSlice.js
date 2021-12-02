import { createSlice } from "@reduxjs/toolkit";
import { getWeekdays } from "../helpers/weekHelper";

const initialState = {
  showWeekend: true,
  weekendPlacement: "sandwich", // "sandwich" or "end"
  nameDisplay: "abbr",
  week: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
};

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    toggleWeekend: (state) => {
      console.log("toggle weekend");
      state.showWeekend = !state.showWeekend;
    },
    toggleWeekendPlacement: (state) => {
      if (state.weekendPlacement === "sandwich") {
        state.weekendPlacement = "end";
      } else {
        state.weekendPlacement = "sandwich";
      }
    },
    setNameDisplay: (state, action) => {
      state.nameDisplay = action.payload;
    },
    setWeek: (state) => {
      state.week = getWeekdays(
        state.showWeekend,
        state.weekendPlacement,
        state.nameDisplay
      );
    },
  },
});

export const {
  toggleWeekend,
  toggleWeekendPlacement,
  setNameDisplay,
  setWeek,
} = chartSlice.actions;

export default chartSlice.reducer;
