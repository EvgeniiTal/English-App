import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { GameInsertLetter } from './pages/GameInsertLetter'
import { Card } from './components/Card'
import { Main } from './components/Main'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/game-insert-letter',
        element: <GameInsertLetter />
      },
      {
        path: '/tenses',
        element: <Card />
      }

    ]
  }
])
