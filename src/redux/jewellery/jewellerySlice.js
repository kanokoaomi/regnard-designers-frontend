import { createSlice } from "@reduxjs/toolkit";
import { addJewelleryPicture, deletePicture, getAllPictures } from "./jewelleryOperations.js";

const initialState = {
  pictures: [],
  isLoading: false,
  error: false,
};

const jewellerySlice = createSlice({
  name: "jewellery",
  initialState,
  extraReducers: (builder) => {
    builder
        .addCase(addJewelleryPicture.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addJewelleryPicture.fulfilled, (state, action) => {
          state.pictures.push(action.payload); // add a new picture
          state.isLoading = false;
        })
        .addCase(addJewelleryPicture.rejected, (state) => {
          state.isLoading = false;
          state.error = true;
        })
      .addCase(getAllPictures.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPictures.fulfilled, (state, action) => {
        state.pictures = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllPictures.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(deletePicture.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePicture.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        // console.log(action.payload);

        state.pictures =
          state.pictures.filter(
            record => record._id !== action.payload
          );
      })
      .addCase(deletePicture.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  },
});

export const jewelleryReducer = jewellerySlice.reducer;
