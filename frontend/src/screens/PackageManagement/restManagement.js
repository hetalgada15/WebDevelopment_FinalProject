import React from 'react'
import { Tabs } from "antd";
import { Button, Row, Col } from 'react-bootstrap'
import PackageList from '../AllPackage/packageTable'
import AddPackage from '../PackageAdd/packageAdd'
import GlamBookings from '../TableBookingListScreen/tableBookinglistScreen'
import ReservationReport from '../PackageTableBookingReport/ReservationReport'
import { Container } from 'react-bootstrap';





const { TabPane } = Tabs;


const PackagegementScreen = () => {



      return (
            <Container>
                  <div className="ml-3">
                        <h2 className="text-center m-2" style={{ fontSize: "35px" }}>Glamour Collection Management</h2>
                        <br />

                        <br />
                        <Tabs defaultActiveKey="1">
                              <TabPane tab="Glam Kits List" key="1">
                                    <div className="row">
                                          <PackageList />

                                    </div>
                              </TabPane>
                              <TabPane tab="Add a new package" key="2">

                                    <div className="row">
                                          <AddPackage />
                                    </div>

                              </TabPane>

                              <TabPane tab="Package Booking" key="3">


                                    <div className='row'>

                                          <GlamBookings />

                                    </div>

                              </TabPane>

                              <TabPane tab="Package Booking Summary" key="4">

                                    <div className="row">

                                          <ReservationReport />

                                    </div>

                              </TabPane>

                        </Tabs>
                  </div>
            </Container>
      )
}

export default PackagegementScreen
