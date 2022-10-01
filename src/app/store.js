import { configureStore } from "@reduxjs/toolkit";
import { noteReducers } from "../features/notes";

//! configure store with reducers
export const store = configureStore({
  reducer: noteReducers,
});
