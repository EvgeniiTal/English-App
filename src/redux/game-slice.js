import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestAllWords } from '../services/game'

export const fetchAllWordsAsyncThunk = createAsyncThunk(
  'game/fetchAllWords',
  async () => {
    const data = await requestAllWords()
    return data
  }
)

const initialState = {
  allWords: [],
  error: null
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllWordsAsyncThunk.fulfilled, (state, action) => {
        state.allWords = action.payload
    })
  }
})

export const gameReducer = gameSlice.reducer
