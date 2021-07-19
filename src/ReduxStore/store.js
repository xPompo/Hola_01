import { configureStore } from "@reduxjs/toolkit";
import { AboutSlice } from "./AboutSlice";
import { AnimationScrollY } from "./AnimationSlice";

export default configureStore({
  reducer: {
    idReducer: AboutSlice.reducer,
    scrollYReducer: AnimationScrollY.reducer,
  },
});
