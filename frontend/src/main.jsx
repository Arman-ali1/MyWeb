import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import App from './App.jsx'
import Home from './components/Page1/Home.jsx'
import Result from './components/Page3/Result.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/contest' flage={true} element={<App />} />
      <Route path='/contest/result' element={<Result />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>,
)
