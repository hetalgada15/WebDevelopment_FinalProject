import React, { useEffect, useState } from 'react'
import { Carousel, Row, Col, ListGroup } from 'react-bootstrap'
import moment from 'moment'
import Swal from 'sweetalert2'
import axios from "axios";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useDispatch, useSelector } from 'react-redux'
import { bookRoomDetails } from '../../actions/roomAction'
import StripeCheckout from 'react-stripe-checkout'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import '../BookingScreen/booking.css'

Aos.init()
Aos.refresh()

const BookingScreen = ({ match }) => {


      const fromdate = moment(match.params.fromdate, 'DD-MM-YYYY')
      const todate = moment(match.params.todate, 'DD-MM-YYYY')
      const totalDays = moment.duration(todate.diff(fromdate)).asDays() + 1
      const [totalAmount, settotalAmount] = useState()

      const dispatch = useDispatch()

      const roomBookdetails = useSelector((state) => state.roomBookdetails)
      const { loading, error, rooms } = roomBookdetails


      useEffect(() => {
            dispatch(bookRoomDetails(match.params.roomid))

      }, [dispatch, match])

      async function tokenHander(token) {

            console.log(token);
            const bookingDetails = {
                  token,
                  userid: JSON.parse(localStorage.getItem('userInfo'))._id,
                  rooms,
                  fromdate,
                  todate,
                  totalDays,
                  totalAmount: rooms.rentperday * totalDays

            }

            try {

                  const result = await axios.post('http://localhost:6500/api/booking/bookroom', bookingDetails)
                  console.log(result)
                  Swal.fire('SUCCESS', 'Room has been booked.', 'success').then(result => {
                        window.location.href = '/rooms'
                  })

            } catch (error) {
                  Swal.fire('Oops', 'Something went wrong , please try again.', 'error')
                  console.log(error);

            }
      }

      return (

            <>

                  <div>
                        {loading ? (
                              <Loader />
                        ) : error ? (
                              <Message />
                        ) : (
                              <>
                                    <div className='m-5'>
                                          <div className="row p-3 mb-5 bs" data-aos="zoom-out-right">

                                                <div >
                                                      <div className='bn'>
                                                            <Row>
                                                                  <Col md={12}>
                                                                        <Carousel nextLabel="" prevLabel="">
                                                                              {rooms.imageUrls && rooms.imageUrls.map((url) => {
                                                                                    return (
                                                                                          <Carousel.Item>
                                                                                                <img
                                                                                                      src={url}
                                                                                                      className="img-fluid d-block w-100"
                                                                                                      style={{ height: "500px" }}
                                                                                                />
                                                                                          </Carousel.Item>
                                                                                    );
                                                                              })}
                                                                        </Carousel>
                                                                  </Col>


                                                            </Row>

                                                            <Row>
                                                                  <Col >
                                                                        <br></br>
                                                                        <div class="vl">
                                                                              <div className="jk">
                                                                                    <h6>Glamour Wellness</h6>
                                                                                    <h1 >{rooms.name}</h1>
                                                                              </div>


                                                                        </div>            <hr></hr>

                                                                        <h6>Amenities</h6>
                                                                        <hr></hr>
                                                                        <h6>About The Room</h6>
                                                                        <p>{rooms.description}</p>

                                                                        <h6>Features</h6>
                                                                        <ul class="b">
                                                                              <li>{rooms.features1}</li>
                                                                              <li>{rooms.features2}</li>
                                                                              <li>{rooms.features3}</li>
                                                                              <li>{rooms.features4}</li>
                                                                              <li>{rooms.features5}</li>
                                                                        </ul>

                                                                  </Col>


                                                                  <Col >
                                                                        
                                                                        <ListGroup as="ul" align="center">
                                                                              <ListGroup.Item as="li" disabled><b>Suitable for: </b> {rooms.maxcount} person</ListGroup.Item>
                                                                              <ListGroup.Item as="li" disabled>
                                                                                    <b>Room Type: </b> {rooms.type}
                                                                              </ListGroup.Item>
                                                                              <ListGroup.Item as="li" disabled ><b>Cost</b> USD {rooms.rentperday} Per day</ListGroup.Item>
                                                                        </ListGroup>
                                                                        <br></br>
                                                                        <ListGroup as="ul" align="center">
                                                                              <ListGroup.Item as="li" variant="secondary">
                                                                                    <b className='stay_details_h'>Stay Details</b>
                                                                              </ListGroup.Item>
                                                                              <ListGroup.Item as="li" disabled><b>Name: </b> {JSON.parse(localStorage.getItem('userInfo')).name}</ListGroup.Item>
                                                                              <ListGroup.Item as="li" disabled><b>From: </b> {match.params.fromdate}</ListGroup.Item>
                                                                              <ListGroup.Item as="li" disabled><b>To: </b> {match.params.todate}</ListGroup.Item>
                                                                              <ListGroup.Item as="li" disabled>
                                                                                    <b>Total Days : </b> {totalDays}
                                                                              </ListGroup.Item>

                                                                              <ListGroup.Item as="li" disabled ><b>Total Amount:</b> USD {rooms.rentperday * totalDays}</ListGroup.Item>

                                                                              <StripeCheckout Checkout
                                                                                    amount={rooms.rentperday * totalDays * 100}
                                                                                    shippingAddress
                                                                                    token={tokenHander}
                                                                                    stripeKey='pk_test_51LQQfcDVLv2wJ0j5xoRFTr63YM0B1XXwatlXQ7ui98AUV4C2yOAwOjbeaMOzFyFrEa0mBcYYqJTNx62hhaDhbbRu00easu713g'
                                                                                    currency='USD'
                                                                              >

                                                                                    <ListGroup.Item as="li" disabled > <button class="btn btn-dark btn-inline rounded-pill shadow-sm">Pay Total</button></ListGroup.Item>

                                                                              </StripeCheckout>

                                                                        </ListGroup>
                                                                  </Col>
                                                            </Row>

                                                      </div>

                                                </div>

                                          </div>
                                    </div >
                              </>
                        )}
                  </div>
            </>

      )
}

export default BookingScreen