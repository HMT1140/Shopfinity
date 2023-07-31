import React, {useEffect, useState} from 'react'

import Productlist from '../Products/Productlist'
import Spinner from '../extra features/Spinner'



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
      { loading === true? <Spinner/> : productdata.map((val)=>{
        return <div className="col-md-4 my-5">
          <Productlist title={val.title} price ={val.price} description = {val.description} image={val.image} category = {val.category}/>
        </div>
      })}
    </div>
  )
}

export default Shop