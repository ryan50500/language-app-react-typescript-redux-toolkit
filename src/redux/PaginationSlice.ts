import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teachersToShow: 6,
};

const PaginationSlice = createSlice({
  name: "teacher to show",
  initialState,
  reducers: {
    setTeachersToShow: (state, action) => {
      state.teachersToShow = action.payload;
    },
  },
});

export const { setTeachersToShow } = PaginationSlice.actions;
export default PaginationSlice.reducer;
