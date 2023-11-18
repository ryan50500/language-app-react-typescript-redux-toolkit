import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalDataName: "",
  modalDataExperience: 6,
  modalDataPrice: 5.5,
};

const ModalDataSlice = createSlice({
  name: "teacher modal data",
  initialState,
  reducers: {
    setModalDataName: (state, action) => {
      state.modalDataName = action.payload;
    },
    setModalDataExperience: (state, action) => {
      state.modalDataExperience = action.payload;
    },
    setModalDataPrice: (state, action) => {
      state.modalDataPrice = action.payload;
    },
  },
});

export const { setModalDataName, setModalDataExperience, setModalDataPrice } = ModalDataSlice.actions;
export default ModalDataSlice.reducer;
