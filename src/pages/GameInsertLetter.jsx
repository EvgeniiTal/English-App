import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchWordsLetterGameAsyncThunk } from "../redux/game-slice"

export function GameInsertLetter() {
  // Hooks
  const dispatch = useDispatch()
  const { allWords } = useSelector((state) => state.letterGame)

  // State
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [hiddenLetterIndex, setHiddenLetterIndex] = useState(-1)
  const [userInput, setUserInput] = useState("")

  // Methods
  useEffect(() => {
    if (gameStarted) {
      dispatch(fetchWordsLetterGameAsyncThunk())
    }
  }, [dispatch, gameStarted])

  const handleStartGame = () => {
    setGameStarted(true)
    setHiddenLetterIndex(getRandomLetterIndex())
  }

  const handleNextWord = () => {
    if (currentWordIndex === allWords.length - 1) {
      setGameCompleted(true)
    } else {
      setCurrentWordIndex((prevIndex) => prevIndex + 1)
      setHiddenLetterIndex(getRandomLetterIndex())
    }
    setUserInput("")
  }

  const handlePlayAgain = () => {
    setCurrentWordIndex(0)
    setGameCompleted(false)
    setHiddenLetterIndex(0)
    setGameStarted(false)
    setUserInput("")
  }

  const getRandomLetterIndex = () => {
    const wordLength = allWords[currentWordIndex].englishWord.length
    return Math.floor(Math.random() * wordLength)
  }

  const handleInputChange = (event) => {
    setUserInput(event.target.value)
  }

  // Template
  return (
    <div>
      <h1>Game Insert Letter</h1>
      {/* <h2>All words</h2>
      <ul>
        {allWords.map((word, index) => (
          <li key={index}>{word.englishWord}</li>
        ))}
      </ul> */}
      {gameStarted ? (
        <>
          <ul>
            {allWords[currentWordIndex] && (
              <li key={currentWordIndex}>
                {allWords[currentWordIndex].englishWord
                  .split("")
                  .map((letter, index) => (
                    <span key={index}>
                      {index === hiddenLetterIndex ? "_" : letter}
                    </span>
                  ))}
              </li>
            )}
          </ul>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter the word"
          />
          {gameCompleted ? (
            <div>
              <p>Game over</p>
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
