import React from 'react'
import "./header.css"
import Logo from "../../image/logo.jpg"
import { useNavigate } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';



const Header = () => {
  const navigate=useNavigate()
  
  return (
    <>

    <div id="Header_main_div" >

        <div  style={{height:"6rem"}}>
        {/* <h1 className="header_heading">EmployEase</h1> */} 
        <img style={{width:'10rem',height:'5rem'}} src={Logo}   alt="" />
        </div>
         
        <div style={{zIndex:"3"}}>
        <ul className="header_lists">
          <a style={{listStyle:"none"}}  >Home</a>
          <a style={{listStyle:"none"}}  href='#about'>About</a>
          <a >Services</a>
        </ul>
      </div>


      <div style={{zIndex:"2"}}>
        <button className="header_buttton" onClick={()=>navigate("/userjobdetails")} style={{zIndex:"1000000"}}>
          Jobs 
        </button>
      </div>


    </div>
      
    </>
  )
}

export default Header
