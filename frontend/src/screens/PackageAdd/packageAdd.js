import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Select, Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import FormContainer from '../../components/FormContainer'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { createRest } from '../../actions/packagesActions'
import Swal from 'sweetalert2'





const RestEditScreen = ({ match, history }) => {


      const [name, setName] = useState('')
      const [type, setType] = useState('')
      const [tables, setTables] = useState(0)
      const [phoneNo, setPhoneNo] = useState('')
      const [email, setEmail] = useState('')
      const [location, setLocation] = useState('')
      const [image1, setImage1] = useState('')
      const [image2, setImage2] = useState('')
      const [image3, setImage3] = useState('')
      const [description, setDescription] = useState('')
      const [uploading, setUploading] = useState(false)


      const dispatch = useDispatch()


      const createPackage = useSelector((state) => state.createPackage)
      const { loading, error, packages } = createPackage



      useEffect(() => {
            if (packages) {
                  Swal.fire('Congrats', 'PACKAGE ADDED SUCCESSFULY', 'success').then(result => {
                        window.location.href = '/packageManagement'
                  })
            }
      }, [history, packages])

      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(createRest(name, type, tables, phoneNo, email, location, image1,image2,image3, description))
      }



      const uploadFileHandler1 = async (e) => {
            const file = e.target.files[0]
            const formData = new FormData()
            formData.append('image', file)
            setUploading(true)

            try {
                  const { data } = await axios.post('http://localhost:6500/api/uploads/image', formData)

                  setImage1(data)
                  setUploading(false)
            } catch (error) {
                  console.error(error)
                  setUploading(false)
            }
      }

      const uploadFileHandler2 = async (e) => {
            const file = e.target.files[0]
            const formData = new FormData()
            formData.append('image', file)
            setUploading(true)

            try {
                 
                const { data } = await axios.post('http://localhost:6500/api/uploads/image', formData)

                  setImage2(data)
                  setUploading(false)
            } catch (error) {
                  console.error(error)
                  setUploading(false)
            }
      }

      const uploadFileHandler3 = async (e) => {
            const file = e.target.files[0]
            const formData = new FormData()
            formData.append('image', file)
            setUploading(true)

            try {
                  

                  const { data } = await axios.post('http://localhost:6500/api/uploads/image', formData)

                  setImage3(data)
                  setUploading(false)
            } catch (error) {
                  console.error(error)
                  setUploading(false)
            }
      }

      return (
            <>
                    <FormContainer>
                        <h1 style={{ textAlign: "center" }}>Add new package</h1>
                        {loading && <Loader />}
                        {error && <Message variant='danger'>{error} </Message>}
                        {loading ? (
                              <Loader />
                        ) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (
                              <Form onSubmit={submitHandler}>
                                    <Form.Group controlId='name'>
                                          <Form.Label>Name</Form.Label>
                                          <Form.Control
                                                type='name'
                                                placeholder='Enter name'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='type'>
                                          <Form.Label>Type</Form.Label>
                                          <Form value={type} onChange={(e) => setType(e.target.value)}>
                                                <select style={{ width: "100%" }}>
                                                      {/* <option value="Package"> </option> */}
                                                      <option value="starter_kit">StarterKit</option>
                                                      <option value="travel_kit">TravelKit</option>
                                                      <option value="special_ocassion">SpecialOcassion</option>
                                                      <option value="limited_edition">LimitedEdition</option>
         
                                                </select>
                                          </Form>

                                    </Form.Group>


                                    {/* <Form.Group controlId='type'>
                                    <Form.Label>Type</Form.Label>
                                    <Form.Dropdown  onChange={ (e) => setType(e.target.value)}>
                                          <Dropdown value="TravelKit">TravelKit</Dropdown>
                                          <Dropdown value="StarterKit">StarterKit</Dropdown>
                                    </Form.Dropdown>
                                    </Form.Group> */}


                                    <Form.Group controlId='number'>
                                          <Form.Label>Items</Form.Label>
                                          <Form.Control
                                                type='number'
                                                placeholder='Enter number of items in package'
                                                value={tables}
                                                onChange={(e) => setTables(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='price'>
                                          <Form.Label>Phone Number</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter Phone No'
                                                value={phoneNo}
                                                onChange={(e) => setPhoneNo(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='email'>
                                          <Form.Label>Email</Form.Label>
                                          <Form.Control
                                                type='email'
                                                placeholder='Enter Email'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='price'>
                                          <Form.Label>Products</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter Products'
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='description'>
                                          <Form.Label>Descrition</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter description'
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    {/* <Form.Group controlId='image'>
                                          <Form.Label>Image</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter Image url'
                                                value={image}
                                                onChange={(e) => setImage(e.target.value)}
                                          ></Form.Control>
                                          <Form.File
                                                id='image-file'
                                                label='Choose File'
                                                custom
                                                onChange={uploadFileHandler}
                                          ></Form.File>
                                          {uploading && <Loader />}
                                    </Form.Group> */}

                                    <Form.Group controlId='image'>
                                          <Form.Label>Image</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter Image url'
                                                value={image1}
                                                onChange={(e) => setImage1(e.target.value)}
                                          ></Form.Control>
                                          <Form.File
                                                id='image-file'
                                                label='Choose File'
                                                custom
                                                onChange={uploadFileHandler1}
                                          ></Form.File>
                                          {uploading && <Loader />}
                                    </Form.Group>
                                    <Form.Group controlId='image'>
                                          <Form.Label>Image</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter Image url'
                                                value={image2}
                                                onChange={(e) => setImage2(e.target.value)}
                                          ></Form.Control>
                                          <Form.File
                                                id='image-file'
                                                label='Choose File'
                                                custom
                                                onChange={uploadFileHandler2}
                                          ></Form.File>
                                          {uploading && <Loader />}
                                    </Form.Group>
                                    <Form.Group controlId='image'>
                                          <Form.Label>Image</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter Image url'
                                                value={image3}
                                                onChange={(e) => setImage3(e.target.value)}
                                          ></Form.Control>
                                          <Form.File
                                                id='image-file'
                                                label='Choose File'
                                                custom
                                                onChange={uploadFileHandler3}
                                          ></Form.File>
                                          {uploading && <Loader />}
                                    </Form.Group>



                                    <Button type='submit' variant='primary' style={{ width: "100%", height: "35px" }} >
                                          Add
                                    </Button>
                              </Form>
                        )}
                  </FormContainer>
            </>
      )
}

export default RestEditScreen