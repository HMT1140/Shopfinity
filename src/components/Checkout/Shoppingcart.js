import React from 'react'
import Shoppingcartitem from './Shoppingcartitem'
import Shoppingcartpricing from './Shoppingcartpricing'
import './Shoppingcart.css'

const Shoppingcart = () => {
  return (
    <div className="container text-center shoppingcart">
      <div className="shoppingpricediv">
      <Shoppingcartpricing className='shoppingcartpricing'/>
      </div>
      <Shoppingcartitem/>
      
    </div>
  )
}

export default Shoppingcart