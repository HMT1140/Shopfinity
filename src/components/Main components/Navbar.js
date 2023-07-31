import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand " to="/home"><h3 className="headingcolor">Shopfinity</h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contactus">Contact Us</Link>
        </li>
        
        
      </ul>
      <form className="d-flex " role="search">
        <input className="form-control me-2 searchinput " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn " type="submit">Search</button>
      </form>
      <form className="d-flex mx-10" role="button">
       <div className="container ">
       <Link className="mx-5 nav-link" to="/shoppingcart"><AiOutlineShoppingCart/></Link>
       </div>
        
      </form>
      <form className="d-flex mx-3" role="button">
       <div className="container ">
       <a href="#"><button className="btn  mx-3">Login</button></a>
      <a href="#"> <button className="btn  mx-1">Signup</button></a>
        
      
       </div>
        
      </form>
      
      
      
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar