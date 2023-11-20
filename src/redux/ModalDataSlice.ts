import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ModalName: "",
  ModalEmail: "",
  ModalSkypeID: "",
  ModalPlatform: "",
  ModalWhatsApp: "",
};

const ModalDataSlice = createSlice({
  name: "teacher modal data",
  initialState,
  reducers: {
    setModalName: (state, action) => {
      state.ModalName = action.payload;
    },
    setModalEmail: (state, action) => {
      state.ModalEmail = action.payload;
    },
    setModalSkypeID: (state, action) => {
      state.ModalSkypeID = action.payload;
    },
    setModalPlatform: (state, action) => {
      state.ModalPlatform = action.payload;
    },
    setModalWhatsApp: (state, action) => {
      state.ModalWhatsApp = action.payload;
    },
  },
});

export const {
  setModalName,
  setModalEmail,
  setModalSkypeID,
  setModalPlatform,
  setModalWhatsApp,
} = ModalDataSlice.actions;
export default ModalDataSlice.reducer;
