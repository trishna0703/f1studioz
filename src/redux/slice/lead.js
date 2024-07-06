import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedLead: 1,
};

export const leads = createSlice({
  name: "leads",
  initialState,
  reducers: {
    setSelectedLead: (state, action) => {
      state.selectedLead = action.payload;
    },
  },
});

export const { setSelectedLead } = leads.actions;
export default leads.reducer;
