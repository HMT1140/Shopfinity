import React from 'react'

const Productdetails = (props) => {
  const {title, description , price, image}=props
  return (
    <div className='container productdetails pd-top-100'>
     <div className="productdetails_firstdiv container">
     <img src="" alt="Product image" />
      <h4 className='productdetails_title'>{title}</h4>
      <p className='productdetails_description'>Description</p>
     </div>
     <div className="productdetails_seconddiv container">
      <input type="number" /><button className="btn">Add to Cart</button>
      
     </div>


      
    </div>
  )
}

export default Productdetails