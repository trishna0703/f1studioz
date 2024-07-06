import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./slice/sidebar";
import leads from "./slice/lead";
import notes from "./slice/notes";

const store = configureStore({
  reducer: {
    sidebar,
    leads,
    notes,
  },
});

export default store;
