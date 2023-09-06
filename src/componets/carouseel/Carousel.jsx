import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
  import "./Carousel.css"


const Carousel = () => {
  return (
    <>
      <MDBCarousel className="custom-carousel"  showIndicators showControls fade>
        
      <MDBCarouselItem
    
        className='w-100  d-block'
        // style={{}}
        itemId={1}
       
        src="https://as1.ftcdn.net/v2/jpg/06/15/95/66/1000_F_615956615_qdjsGwXPwXNhzpbweozj1JYjNSo63tws.jpg"
        alt='...'
      >
        
        <p className='carouselCaption'>Unleash Potential With EmployEase</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        // style={{height:"80vh",padding:"10px 10px"}}

        itemId={2}
        src="https://as2.ftcdn.net/v2/jpg/06/23/94/69/1000_F_623946975_1x94QiaSsxkkzQvYZrUswO6GTGIWFRqC.jpg"
        alt='...'
      >
        
        <p className='carouselCaption'>Unleash Potential With EmployEase</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        // style={{height:"80vh",padding:"10px 10px"}}

        itemId={3}
        src="https://as1.ftcdn.net/v2/jpg/04/28/31/34/1000_F_428313407_dtcB1cfHyPfDk2IIrsgPd4Cn2GPAsWSM.jpg"
        alt='...'
      >
        
        <p className='carouselCaption'>Unleash Potential With EmployEase</p>
      </MDBCarouselItem>
    </MDBCarousel>

    </>
  )
}

export default Carousel
