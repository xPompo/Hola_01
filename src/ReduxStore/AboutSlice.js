import { createSlice } from "@reduxjs/toolkit";

export const AboutSlice = createSlice({
  name: "id-change",
  initialState: { path: "" },
  reducers: {
    getPath: (state, action) => {
      state.path = action.payload;
    },
  },
});
export const AboutActions = AboutSlice.actions;
