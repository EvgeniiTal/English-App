import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWordsLetterGameAsyncThunk } from '../redux/game-slice'

export function GameInsertLetter() {
  // Hooks
  const dispatch = useDispatch()
  const { allWords } = useSelector((state) => state.letterGame)

  const [gameStage, setGameStage] = useState('start')
  const [selectedTopic, setSelectedTopic] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [shownWords, setShownWords] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [currentWord, setCurrentWord] = useState('')

  useEffect(() => {
    dispatch(fetchWordsLetterGameAsyncThunk())
  }, [dispatch])

  // Methods
  const handleStartGame = () => {
    setGameStage('chooseTopic')
  }

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic)
    setCurrentWordIndex(0)
    setShownWords([])
    setGameStage('showTopic')
    const filteredWordsByTopic = allWords.filter((word) => word.topic === topic)
    setCurrentWord(getWordWithMissingLetter(filteredWordsByTopic[0].englishWord))
  }

  const handleNextWord = () => {
    const currentWord = filteredWords[currentWordIndex]
    const wordWithoutMissingLetter = currentWord.englishWord.replace('_', '')

    if (inputValue.toLowerCase() === wordWithoutMissingLetter.toLowerCase()) {
      setCurrentWordIndex(currentWordIndex + 1)
      setShownWords([...shownWords, currentWord])
      setInputValue('')
    } else {
      alert('Try again')
    }
  }

  const handlePlayAgain = () => {
    setCurrentWordIndex(0)
    setShownWords([])
    setGameStage('showTopic')
    setInputValue('')
    setCurrentWord(getWordWithMissingLetter(filteredWords[0].englishWord))
  }

  const handleSelectAnotherTopic = () => {
    setSelectedTopic('')
    setCurrentWordIndex(0)
    setShownWords([])
    setGameStage('chooseTopic')
    setInputValue('')
    setCurrentWord(getWordWithMissingLetter(filteredWords[0].englishWord))
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const filteredWords = selectedTopic
  ? allWords.filter((word) => word.topic === selectedTopic)
  : allWords.filter((word) => word.topic === '' || !word.topic)

  const getRandomLetterIndex = (word) => {
    if (word.length === 0) {
      return 0
    }
    const letterIndex = Math.floor(Math.random() * word.length)
    return letterIndex
  }

  const getWordWithMissingLetter = (word) => {
    const letterIndex = getRandomLetterIndex(word)
    const wordWithMissingLetter = word.slice(0, letterIndex) + '_' + word.slice(letterIndex + 1)
    return wordWithMissingLetter
  }

  useEffect(() => {
    if (currentWordIndex < filteredWords.length) {
      const wordWithMissingLetter = getWordWithMissingLetter(filteredWords[currentWordIndex].englishWord)
      setCurrentWord(wordWithMissingLetter)
    }
  }, [currentWordIndex])

  // Template
  return (
    <div>
      {gameStage === 'start' && (
        <div className='text-center'>
        <h2>Game Insert Letter</h2>
        <button type ='button' className='btn btn-primary m-2' onClick={handleStartGame}>Start Game</button>
        </div>
      )}

      {gameStage === 'chooseTopic' && (
        <div className='text-center'>
          <h2>Game Insert Letter</h2>
          <button type ='button' className='btn btn-primary m-2' onClick={() => handleSelectTopic('Family')}>Words by Topic Family</button>
          <button type ='button' className='btn btn-primary m-2' onClick={() => handleSelectTopic('fruit')}>Words by Topic Fruit</button>
          <button type ='button' className='btn btn-primary m-2' onClick={() => handleSelectTopic('')}>Words by Topic ?</button>
        </div>
      )}

      {gameStage === 'showTopic' && (
        <div className='text-center'>
          <h2>Game Insert Letter</h2>
          <p>Selected Topic: {selectedTopic}</p>
          {currentWordIndex < filteredWords.length ? (
            <div>
              <p>Word {currentWordIndex + 1}</p>
              <p>{currentWord}</p>
              <input type='text' value={inputValue} onChange={handleInputChange} />
              <button type='button' className='btn btn-success m-2' onClick={handleNextWord}>Next</button>
            </div>
          ) : (
            <div>
              <p>Game Over</p>
              <button type='button' className='btn btn-secondary m-2' onClick={handlePlayAgain}>Play Again</button>
              <button type='button' className='btn btn-secondary m-2' onClick={handleSelectAnotherTopic}>Select Another Topic</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
