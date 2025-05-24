import React from 'react'
import LabelPrice from './LabelPrice'
import QuantityContainer from './QuantityContainer'

const CartItem = () => {
  return (
    <div className='box'>
        <LabelPrice/>
        <QuantityContainer/>
    </div>
  )
}

export default CartItem