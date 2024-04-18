import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './packageDisplay.css'
import Aos from 'aos'

Aos.init()
Aos.refresh()

const Rest = ({ packagee }) => {
      return (
           
            <div data-aos="zoom-in-down" className='package_container'>
                  <Card className=''>
                        <Link to={`/package/${packagee._id}`}>
                              <Card.Img className='card_img' src={packagee.images[0]} variant='top' />
                        </Link>

                        <Card.Body>
                              <Link to={`/package/${packagee._id}`}>
                                    <Card.Title className='card_title'>{packagee.name}</Card.Title>
                              </Link>
                        </Card.Body>
                  </Card>
            </div>
      )
}

export default Rest
