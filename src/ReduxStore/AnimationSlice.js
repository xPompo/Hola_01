import { createSlice } from "@reduxjs/toolkit";

const initial = { DownScroll: true };

export const AnimationScrollY = createSlice({
  name: "animation",
  initialState: initial,
  reducers: {
    isDown: (state, action) => {
      state.DownScroll = action.payload;
    },
  },
});

export const AnimationActions = AnimationScrollY.actions;
