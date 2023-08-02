import React ,{useState} from 'react'
import './Productlist.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import  {useSelector } from 'react-redux/es/hooks/useSelector';


const Productlist = (props) => {
  const {title , price ,description , image , category}= props
  const HandleOnClick= ()=>{
    
  }
  const product_title =useSelector((state)=>state.product.data)


 
 
    
  
  return (
    

    <div className=" productlist container ">
    <div className="imagediv">
    <img className="justify-content-center "src={image} alt="product image" width={150} height={120}/>
    </div>
    <h6 className='my-1'>{`${title.slice(0, 30)}...`}</h6>
    <p>${price}</p>
    <Link to='/productdetails'><Button className='button_productlist'>Details</Button></Link>
    


  </div>
  
  )
}

export default Productlist