import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pictures: [],
};

const jewellerySlice = createSlice({
  name: "jewellery",
  initialState,
  reducers: {
    addPicture: (state, action) => {
      state.pictures = action.payload;
    },
  },
});

export const jewelleryReducer = jewellerySlice.reducer;
export const { addPicture } = jewellerySlice.actions;
