import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Animes } from './pages/Animes'

export const defaultRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/animes',
      element: <Animes />
    },
    {
      path: '/animes/:id',
    },
  ])