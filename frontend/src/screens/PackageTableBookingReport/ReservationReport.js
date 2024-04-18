import React, { useEffect, useRef } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { listBookings } from '../../actions/tableBookinAction'
import logo from './pcgbooking.png'
import './reservation.css'
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const ReservationReport = (history) => {
    const dispatch = useDispatch()

    let count = 1
    let tot = 0

    const tablebookingList = useSelector(state => state.tablebookingList)
    const { loading, error, glambookings } = tablebookingList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin





    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listBookings())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo])

    const pdfExportComponent = useRef(null)

    const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save()


    }

    return (
        <>
            <div>
                <Row className=''>

                    <Col className='generate'>
                        <Button className='report' primary={true} onClick={handleExportWithComponent}>Generate Report</Button>
                    </Col>
                </Row>
            </div>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                : (
                    <PDFExport ref={pdfExportComponent} paperSize="A2" margin='100'>
                        <div style={{ background: 'white' }}>
                            <Container className='tbl' style={{ boxSizing: 'border-box' }}>

                                <Container className='justify-content-center' style={{ width: '50%' }}>
                                    <img style={{ width: '50px' }} src={logo} className='smallimg'></img>
                                </Container>

                                <p className='pp mt-4' >Package Booking Summary</p>
                                <br /><center>
                                    <tr className='thh'>
                                        <th style={{ paddingLeft: '20px' }}>Sr. No.</th>
                                        <th style={{ paddingLeft: '20px' }}>Customer</th>
                                        <th style={{ paddingLeft: '30px' }}>Contact</th>
                                        <th style={{ paddingLeft: '20px' }}>Package name</th>
                                        <th style={{ paddingLeft: '20px' }}>Date</th>
                                        <th style={{ paddingLeft: '20px' }}>Bigversions</th>
                                        <th style={{ paddingLeft: '20px' }}>Miniversions</th>
                                        <th style={{ paddingLeft: '20px' }}>Timing</th>
                                        <th style={{ paddingLeft: '20px' }}>Status</th>
                                    </tr>


                                    {glambookings.map((glambookings) => (

                                        <tr className='tdd' key={glambookings._id} >
                                            <td style={{ paddingLeft: '10px' }}>{tot = count++}</td>

                                            <td style={{ paddingLeft: '10px' }}>{glambookings.userName}</td>
                                            <td style={{ paddingLeft: '20px' }}>{glambookings.phoneNo}</td>
                                            <td style={{ paddingLeft: '10px' }}>{glambookings.packageName}</td>
                                            <td style={{ paddingLeft: '10px' }}>{glambookings.date}</td>
                                            <td style={{ paddingLeft: '10px' }}>{glambookings.adults}</td>
                                            <td style={{ paddingLeft: '10px' }}>{glambookings.childrens}</td>
                                            <td style={{ paddingLeft: '10px' }}>{glambookings.time}</td>
                                            <td style={{ paddingLeft: '20px' }}>{glambookings.status}</td>
                                        </tr>

                                    ))}
                                </center>
                                <br />
                                <p className='pp' ><b>Total Number of Table Bookings: {tot}</b></p>



                            </Container>
                        </div>
                    </PDFExport>
                )}


        </>
    )
}


export default ReservationReport