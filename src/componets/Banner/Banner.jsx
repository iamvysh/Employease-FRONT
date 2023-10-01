import React from 'react'
import "./banner.css"
import bannerRight from "../../image/bannerRight.png"
import { useNavigate } from 'react-router-dom'
const Banner = () => {

  const navigate=useNavigate()
  return (
    <>

<div className="banner-container">
      <div className="banner-content">
        <h3 className="banner-title">
          SPREADING WINGS OF TECHNOLOGY
        </h3>
        <h1 className="banner-subtitle">
          We make you <br />{" "}
          <span className="banner-subtitle-bold">"Go Digital"</span>
        </h1>
        <p className="banner-description">
          Creativity is our Passion & We Transform your requirement Digitally.
        </p>
        <button className="banner-button" onClick={()=>navigate("/jobpost")} style={{zIndex:"1"}}>
          GET START
        </button>
      </div>
      <div className="banner-image">
        <img src={bannerRight} alt="banner" />
      </div>
    </div>
      
    </>
  )
}

export default Banner
