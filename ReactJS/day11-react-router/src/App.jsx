import React from 'react'

import NavBar from './Components/NavBar'
import AllRoutes from './Components/AllRoutes'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    
    <>
    <NavBar/>
    <AllRoutes/>
    <ToastContainer />
    </>

   
  )
}

export default App