import React from 'react'
import './Checkoutprocess.css'
const Checkoutprocess = () => {
  return (
    <div className='Checkoutprocessmaindiv'>
      <div className="text-center checkoutprocessdiv">
        <h2 className='heading'>CheckOut</h2>
        <input className='inputcheckout' type="text" placeholder='Enter your Name' />
        <input className='inputcheckout' type="text" placeholder='Enter your Address' />
        <input className='inputcheckout' type="number" placeholder='Enter your card number'/>
        <input className='inputcheckout' type="number" placeholder='Enter Expiry date of Card'pattern='01/23' />
        <input className='inputcheckout' type="number" placeholder='Enter CVC'  maxLength={3}/>
        <button className="btn">Checkout</button>
      </div>

    </div>
  )
}

export default Checkoutprocess