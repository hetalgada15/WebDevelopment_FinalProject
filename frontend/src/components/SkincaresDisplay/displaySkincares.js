import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './skincares.css'

const Skincare = ({ skincare }) => {
      return (
            <Card className='my-3 p-3 rounded'>
                  <Link to={`/skincare/${skincare._id}`}>
                        <Card.Img className='card-img' src={skincare.image} variant='top' />
                  </Link>

                  <Card.Body>
                        <Link to={`/skincare/${skincare._id}`}>
                              <Card.Title as='div' style={{ color: "black" }}><strong>{skincare.name}</strong></Card.Title>
                        </Link>

                        <Card.Text as='h3' style={{fontSize:"18px"}}>
                              $ {skincare.price}
                        </Card.Text>
                  </Card.Body>
            </Card>
      )
}

export default Skincare
