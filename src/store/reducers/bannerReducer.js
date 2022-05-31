import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  variant: null,
  message: null,
};

export const authSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    show: (state, { payload }) => {
      console.log(payload);
      state.show = true;
      state.variant = payload.variant;
      state.message = payload.message;
    },
    dismiss: (state) => {
      state.show = false;
      state.variant = null;
      state.message = null;
    },
  },
});

export const { show, dismiss } = authSlice.actions;
export default authSlice.reducer;
