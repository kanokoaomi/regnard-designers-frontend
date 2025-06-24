// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const { data } = await api.post("auth/register", formData);
      console.log("data:", data);
      return data;
    } catch (error) {
      console.error(
        "Error response from server:",
        error.response?.data || error.message
      );
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
