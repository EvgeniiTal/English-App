import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { GameInsertLetter } from './pages/GameInsertLetter'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <GameInsertLetter />
      }
    ]
  }
])
