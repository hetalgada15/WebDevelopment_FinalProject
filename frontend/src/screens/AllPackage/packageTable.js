import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col, Container } from 'react-bootstrap';
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import Swal from 'sweetalert2'




const PackageListScreen = () => {
const loading=true;
const error=null;
const packages="to_be_imported_backend";
    const deleteHandler = (id) => {
        if (Swal.fire({
            title: 'Confirm?',
            text: "Cannot revert",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Successfully',
                    'Deleted',
                    'success'
                )
            }
        })) {
         console.log("dispatch");
        }
    }

    return (
        <>
            <h1>Packages</h1>
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
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>PhoneNo</th>
                                    <th>Email</th>
                                    <th>Products</th>

                                </tr>
                            </thead>
                            <tbody>
                                {packages.map(packagee => (
                                    <tr key={packagee._id}>
                                        <td>{packagee.name}</td>
                                        <td>{packagee.type}</td>
                                        <td>{packagee.phoneNo}</td>
                                        <td>{packagee.email}</td>
                                        <td>{packagee.location}</td>
                                        <td>
                                        <LinkContainer to={`/updatePackage/${packagee._id}`} >
                                                                  <Button variant='light' className='btn-sm'>
                                                                        <i className='fas fa-edit'></i>
                                                                  </Button>
                                                            </LinkContainer>
                                            <Button
                                                variant='danger'
                                                className='btn-sm'
                                                onClick={() => deleteHandler(packagee._id)}
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


export default PackageListScreen