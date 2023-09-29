import React from 'react'
import"./userlanding.css"
import Design from '../../componets/Design/Design'
import Header from '../../componets/Header/Header'
import Banner from '../../componets/Banner/Banner'

const Userlanding = () => {
  return (
    <>
    <div id='image_division'> 

    <div id="content">

        <Header/>
        <Banner/>
    </div>

    <div id="display_main_div">
        <Design/>
      </div>
      </div>
    </>
  )
}

export default Userlanding
