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
import  {useSelector ,} from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { updateid } from '../features/ProductdetailsSlice';


const Productlist = (props) => {
  const {product }= props
 
  const HandleOnClick= ()=>{
    
  }

  const dispatch = useDispatch();
  const UPDATEID =()=>{
    dispatch(updateid())
  }
  UPDATEID(product.id);
  
  
  
 


 
 
    
  
  return (
    

    <div key={product.id} className=" productlist container ">
    <div className="imagediv">
    <img className="justify-content-center "src={product.image} alt="product image" width={150} height={120}/>
    </div>
    <h6 className='my-1'>{`${product.title.slice(0, 30)}...`}</h6>
    <p>${product.price}</p>

    <Link to={`/productdetails/${product.id}`}><Button className='button_productlist'>Details</Button></Link>

    
    


  </div>
  
  )
}

export default Productlist
