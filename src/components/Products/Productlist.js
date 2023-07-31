import React from 'react'
import './Productlist.css'

const Productlist = (props) => {
  const {title , price ,description , image , category}= props
  const HandleOnClick= ()=>{
    window.location.pathname = '/productdetails'
  }
  return (
    <div onclick={HandleOnClick}>
      <div className="card container my-5 procu "  >
  <img src={image} className="card-img-top" alt="product image"/>
 
   <h6>{title}</h6> 
   <label htmlFor="">Price=${price}</label> 

   
  
</div>
    </div>
  )
}

export default Productlist