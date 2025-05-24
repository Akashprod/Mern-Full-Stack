import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import About from '../Pages/About'
import Users from '../Pages/Users'
import SingleUserPage from '../Pages/SingleUser'
import Login from '../Pages/Login'
import Logout from '../Pages/Logout'
import PrivateRoute from '../Pages/PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
            <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/users' element={
        <PrivateRoute>
            <Users/>
        </PrivateRoute>
        }/>
      <Route path='/users/:id' element={
        <PrivateRoute>
            <SingleUserPage/>
        </PrivateRoute>
        
        }/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='*' element={alert("Please enter valid URL")} />
    </Routes>
    </div>
  )
}

export default AllRoutes