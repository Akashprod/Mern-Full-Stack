import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Bookings from '../Pages/Bookings'
import BikeDetails from '../Pages/BikeDetails'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/bookings" element={<Bookings/>} />
            <Route path="/bookings/:id" element={<BikeDetails/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes