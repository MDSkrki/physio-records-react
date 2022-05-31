import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./reducers/bannerReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    banner: bannerReducer,
  },
});
