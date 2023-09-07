import React from 'react'
import "./home.css"
import Video from "../assets/bg.mp4"
import Logo from "../image/logo.jpg"

import Navigation from '../componets/Navigarion'
import  Image from "../image/carouselimage.png"
import Carousel from '../componets/carouseel/Carousel';
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
  return (

    <>
    <div className="mainDiv" style={{height:'100vh'}}>

     <Navigation/>     
     <video autoPlay muted loop id="myVideo">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="content">
        <div className="card w-25">
          <img src={Logo} alt="logo"  style={{padding: "1px 65px"}}/>
          
          <div className="card-body" style={{ marginTop: "-60px" }}>
            <h6 className="card-title">Unlesh The Potential With EmployEase</h6>
            <p className="card-text">
              Search and manage your jobs with <span className='ease'>ease.</span> free and open source job
              portal application by <span className='ease'>EmployEase</span>
            </p>
            <div className="d-flex justify-content-between mt-5">
              <p>
                Not a user Register link to <Button className='success' onClick={()=>navigate("/commonregister")}>Register</Button>{" "}
              </p>
              
            </div>
          </div>
        </div>
      </div>


      

     

      
    </div>

     




    </>
  )
}

export default Home
