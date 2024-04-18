import React, { useEffect } from 'react'
import Carousel from '../../components/SkincaresDisplay/skincareProductCarousal'
import {allSkincares} from '../../actions/skincaresAction'
import { useDispatch, useSelector } from 'react-redux'
import Skincare from '../../components/SkincaresDisplay/displaySkincares'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { Row, Col } from 'react-bootstrap'
import './skincare.css'
import SkincareSearch from '../../components/SkincareSearch/SkincareSearch'


const SkincareScreen = () => {

      const dispatch = useDispatch()

      const skincaresAll = useSelector((state) => state.skincaresAll)
      const { loading, error, skincares } = skincaresAll

      useEffect(() => {
            dispatch(allSkincares())
      }, [dispatch])


      return (
            <>
            <Carousel />
            <SkincareSearch />
            <br></br>
                <h1 style={{ textAlign: "center" }}>SkinCare Products</h1>
                {
                        loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>
                        ) : (

                              <Row className='ro' style={{ backgroundColor: "#f0f0f0" }} >

                              {skincares.map((skincare) =>

                                    <Col key={skincare._id} sm={12} md={6} lg={4} xl={4}>
                                          <Skincare skincare={skincare} />
                                    </Col>
                                   
                                    
                              
                               )}
                  </Row>
                  )}
                 
            </>
      )
}

export default SkincareScreen