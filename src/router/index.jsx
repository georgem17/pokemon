import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/Layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import { pokedexLoader } from "./loaders/pokedexLoader";
  
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: '/pokedex',
    element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
        ),

    children: [
      {
        path: '',
        element: <Pokedex />,
        loader: pokedexLoader,
      },
      
    ],
  },
]);