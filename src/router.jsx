import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { GameInsertLetter } from './pages/GameInsertLetter'
import { Card } from './components/Card'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <GameInsertLetter />
      },
      {
        path: '/card',
        element: <Card />
      }

    ]
  }
])
