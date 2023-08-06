import React from 'react'
import './Newproductpage.css'
import { useState } from 'react'
import { addnewproduct } from '../features/ProductSlice'
import { useDispatch} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';


const Newproductpage = () => {
const [product, setproduct] = useState({"title":'', "description":'', "image":'',"price":0})
const Handleonchange= (event)=>{
  setproduct({...product , [event.target.name]: event.target.value})
  
}
const dispatch = useDispatch();
const Handleonclick= ()=>{
 dispatch(addnewproduct(product))


}
  return (
    <div className="container newproductpagemaindiv">
     
      <div className="newproductpagediv">
        <div className="headingdiv">
          <h2 className='heading'>New Product Page</h2>
        </div>
        <label htmlFor="title" className='title'>Title:</label>
        <input type="text" name='title' className='inputsnewporductpage' value={product.title} onChange={Handleonchange}/>
        <label htmlFor="description"  className='title'>Description:</label>
        <input type="text" name='description'className='inputsnewporductpage'  value={product.description} onChange={Handleonchange}/>
        
        <label htmlFor="img" className='title'>Select image:</label>
        <div className="imagediv  ">
        <input type="file" id='img' name='image' accept='image/*'className='inputsnewporductpageimage' value={product.image} onChange={Handleonchange}/>
        </div>
         <label htmlFor="price" className='title'>Price:</label>
         <input type="text" name='price' pattern='$00000' className='inputsnewporductpage'onChange={Handleonchange} value={product.price}/>
          <button className="btn" onClick={Handleonclick}>Done</button>
      </div>
    </div>
  )
}

export default Newproductpage