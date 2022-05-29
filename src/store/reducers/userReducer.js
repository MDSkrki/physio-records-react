import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    user: (state, { payload }) => {
      state.id = payload;
    },
  },
});

export const { user } = authSlice.actions;
export default authSlice.reducer;
