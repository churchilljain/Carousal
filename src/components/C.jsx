import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './exampleImage';

function UncontrolledExample(props) {

    const slidesData = {
        "slides":[
            {
                "src":"https://picsum.photos/seed/img1/1300/550",
                "alt":"1st image"
            },
            {
                "src":"https://picsum.photos/seed/img2/1300/550",
                "alt":"2nd image"
            },
            {
                "src":"https://picsum.photos/seed/img3/1300/550",
                "alt":"3rd image"
            },
            {
                "src":"https://picsum.photos/seed/img4/1300/550",
                "alt":"4th image"
            },
            {
                "src":"https://picsum.photos/seed/img5/1300/550",
                "alt":"5th image"
            }
        ]
    }
  return (

    <div>
    <Carousel>
        {slidesData.slides.map((data,index) =>{
            return(
                <Carousel.Item key={index} >
                <ExampleCarouselImage data={data} />
                <Carousel.Caption>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
            )
        })}

      {/* <Carousel.Item>
        <ExampleCarouselImage text="Second slide" name='img2'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" name='img3'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" name='img4' />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" name='img5'/>
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}

    </Carousel>
    </div>
  );
}

export default UncontrolledExample;