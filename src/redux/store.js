import { configureStore } from "@reduxjs/toolkit"
import { gameReducer } from "./game-slice"
import { tensesReducer } from "./tenses-slice"

export const store = configureStore({
  reducer: {
    letterGame: gameReducer,
    tenses: tensesReducer,
  },
})
