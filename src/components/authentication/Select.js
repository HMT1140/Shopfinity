import React from 'react'
import './Select.css'
import { Link } from 'react-router-dom'

const Select = () => {
  return (
    <div className="maindiv">
        <div className=' container text-center slecetmaindiv'>
       <Link to='/login'> <button className="button" type='submit'>Click to Login</button> <br /></Link>
      <Link to='/signup'><button className="button" type='submit'>Click to Signup</button></Link> 

    </div>
    </div>
  )
}

export default Select