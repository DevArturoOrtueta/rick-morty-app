import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import './index.css'

//Rutas de la aplicacion
import ErrorPage from './error-page.jsx';
import HomePage from './routes/HomePage.jsx';
import CharacterPage from './routes/CharacterPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/characters",
    element: <CharacterPage/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
