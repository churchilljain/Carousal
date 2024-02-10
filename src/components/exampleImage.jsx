import React from 'react'
import Image from 'react-bootstrap/Image'
import './ep.css'

  const ExampleCarouselImage = ({ data }) => {
    return (
          
          <Image
            src={data.src}
            alt={data.alt}
            className='img'
          />       
      
    );
  };


export default ExampleCarouselImage