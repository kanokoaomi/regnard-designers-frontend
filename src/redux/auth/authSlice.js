import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  isLoading: false,
  error: null,

  token: null,
  isRefreshing: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder.addCase();
  //   },
});

export const authReducer = authSlice.reducer;
