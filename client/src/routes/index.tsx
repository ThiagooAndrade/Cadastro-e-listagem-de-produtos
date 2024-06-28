import {
  createBrowserRouter
} from 'react-router-dom'
import { Products } from './Products'
import { Register } from './Register'
// import Root from '../Root'

const router = createBrowserRouter(
  [
    { path: "/", element: <Products />, },
    { path: "*", element: <Products /> },
    { path: "/products", element: <Products /> },
    { path: "/register", element: <Register /> },
  ]
)

export default router