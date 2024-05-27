import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllWordsAsyncThunk } from '../redux/game-slice'

export function GameInsertLetter () {
// Hooks
  const dispatch = useDispatch()
  const allWords = useSelector((state) => state.game.allWords)

// Methods
  useEffect(() => {
    dispatch(fetchAllWordsAsyncThunk())
  }, [dispatch])

  // Template
  return (
    <div>
      <h1>Game Insert Letter</h1>

      <p>{allWords}</p>
    </div>
  )
}
