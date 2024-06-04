import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllWordsAsyncThunk } from '../redux/game-slice'

export function GameInsertLetter () {
  // Hooks
  const dispatch = useDispatch()
  const { allWords } = useSelector((state) => state.game)

  // State
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [hiddenLetterIndex, setHiddenLetterIndex] = useState(-1)

  // Methods
  useEffect(() => {
    if (gameStarted) {
      dispatch(fetchAllWordsAsyncThunk())
    }
  }, [dispatch, gameStarted])

  // const handleStartGame = () => {
  //   setGameStarted(true)
  //   setHiddenLetterIndex(getRandomLetterIndex())
  //   setHiddenLetterIndex(0)
  // }

  const handleStartGame = () => {
    setGameStarted(true)
    setHiddenLetterIndex(0)
  }

  const handleNextWord = () => {
    if (currentWordIndex === allWords.length - 1) {
      setGameCompleted(true)
    } else {
      setCurrentWordIndex((prevIndex) => prevIndex + 1)
      setHiddenLetterIndex(getRandomLetterIndex())
    }
  }

  const handlePlayAgain = () => {
    setCurrentWordIndex(0)
    setGameCompleted(false)
    setHiddenLetterIndex(0)
  }

  const getRandomLetterIndex = () => {
    return Math.floor(Math.random() * allWords[currentWordIndex].englishWord.length)
  }

  // Template
  return (
    <div>
      <h1>Game Insert Letter</h1>
      <h2>All words</h2>
      <ul>
        {allWords.map((word, index) => (
          <li key={index}>{word.englishWord}</li>
        ))}
      </ul>
      <h2>Random word</h2>
      {gameStarted ? (
        <>
          {/* <ul>
            {allWords[currentWordIndex] && (
              <li key={currentWordIndex}>{allWords[currentWordIndex].englishWord}</li>
            )}
          </ul> */}
           {/* <ul>
            {allWords[currentWordIndex] && (
              <li key={currentWordIndex}>
                {allWords[currentWordIndex].englishWord
                  .split('')
                  .map((letter, index) => (
                    <span key={index}>
                      {index === hiddenLetterIndex ? '_' : letter}
                    </span>
                  ))}
              </li>
            )}
          </ul> */}
          <ul>
  {allWords[currentWordIndex] && (
    <li key={currentWordIndex}>
      {allWords[currentWordIndex].englishWord
        .split('')
        .map((letter, index) => (
          <span key={index}>
            {index === hiddenLetterIndex ? '_' : letter}
          </span>
        ))}
    </li>
  )}
</ul>
          {gameCompleted ? (
            <div>
              <p>Вы прошли игру</p>
              <button onClick={handlePlayAgain}>Play Again</button>
            </div>
          ) : (
            <button onClick={handleNextWord}>Next</button>
          )}
        </>
      ) : (
        <button onClick={handleStartGame}>Start Game</button>
      )}
    </div>
  )
}
