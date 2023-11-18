import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

export const { setShowModal } = ModalSlice.actions;
export default ModalSlice.reducer;
