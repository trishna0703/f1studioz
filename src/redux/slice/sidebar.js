import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
  activeMenu: "Leads",
};

export const sidebar = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    showSidebar: (state, action) => {
      state.isOpen = action.payload;
    },
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
  },
});

export const { showSidebar, setActiveMenu } = sidebar.actions;
export default sidebar.reducer;
