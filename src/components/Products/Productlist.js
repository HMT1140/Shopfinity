import React from 'react'
import './Productlist.css'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Productlist = (props) => {
  const {title , price ,description , image , category}= props
  const HandleOnClick= ()=>{
    
  }
 
 
    
  
  return (
    <div onclick={HandleOnClick}>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         Price = ${price}
        </Card.Text>
       <Link to='/productdetails'> <Button variant="primary" >Go somewhere</Button></Link>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default Productlist