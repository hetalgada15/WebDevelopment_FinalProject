import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { allStudios, deletestudio } from '../../actions/studioAction'
import Swal from 'sweetalert2'





const StudioListScreen = () => {


    const dispatch = useDispatch()

    const studAll = useSelector((state) => state.studAll)
    const { loading, error, studios } = studAll


    const studDelete = useSelector((state) => state.studDelete)
    const { success: successDelete } = studDelete

    useEffect(() => {
        dispatch(allStudios())
    }, [dispatch])


    const deleteHandler = (id) => {
        if (Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })) {
            dispatch(deletestudio(id))
        }
    }

    return (
        <>
            <center>
            <h1>Studio List</h1>
            </center>
            {
                loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <Container style={{marginTop:"-30px"}}>
                        <Table class="table">
                            <thead class="table-light">
                                <tr>
                                    {/* <th>ID</th> */}
                                    <th>Studio Hall</th>
                                    <th>Maxiumum Seating</th>
                                    <th>Studio Description</th>

                                </tr>
                            </thead>
                            <tbody>
                                {studios.map(studio => (
                                    <tr key={studio._id}>
                                        {/* <td>{studio._id}</td> */}
                                        <td>{studio.studHallName}</td>
                                        <td>{studio.studSeats}</td>
                                        <td>{studio.studDes}</td>
            
                                        <td>
                                            <LinkContainer to={`/studUpdate/${studio._id}`}>
                                                <Button variant='light' className='btn-sm'>
                                                    <i className='fas fa-edit'></i>
                                                </Button>
                                            </LinkContainer>
                                            <br/>
                                            <Button
                                                variant='danger'
                                                className='btn-sm'
                                                onClick={() => deleteHandler(studio._id)}
                                            >
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </td>
                                    </tr>


                                ))}
                            </tbody>
                        </Table>
                    </Container>
                )
            }
        </>
    )
}


export default StudioListScreen
