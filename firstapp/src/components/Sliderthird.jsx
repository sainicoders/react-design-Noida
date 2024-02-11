import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Thirdcard from './Thirdcard';


function Sliderthird() {
  return (
    <>
      <Carousel data-bs-theme="white" >
      <Carousel.Item>
       
        <Thirdcard/>
      
      </Carousel.Item>
      <Carousel.Item>
      <Thirdcard/>
       
      </Carousel.Item>
      <Carousel.Item>
      <Thirdcard/>
       
      </Carousel.Item>
    </Carousel>
      
    </>
  )
}

export default Sliderthird
