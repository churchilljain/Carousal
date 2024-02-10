import React, {useState} from 'react'
import './Courasal.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel'
import {slides} from '../data/cdata.json'

const Courasal = ({data}) => {
        const [slide, setSlide] = useState(0);
        // console.log(data)

        const nextSlide = () => {
            setSlide(slide === data.length - 1 ? 0 : slide + 1);
          };
        
          const prevSlide = () => {
            setSlide(slide === 0 ? data.length - 1 : slide - 1);
          };

  return (
    <div className='main'>
        <div className='courasal'>

        <BsArrowLeftCircleFill 
            onClick={prevSlide} 
            className="arrow arrow-left" />

            {data.map((item, idx) => {
                return <img src={item.src} 
                        alt={item.alt} 
                        key={idx} 
                        className={slide === idx ? "slides" : "slides hidden_slide"} />
            })}

        <BsArrowRightCircleFill
                onClick={nextSlide}
                className="arrow arrow-right"
            />

        </div>
        <span className='indicators'>
            {data.map((_ , idx) => {
                return <button key={idx} 
                onClick={() => setSlide(idx)} 
                className={slide=== idx? "indicator": "inactive-indicator"}></button>
            })}
        </span>
    </div>
    // <div>
    //     <Carousel>
    //   <Carousel.Item>
    //   <img src={slides[0].src} 
    //                     // alt={item.alt} 
    //                     key={1}  />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //   <img src={slides[0].src} 
    //                     // alt={item.alt} 
    //                      key={2} />
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //   <img src={slides[0].src} 
    //                     // alt={item.alt} 
    //                     key={3}  />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    // </div>
  )
}
export default Courasal