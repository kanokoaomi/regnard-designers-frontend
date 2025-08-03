// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

// const api = axios.create({
//   baseURL: "https://regnard-designers-backend.onrender.com/",
//   // baseURL: 'http://localhost:3000/api/',
//   //   headers: { "Content-Type": "application/json" },
// });

export const getAllPictures = createAsyncThunk(
  "jewellery/getAllPictures",
  async (_, thunkApi) => {
    try {
      // console.log("Запит до сервера...");
      const responce = await api.get("/jewellery/");
      // console.log("Запит успішно пройшов:", responce.data.data);
      return responce.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addJewelleryPicture = createAsyncThunk(
  "jewellery/addPicture",
  async (formData, thunkAPI) => {
    try {
      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ':', pair[1]);
      // }
      const response = await api.post("/jewellery/picture", formData);
      console.log(response)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePicture = createAsyncThunk(
  'jewellery/deletePicture',
  async (pictureId, thunkAPI) => {
    // console.log(pictureId);
    try {
      await api.delete(`/picture/${pictureId}`);
      await thunkAPI.dispatch(getAllPictures());
      return pictureId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
