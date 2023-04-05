import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block carousel-img"
            
            src="https://images.pexels.com/photos/15100534/pexels-photo-15100534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block carousel-img"
            
            src="https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
         
            src="https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Home
