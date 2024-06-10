import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { GameInsertLetter } from './pages/GameInsertLetter'
import { TensesPage } from './pages/TensesPage'
import { MainPage } from './pages/MainPage'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/game-insert-letter',
        element: <GameInsertLetter />
      },
      {
        path: '/tenses',
        element: <TensesPage />
      }

    ]
  }
])
