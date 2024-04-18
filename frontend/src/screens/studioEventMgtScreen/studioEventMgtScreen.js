import React from 'react'
import { Tabs } from "antd";
import { Button, Row, Col } from 'react-bootstrap'
import StudioListScreen from '../studioListScreen/studioListScreen'
import SignupScreen from '../StudioInsertScreen/studioInsertScreen'
import ConInsertScreen from '../conferenceInsertScreen/conferenceInsert'
import ConferenceListScreen from '../conferenceListScreen/conferenceListScreen'
import { Container } from 'react-bootstrap';
import ConferenceReport from '../ConferenceReport/ConferenceReport.js'
import StudioReport from '../StudioReportScreen/StudioReportScreen.js'

const { TabPane } = Tabs;


const StudEventMgtScreen = () => {
    return (
          <Container>
                <div className="ml-3">
                      <h2 className="text-center m-2" style={{ fontSize: "35px" }}>STUDIO MANAGEMENT</h2>

                      <Tabs defaultActiveKey="1">
                            <TabPane tab="Event Studio List" key="1">
                                  <div className="row">
                                        <StudioListScreen />

                                  </div>
                            </TabPane>
                            <TabPane tab="Add new studio" key="2">

                                  <div className="row">
                                        <SignupScreen />
                                  </div>

                            </TabPane>

                            <TabPane tab="Available studio list report" key="6">
                                  <div className="row">
                                        <StudioReport/>

                                  </div>
                            </TabPane>
                            
                            
                      </Tabs>
                </div>
          </Container>
    )
}

export default StudEventMgtScreen