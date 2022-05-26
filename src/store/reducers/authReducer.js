import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, { payload }) => {
      state.email = payload.email;
      state.password = payload.password;
    },
  },
});

export const { register } = authSlice.actions;
export default authSlice.reducer;
