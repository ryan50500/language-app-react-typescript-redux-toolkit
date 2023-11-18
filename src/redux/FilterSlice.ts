import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maxPrice: 100,
  country: "",
  day: "",
  time: "",
  language: "",
  showDay: false,
  showTime: false,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setDay: (state, action) => {
      state.day = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setShowDay: (state, action) => {
      state.showDay = action.payload;
    },
    setShowTime: (state, action) => {
      state.showTime = action.payload;
    },
  },
});

export const {
  setMaxPrice,
  setCountry,
  setDay,
  setTime,
  setLanguage,
  setShowDay,
  setShowTime,
} = filterSlice.actions;
export default filterSlice.reducer;
