import React from 'react'
import { Container } from 'react-bootstrap';
import { Tabs } from "antd";
import { Button, Row, Col } from 'react-bootstrap'

const { TabPane } = Tabs;

const UserProfile = () => {
      const user = JSON.parse(localStorage.getItem('userInfo'))

      return (
            <>
                  <Container>

                        <div className="ml-3">
                              <h2 className="text-center m-2" style={{ fontSize: "35px" }}>User Profile</h2>
                              <Row className='align-items-center'>
                                    <Col className='text-right'>

                                    </Col>
                              </Row>
                              <Tabs defaultActiveKey="1">
                                    <TabPane tab="Profile Info" key="1">
                                          <div className="row">

                                                <h1>Name : {user.name}</h1>
                                                <h1>Email : {user.email}</h1>
                                          </div>
                                    </TabPane>
                                    <TabPane tab="Therapy room bookings" key="2">
                                          <div className="row">

                                              <p>usrroombookings</p>
                                          </div>
                                    </TabPane>
                                    <TabPane tab="Package Bookings" key="3">

                                          <div className="row">
                                               <p> User Table reservations screen</p>
                                          </div>

                                    </TabPane>
                                    <TabPane tab="Studio Bookings" key="4">

                                          <div className="row">

                                          </div>

                                    </TabPane>
                                    <TabPane tab="Online Order Status" key="5">

                                          <div className="row">
                                              <p> User skin care orders screen</p>
                                          </div>

                                    </TabPane>
                              </Tabs>
                        </div>
                  </Container >
            </>
      )
}

export default UserProfile