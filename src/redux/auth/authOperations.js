// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  api.defaults.headers.common.Authorization = "";
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const { data } = await api.post("auth/register", formData);
      // console.log("data:", data);
      setToken(data.accessToken);
      return data;
    } catch (error) {
      console.error(
        "Error response from server:",
        error.response?.data || error.message
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const { data } = await api.post("auth/login", formData);
      console.log(data);
      setToken(data.accessToken);

      return data;
    } catch (error) {
      console.error(
        "Error response from server:",
        error.response?.data || error.message
      );
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
