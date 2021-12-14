import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const choresSlice = createSlice({
  name: "chores",
  initialState,
  reducers: {
    addChore: (state, action) => {
      console.log(action.payload, "payload");
      state.list.push(action.payload);
    },
  },
});

export const { addChore } = choresSlice.actions;

export default choresSlice.reducer;
