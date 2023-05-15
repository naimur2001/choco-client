import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import ChocoDisplay from './ChocoDisplay.jsx'
import AddChoco from './AddChoco.jsx'
import Update from './Update'

const router=createBrowserRouter([

{
  path: '/',
  element: <Home></Home>,
  children: [
    {
      path: '/',
      element: <ChocoDisplay></ChocoDisplay>,
     
    },
    {
      path:'addchoco',
      element: <AddChoco></AddChoco>
    },
    {
  path: 'updatechoco/:id',
  element:<Update></Update>,
  loader: ({params})=> fetch(`http://localhost:5000/chocos/${params.id}`)
    }
  ]
}

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-5xl mx-auto'   >
    <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>
  </div>
)
