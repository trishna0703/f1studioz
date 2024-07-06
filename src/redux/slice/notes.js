import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

export const notes = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.notes = [...state.notes, action.payload];
    },
    deleteNote: (state, action) => {
      state.notes = [
        ...state.notes.filter((note) => note.id != action.payload),
      ];
    },
  },
});

export const { setNotes, deleteNote } = notes.actions;
export default notes.reducer;
