import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { requestWordsLetterGame } from "../services/game"

export const fetchWordsLetterGameAsyncThunk = createAsyncThunk(
  "game/fetchAllWords",
  async () => {
    const data = await requestWordsLetterGame()
    return data
  }
)

const initialState = {
  allWords: [],
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchWordsLetterGameAsyncThunk.fulfilled,
      (state, action) => {
        state.allWords = action.payload
      }
    )
  },
})

export const gameReducer = gameSlice.reducer
