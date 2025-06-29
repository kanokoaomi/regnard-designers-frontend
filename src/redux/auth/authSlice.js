import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, setToken } from "./authOperations";

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
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action.payload);

        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
        state.token = action.payload.data.accessToken;
        state.userData = action.payload.data.user;

        if (action.payload.data.accessToken) {
          setToken(action.payload.data.accessToken);
          localStorage.setItem("token", action.payload.data.accessToken);
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload);

        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.token = action.payload.data.accessToken;
        state.user = action.payload.data.user;

        if (action.payload.data.accessToken) {
          setToken(action.payload.data.accessToken);
          localStorage.setItem("token", action.payload.data.accessToken);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
