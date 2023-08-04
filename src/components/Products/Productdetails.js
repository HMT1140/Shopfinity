import React, { useEffect, useState } from 'react';

import { useSelector ,useDispatch } from 'react-redux';
import { getdata } from '../features/ProductdetailsSlice';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Productdetails.css'

const Productdetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); 

  useEffect(() => {
    dispatch(getdata(id)); // Fetch data for the specific product using the id
  }, [dispatch, id]);

  const data = useSelector((state)=>state.productdetail.content)
  const loading = useSelector((state)=> state.productdetail.loading)

  const [counter, setcounter] = useState(0)
  const onplusclick = ()=>{
     setcounter(counter +1)
  }
  
 const onnegclick = ()=>{
   setcounter (counter -1)
 }

 


  return (
    <div>
      {loading === true? <Spinner className='spinnerproductdetails'/>: 
      data.map((val)=>{
        return (
 <>
        <div className="productdetails_firstdiv ">
        <div className="imageandtitlediv">
        <img src={val.image} alt="Product image" width={600} height={300}/>
         <h4 className='productdetails_title'>{val.title}</h4>
        </div>
         <div className="descandbutton">
         <p className='productdetails_description'>{val.description}</p>
         <div className="counterdiv">
          <button className='bttn' onClick={onnegclick}>-</button>
          <p>{counter}</p>
          <button className='bttn' onClick={onplusclick}>+</button>
         </div>
        
       
       <button className="btn" >Add to Cart</button>
        
         </div>
        
        </div>
   
        </>
         
    ) 
      })
      
      }
    </div>
  )
}

export default Productdetails