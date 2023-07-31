import React from 'react'
import { Sidebardata } from './Sidebardata'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="sidebar">
      
      {Sidebardata.map((val)=>{
        return <Link className="sidebarlist " to={val.link}> <li className="my-4" onclick={()=>{window.location.pathname = val.link}}>{val.icon} {val.title}</li> </Link>
      })}
     
       

    </div>
  )
}

export default Sidebar
