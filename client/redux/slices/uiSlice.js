import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  sidebar: false,
  modal: false,
};

export const uiSlicer = createSlice({
  name: "ui",
  initialState,
  reducers: {
    triggerSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
    closeSidebar: (state) => {
      state.sidebar = false;
    },
    openSidebar: (state) => {
      state.sidebar = true;
    },
    triggerModal: (state) => {
      state.modal = !state.sidebar;
    },
    closeModal: (state) => {
      state.modal = false;
    },
    openModal: (state) => {
      state.modal = true;
    },
  },
});

export const {
  triggerSidebar,
  openSidebar,
  closeSidebar,
  triggerModal,
  openModal,
  closeModal,
} = uiSlicer.actions;

export const selectSidebar = (state) => state.ui.sidebar;
export const selectModal = (state) => state.ui.modal;

export default uiSlicer.reducer;
