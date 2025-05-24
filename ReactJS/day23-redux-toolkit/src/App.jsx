import React, { useEffect } from 'react'
import NavBar from './Components/NavBar'
import CartContainer from './Components/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './Features/Cart/CartSlice'
import Modal from './Components/Modal'

const App = () => {

const {cartItems} =  useSelector((state)=>state.cart);
const {isOpen} = useSelector((state)=>state.modal);
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(calculateTotals());
},[cartItems]);



  return (
   <>
   {isOpen && <Modal/>}
   <NavBar/>
   <CartContainer/>
   </>
  )
}

export default App