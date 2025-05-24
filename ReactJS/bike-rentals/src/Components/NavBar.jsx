import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <div className='nav'>
        <NavLink style={{ textDecoration: "none" }} to="/">Bike Rental</NavLink>
        <h3 style={{color:"orange"}}>Bike Rental Admin Dashboard</h3>
        <NavLink style={{ textDecoration: "none" }} to="/bookings">All Bookings</NavLink>
    </div>
  )
}

export default NavBar