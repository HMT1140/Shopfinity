import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='container signupmaindiv text-center'>
      <div className="container signupdiv text-center">
        <h3 className='heading'>Sign Up</h3>
       <div className="inputdiv container">
       <input type="text" className="inputs" placeholder='Enter your username'required /><br />
        <input type="email" className="inputs" placeholder='Enter your email'required/><br />
        <input type="password" className="inputs" placeholder='Enter your password' maxLength={12} required/>
       </div>
        
        <Link to='/login'> <button className="btn" type='submit'>Click to Proceed</button></Link>

      </div>
    </div>
  )
}

export default Signup