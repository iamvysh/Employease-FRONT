import React from 'react'
import"./userlanding.css"
import Design from '../../componets/Design/Design'
import Header from '../../componets/Header/Header'
import Banner from '../../componets/Banner/Banner'
// import { useNavigate } from 'react-router-dom'

const Userlanding = () => {
  // const navigate=useNavigate()
  return (
    <>
      <div id='image_division'> 

    <div id="content" >

        <Header/>
        <Banner/>
    </div>

    <div id="display_main_div">
        <Design/>
      </div>


    <div id="about">
      <h1 style={{textTransform:"uppercase",fontWeight:"bolder",fontSize:"3rem"}}>About</h1>

      <p className='parasection'> 
      Welcome to EmployEase, where we connect talent with opportunity. With a commitment to excellence and a passion for matching the right people with the right roles, we are your trusted partner in workforce solutions. Our expertise, diverse talent pool, and client-centric approach make us the go-to choice for companies seeking top-tier talent and job seekers looking for rewarding careers. Explore how EmployEase can help you achieve your goals today
      </p>
    </div>
      </div>
    </>
  )
}

export default Userlanding
