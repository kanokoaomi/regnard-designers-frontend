import { createSlice } from "@reduxjs/toolkit";
import { getAllPictures } from "./jewelleryOperations.js";

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
      //   .addCase(addPicture.pending, (state) => {
      //     state.isLoading = true;
      //   })
      //   .addCase(addPicture.fulfilled, (state, action) => {
      //     state.pictures.push(action.payload); // add a new picture
      //     state.isLoading = false;
      //   })
      //   .addCase(addPicture.rejected, (state) => {
      //     state.isLoading = false;
      //     state.error = true;
      //   })
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
      });
  },
});

export const jewelleryReducer = jewellerySlice.reducer;
