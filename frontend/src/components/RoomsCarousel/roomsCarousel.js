import React from 'react'
import { Carousel } from 'react-bootstrap';

import Room1 from '../assets/images/room1.jpg'
import Room2 from '../assets/images/room2.jpg'
import Room3 from '../assets/images/room3.jpg'
import Room4 from '../assets/images/room4.jpg'
import Room5 from '../assets/images/room5.jpg'

const RoomsCarousel = () => {
      return (
            <Carousel fade={true} pause={false}>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src="https://img.grouponcdn.com/bynder/2ymfJu8qBobimBm6iMfmiAdiDymb/2y-2048x1229/v1/t440x300.jpg"
                              alt="First slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              {/* <h3>First slide label</h3> */}
                              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              // src={Room2}
                              src="https://static.wixstatic.com/media/11062b_9ba8e3421c344d59a82c7203f33b20e0~mv2.jpg/v1/fill/w_640,h_402,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Spa%20Day.jpg"
                              alt="Second slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              {/* <h3>Second slide label</h3> */}
                              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              // src={Room3}
                              src="https://image-tc.galaxy.tf/wijpeg-6a583avt7rjcqvuzofh3mn5yt/1561129494-5d0cf2162a4bc-thumb.jpg?width=1920"
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              {/* <h3>Third slide label</h3> */}
                              {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              // src={Room4}
                              src="https://destinationdeluxe.com/wp-content/uploads/2023/01/Gharieni-Group-Spa-Wellness-Technology-Destination-Deluxe.jpg"
                              alt="Fourth slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              {/* <h3>Third slide label</h3> */}
                              {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                  </Carousel.Item>
                  
            </Carousel>


      )
}

export default RoomsCarousel
