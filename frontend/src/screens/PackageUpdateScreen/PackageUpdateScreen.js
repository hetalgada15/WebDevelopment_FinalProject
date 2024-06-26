import React, { useEffect, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { getRestDetails, updatePackageDetails } from '../../actions/packagesActions'
import { REST_UPDATE_RESET } from '../../constants/packageConstants'


const PackageUpdateScreen = ({ match, history }) => {

    const packageId = match.params.id

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


    const restDetails = useSelector((state) => state.restDetails)
    const { loading, error, packages } = restDetails

    const restUpdate = useSelector((state) => state.restUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate} = restUpdate


    useEffect(() => {

        if(successUpdate){
            dispatch({ type: REST_UPDATE_RESET })
            history.push('/packageManagement')
        }else {
            if (!packages.name || packages._id !== packageId) {
                dispatch(getRestDetails(packageId))
            } else {

                setName(packages.name)
                setType(packages.type)
                setTables(packages.tables)
                setPhoneNo(packages.phoneNo)
                setEmail(packages.email)
                setLocation(packages.location)
                setImage1(packages.images[0])
                setImage2(packages.images[1])
                setImage3(packages.images[2])
                setDescription(packages.description)
            }

        }     
    }, [dispatch,history, packageId, packages, match, successUpdate])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updatePackageDetails({
            _id: packageId,
            name,
            type,
            tables,
            phoneNo,
            email,
            location,
            image1,
            image2,
            image3,
            description
        }))
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
            <Link to='/packageManagement' className='btn btn-primary my-3' style={{ marginLeft:"80px"}}>
                Go Back
            </Link>
            <FormContainer>
                <h1 style={{ textAlign: "center" }}>UPDATE PACKAGES</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate} </Message>}
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
                                    {/* <option value="TravelKit"> </option> */}
                                    <option value="StarterKit">StarterKit </option>
                                    <option value="TravelKit">TravelKit </option>
                                    <option value="SpecialOcassion">SpecialOcassion </option>
                                    <option value="LimitedEdition">LimitedEdition </option>
                                    
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
                                placeholder='Enter tables'
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
                                placeholder='Enter Location'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
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


                        <Form.Group controlId='image1'>
                                    <Form.Label>Image 1 URL</Form.Label>
                                    <Form.Control
                                    type='text'
                                    placeholder='Enter Image 1 URL'
                                    value={image1}
                                    onChange={(e) => setImage1(e.target.value)}
                                    />
                                    </Form.Group>

                                    <Form.Group controlId='image2'>
                                    <Form.Label>Image 2 URL</Form.Label>
                                    <Form.Control
                                    type='text'
                                    placeholder='Enter Image 2 URL'
                                    value={image2}
                                    onChange={(e) => setImage2(e.target.value)}
                                    />
                                    </Form.Group>

                                    <Form.Group controlId='image3'>
                                    <Form.Label>Image 3 URL</Form.Label>
                                    <Form.Control
                                    type='text'
                                    placeholder='Enter Image 3 URL'
                                    value={image3}
                                    onChange={(e) => setImage3(e.target.value)}
                                    />
                                    </Form.Group>



                        <Button type='submit' variant='primary' style={{ width: "100%", height: "35px" }} >
                            UPDATE
                        </Button>
                    </Form>
                )}
            </FormContainer>

        </>
    )
}

export default PackageUpdateScreen