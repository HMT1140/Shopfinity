import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className='loginpagemaindiv text-center'>
      <div className="loginpagediv text-center">
        <h3 className='heading_login'>Login </h3>
       <div className="inputdiv container">
       <input type="email" className="inputs" placeholder='Enter your email' />
        <input type="password" className="inputs" placeholder='Enter your password' maxLength={12}/>
       </div>
        <Link to="/home" ><button className="btn">Click to proceed </button></Link>
      </div>
    </div>
  )
}

export default Login