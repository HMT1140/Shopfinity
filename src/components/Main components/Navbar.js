import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import './Navbar.css'
const Navbar = () => {
  const location=  useLocation()
  return (
    <div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand " to="/home"><h3 className="headingcolor">Shopfinity</h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==="/home"? 'active': ''} text-${location.pathname=== "/home"? 'info':''}`} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/shop"? 'active': ''} text-${location.pathname=== "/shop"? 'info':''}`} to="/shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/Contactus"? 'active': ''} text-${location.pathname=== "/Contactus"? 'info':''}`} to="/Contactus">Contact Us</Link>
        </li>
        
        
      </ul>
      <form className="d-flex searchdiv" role="search">
        <input className="form-control me-2 searchinput " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn " type="submit">Search</button>
      </form>
      <form className="d-flex " role="button">
       <div className=" container  ">
       <Link className="mx-1 nav-link" to="/shoppingcart"><h5 className={`shoppingcartdiv text-${location.pathname==="/Shoppingcart"? 'info':''}`} ><AiOutlineShoppingCart /> Cart</h5></Link>
       </div>
        
      </form>
      <form className="d-flex mx-1" role="button">
       <div className="container ">
       <a href="/login"><button className="btn  mx-2">Login/Signup</button></a>

        
      
       </div>
        
      </form>
      
      
      
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar