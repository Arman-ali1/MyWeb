import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
// import Practice from './components/Practice/Timer.jsx'

// import Practice from './components/Practice/Practice.jsx'



function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    
    </>
  )
}

export default Layout