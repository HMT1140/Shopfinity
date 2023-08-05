import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Shoppingcartpricing = () => {
    const cartItem = useSelector((state)=>state.shoppingcart.content)


    const totalPrice = cartItem.reduce((total, item)=>{
        return total + item.price *item.quantity;
    }, 0)
   
  return (
    <div>
            <div className="card w-75 mb-3">
      <div className="card-body">
        <h4>Total Price:${totalPrice.toFixed(2)} </h4>
        <Link to='/checkoutprocess'> <button className="btn">Proceed to Checkout</button></Link>
       
      </div>
    </div>
        </div>
  )
}

export default Shoppingcartpricing