import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      // state.isOpen1 = false;
    },

  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
