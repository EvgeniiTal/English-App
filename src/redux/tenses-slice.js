import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestTenses } from "../services/tenses";

export const fetchTenses = createAsyncThunk("tenses/fetchTenses", async () => {
  const data = await requestTenses();
  return data;
});

const tensesSlice = createSlice({
  name: "tenses",
  initialState: {
    tenses: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTenses.fulfilled, (state, action) => {
      state.tenses = action.payload;
    });
  },
});

export const tensesReducer = tensesSlice.reducer;
