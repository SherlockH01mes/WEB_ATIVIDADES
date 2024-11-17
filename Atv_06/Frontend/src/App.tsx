import { RouterProvider } from 'react-router-dom'
import { defaultRoutes } from './Routes'

function App() {
  return (
    <>
      <RouterProvider router={defaultRoutes}/>
    </>
  )
}

export default App
