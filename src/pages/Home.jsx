import React from 'react'
import "./home.css"

import Navigation from '../componets/Navigarion'
import  Image from "../image/carouselimage.png"
import Carousel from '../componets/carouseel/Carousel';
const Home = () => {
  return (
    <>
    <div className="mainDiv" style={{height:'100vh'}}>

     <Navigation/>     
     <div className="corouselDiv" style={{height:'70%',backgroundColor:' rgb(243, 231, 233)',width:'100%'}}>
    
    {/* <h2>carouseel</h2> */}
      <Carousel   />

     </div>
     <div className="aboutDiv" id='about' style={{height:'90%',backgroundColor:'aqua',width:'100%'}}>

      <h1 className='aboutHead'>About  Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum doloribus nobis, at autem aut vero veniam praesentium pariatur repudiandae culpa ea, reprehenderit labore totam consequuntur quod maiores unde ex itaque.</p>

     </div>
    </div>

     




    </>
  )
}

export default Home
