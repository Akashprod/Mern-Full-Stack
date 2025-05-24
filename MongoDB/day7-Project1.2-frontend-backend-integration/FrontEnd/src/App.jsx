import React from 'react'
import Signup from './Components/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Notes from './Components/Notes'

const App = () => {
  return (
    <div>
      <h1>Notes Application</h1>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/notes" element={<Notes/>}/>
      </Routes>
    </div>
  )
}

export default App