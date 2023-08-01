import React, {useEffect, useState} from 'react'

import Productlist from '../Products/Productlist'
import SpinnerFeature from '../extra features/Spinner'




const Shop = () => {
  const [productdata, setproductdata] = useState([])
  const [loading, setloading] = useState(false)
  useEffect(() => {
    
  
    return async() => {
      const url = 'https://fakestoreapi.com/products';
      setloading(true)
      
    const data = await fetch(url)
    const parseddata= await data.json();
    setproductdata(parseddata)
    setloading(false)
    

    
   
    }
  }, [])
  
  return (
    <div className="row">
      { loading === true? <SpinnerFeature/> : productdata.map((val)=>{
        return <div className=" container shoplistitem col-md-8 my-2">
          <Productlist title={val.title} price ={val.price} description = {val.description} image={val.image} category = {val.category}/>
        </div>
      })}
    </div>
  )
}

export default Shop