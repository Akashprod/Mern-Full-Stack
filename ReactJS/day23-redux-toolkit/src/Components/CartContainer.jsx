import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import cartItems from '../cartItems';
import CartItem from './CartItem';
import { openModal } from '../Features/Modal/ModalSlice';

const CartContainer = () => {

const {amount,total,cartItems} = useSelector((state)=>state.cart);

const dispatch =  useDispatch();

if (amount < 1) {
    return (
        <section className='cart'>
            <header>
                <h2>Your bag</h2>
                <h4 className='empty-cart'>is Empty</h4>
            </header>
        </section>
      )
}

return(
    <section className='cart'>
        <header>
            <h2>Your bag</h2>
            <div>{cartItems.map((item)=>{
                return <CartItem key={item.id} {...item}/>
            })}</div>
        </header>

        <footer>
            <div className='cart-total'>
                <h4>Total
                    <span>
                        ${total}
                    </span>
                </h4>
            </div>
            <button onClick={()=>dispatch(openModal())} className='btn clear-btn'>Clear Cart</button>
        </footer>
    </section>
)

  
}

export default CartContainer