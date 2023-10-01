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
        <button className="header_buttton" onClick={()=>handleShow()} style={{zIndex:"1000000"}}>
          Contact Us 
        </button>
      </div>


    </div>
      
    </>
  )
}

export default Header
