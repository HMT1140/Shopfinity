import React, {useEffect, useState} from 'react'

import Productlist from '../Products/Productlist'
import SpinnerFeature from '../extra features/Spinner'
import { fetchdata } from '../features/ProductSlice'
import { useDispatch } from 'react-redux'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'





const Shop = () => {
 const product= useSelector((state)=> state.product.content)

 const product_loading = useSelector((state) => state.product.loading)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(fetchdata())
  }, [])
  
  return (
    <div className="row  justify-content-left">
      { product_loading === true? <SpinnerFeature/> : product.map((val)=>{
        return <div className="  shoplistitem col-sm-4   ">
          <Productlist title={val.title} image = {val.image} price = {val.price}/>
        </div>
      })}
    </div>
  )
}

export default Shop