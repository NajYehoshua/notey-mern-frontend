import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import noteService from "../utils/noteService";

//! GetNote async action
export const getNotes = createAsyncThunk(
  "note/getNotes",
  async (_, thunkAPI) => {
    try {
      return await noteService.getNotes();
    } catch (err) {
      console.log(err);
    }
  }
);

//! Redux slice
const noteSlice = createSlice({
  name: "note",

  initialState: {
    notes: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },

  reducers: {
    test: (state) => {
      state.notes.push("Hello World");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notes = action.payload;
      })
      .addCase(getNotes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

//! export sync action
export const { test } = noteSlice.actions;

//! export reducers
export const noteReducers = noteSlice.reducer;
