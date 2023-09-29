import React from 'react'
import "./header.css"
import Logo from "../../image/logo.jpg"
// import Button from 'react-bootstrap/Button';



const Header = () => {
  const  handleShow=()=>{
    console.log("hy punde");
  }
  return (
    <>

    <div id="Header_main_div">

        <div  style={{height:"6rem"}}>
        {/* <h1 className="header_heading">EmployEase</h1> */} 
        <img src={Logo}   alt="" />
        </div>
         
        <div>
        <ul className="header_lists">
          <li style={{listStyle:"none"}}>Home</li>
          <li style={{listStyle:"none"}}>About</li>
          <li style={{listStyle:"none"}}>Services</li>
        </ul>
      </div>


      <div>
        <button className="header_buttton" onClick={()=>handleShow()}>
          Contact Us 
        </button>
      </div>


    </div>
      
    </>
  )
}

export default Header
