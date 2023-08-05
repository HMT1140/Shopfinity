import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updatetotalprice } from '../features/ShoppingCartSlice'



const Shoppingcartitem = () => {
    const product= useSelector((state)=> state.shoppingcart.content)
  
   

  return (
   <div>
    
    { product.map((val, index)=>{
        return (
        <div key={index} class="card w-75 mb-3">
  <div class="card-body">
    <img src={val.image} alt="product image" width={100} />
      
    <h5 class="card-title">{val.title}</h5>
    <p>${val.price} (quantity: {val.quantity})</p>
    <h6>Total Price of the product: ${val.price * val.quantity}</h6>
    

   
  
  </div>
</div>)
        
    })}
   </div>
  )
}

export default Shoppingcartitem