import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Verycard from './Verycard';

function Slidercard() {
  return (
    <>
   <Carousel data-bs-theme="white" >
      <Carousel.Item>
       
        <Verycard/>
      
      </Carousel.Item>
      <Carousel.Item>
      <Verycard/>
       
      </Carousel.Item>
      <Carousel.Item>
      <Verycard/>
       
      </Carousel.Item>
    </Carousel>
      
    </>
  )
}

export default Slidercard
