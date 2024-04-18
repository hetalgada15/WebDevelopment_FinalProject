import React, { useEffect, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { getSkincareDetails, updateSkincareDetails } from '../../actions/skincaresAction'
import { SKINCARES_UPDATE_RESET } from '../../constants/skincaresConstants'





const SkincareUpdateScreen = ({ match, history }) => {
      const skincareId = match.params.id

      const [name, setName] = useState('')
      const [category, setCategory] = useState('')
      const [price, setPrice] = useState(0)
      const [description, setDescription] = useState('')
      const [image, setImage] = useState('')
      const [uploading, setUploading] = useState(false)

      const dispatch = useDispatch()

      const skincareDetailsByid = useSelector((state) => state.skincareDetailsByid)
      const { loading, error, skincares } = skincareDetailsByid

      const skincareUpdate = useSelector((state) => state.skincareUpdate)
      const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = skincareUpdate

      useEffect(() => {
            if (successUpdate) {
                  dispatch({ type: SKINCARES_UPDATE_RESET })
                  history.push('/skincareManagement')
            } else {
                  if (!skincares.name || skincares._id !== skincareId) {
                        dispatch(getSkincareDetails(skincareId))
                  } else {
                        setName(skincares.name)
                        setCategory(skincares.category)
                        setPrice(skincares.price)
                        setDescription(skincares.description)
                        setImage(skincares.image)

                  }
            }

      }, [dispatch, skincareId, skincares, history, match, successUpdate])

      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(updateSkincareDetails({
                  _id: skincareId,
                  name,
                  category,
                  price,
                  description,
                  image
            }))


      }

      const uploadFileHandler = async (e) => {
            const file = e.target.files[0]
            const formData = new FormData()
            formData.append('image', file)
            setUploading(true)

            try {
                  const { data } = await axios.post('http://localhost:6500/api/uploads/image', formData)

                  setImage(data)
                  setUploading(false)
            } catch (error) {
                  console.error(error)
                  setUploading(false)
            }
      }


      return (
            <>
                  <FormContainer>
                        <h1 style={{ textAlign: "center" }}>Update Skincares</h1>
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

                                    <Form.Group controlId='name'>
                                          <Form.Label>Category</Form.Label>
                                          <Form.Control
                                                type='name'
                                                placeholder='Enter name'
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>


                                    {/* <Form.Group controlId='type'>
                                    <Form.Label>Type</Form.Label>
                                    <Form.Dropdown  onChange={ (e) => setType(e.target.value)}>
                                          <Dropdown value="Package">Package</Dropdown>
                                          <Dropdown value="Bar">Bar</Dropdown>
                                    </Form.Dropdown>
                                    </Form.Group> */}


                                    <Form.Group controlId='number'>
                                          <Form.Label>Price</Form.Label>
                                          <Form.Control
                                                type='number'
                                                placeholder='Enter tables'
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>







                                    <Form.Group controlId='description'>
                                          <Form.Label>Descrition</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter price'
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>


                                    <Form.Group controlId='image'>
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                    type='text'
                                    placeholder='Enter Image url'
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)} 
                                    />
                                    </Form.Group>



                                    <Button type='submit' variant='primary' style={{ width: "100%", height: "35px" }} >
                                          UPDATE SKINCARE
                                    </Button>
                              </Form>
                        )}
                  </FormContainer>
            </>
      )


}

export default SkincareUpdateScreen