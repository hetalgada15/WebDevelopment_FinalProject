import React from 'react'
import { Table, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

const RoomsListScreen = () => {
    
    const rooms = [{
        _id: '1',
        name: 'Deluxe Room',
        maxcount: 2,
        rentperday: 150,
        type: 'Deluxe'
    }, {
        _id: '2',
        name: 'Standard Room',
        maxcount: 2,
        rentperday: 100,
        type: 'Standard'
    }];

    const deleteHandler = (id) => {
        Swal.fire({
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
        })
    }

    return (
        <>
            <h1>Rooms List</h1>
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>Room</th>
                        <th>Maximum people allowed</th>
                        <th>Charges per day</th>
                        <th>Room type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room) => (
                        <tr key={room._id}>
                            <td>{room.name}</td>
                            <td>{room.maxcount}</td>
                            <td>USD {room.rentperday}</td>
                            <td>{room.type}</td>
                            <td>
                                <Button
                                    variant='danger'
                                    className='btn-sm'
                                    onClick={() => deleteHandler(room._id)}
                                >
                                    <i className='fas fa-trash'></i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default RoomsListScreen;
