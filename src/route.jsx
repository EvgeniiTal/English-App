import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { Card } from './components/Card'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Card />,
      },
    ],
  },
])
