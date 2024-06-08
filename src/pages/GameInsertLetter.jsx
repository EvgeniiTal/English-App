import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchWordsLetterGameAsyncThunk } from "../redux/game-slice"

export function GameInsertLetter() {
  const dispatch = useDispatch()
  const { allWords } = useSelector((state) => state.letterGame)

  useEffect(() => {
    dispatch(fetchWordsLetterGameAsyncThunk())
  }, [dispatch])

  const [gameStage, setGameStage] = useState("start")
  const [selectedTopic, setSelectedTopic] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [shownWords, setShownWords] = useState([])
  const [inputValue, setInputValue] = useState("")
  // const [wordWithMissingLetter, setWordWithMissingLetter] = useState("")

  const handleStartGame = () => {
    setGameStage("chooseTopic")
  }

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic)
    setCurrentWordIndex(0)
    setShownWords([])
    // setWordWithMissingLetter(getWordWithMissingLetter(filteredWords[0]?.englishWord))
    setGameStage("showTopic")
  }

  const handleNextWord = () => {
    setCurrentWordIndex(currentWordIndex + 1)
    setShownWords([...shownWords, filteredWords[currentWordIndex]])
    setInputValue("")
    // setWordWithMissingLetter(getWordWithMissingLetter(filteredWords[currentWordIndex + 1]?.englishWord))
  }

  const handlePlayAgain = () => {
    setCurrentWordIndex(0)
    setShownWords([])
    setGameStage("showTopic")
    setInputValue("")
  }

  const handleSelectAnotherTopic = () => {
    setSelectedTopic("")
    setCurrentWordIndex(0)
    setShownWords([])
    setGameStage("chooseTopic")
    setInputValue("")
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const filteredWords = selectedTopic ? allWords.filter((word) => word.topic === selectedTopic) : allWords

  // const getRandomLetterIndex = (word) => {
  //   const letterIndex = Math.floor(Math.random() * word.length)
  //   return letterIndex
  // }

  const getRandomLetterIndex = (word) => {
    if (word.length === 0) {
      return 0; // Return a default value if the word is empty
    }
    const letterIndex = Math.floor(Math.random() * word.length);
    return letterIndex;
  };

  const getWordWithMissingLetter = (word) => {
    const letterIndex = getRandomLetterIndex(word)
    const wordWithMissingLetter = word.slice(0, letterIndex) + "_" + word.slice(letterIndex + 1)
    return wordWithMissingLetter
  }

  return (
    <div>
      {gameStage === "start" && (
        <button onClick={handleStartGame}>Start Game</button>
      )}

      {gameStage === "chooseTopic" && (
        <div>
          <h2>Game Insert Letter</h2>
          <button onClick={() => handleSelectTopic("Family")}>Words by Topic Family</button>
          <button onClick={() => handleSelectTopic("fruit")}>Words by Topic Fruit</button>
        </div>
      )}

      {gameStage === "showTopic" && (
        <div>
          <h2>Game Insert Letter</h2>
          <p>Selected Topic: {selectedTopic}</p>
          {currentWordIndex < filteredWords.length ? (
            <div>
              <p>Word {currentWordIndex + 1}</p>
              <p>
                {getWordWithMissingLetter(filteredWords[currentWordIndex].englishWord)}
              </p>
              <input type="text" value={inputValue} onChange={handleInputChange} />
              <button onClick={handleNextWord}>Next</button>
            </div>
            //  {/* {currentWordIndex < filteredWords.length ? (
            // <div>
            //   <p>Word {currentWordIndex + 1}</p>
            //   <p>{wordWithMissingLetter}</p>
            //   <input type="text" value={inputValue} onChange={handleInputChange} />
            //   <button onClick={handleNextWord}>Next</button>
            // </div> */}
          ) : (
            <div>
              <p>Game Over</p>
              <button onClick={handlePlayAgain}>Play Again</button>
              <button onClick={handleSelectAnotherTopic}>Select Another Topic</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
