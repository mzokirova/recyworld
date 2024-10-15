import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/main/Home'
import Layout from './components/Layout'
import Comments from './components/main/Comments'
import Blog from './pages/Blog'
import CommentDetail from './components/main/Comments/CommentDetail'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:"/comments",
        element:<Comments/>
      },
      {
        path: "/comments/:id", 
        element: <CommentDetail />
      },
      {
        path:"/blog",
        element:<Blog/>
      }
    ]
  }
])
function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
