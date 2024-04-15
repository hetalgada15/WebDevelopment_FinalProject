import React, { useState, useEffect } from 'react'
import './studioInsert.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Form } from 'react-bootstrap'

const StudioInsertScreen = ({ history }) => {
    const [studHallName, setHallName] = useState('');
    const [studSeats, setSeats] = useState('');
    const [studDes, setDes] = useState('');
    const [studImg1, setImg1] = useState('');
    const [studImg2, setImg2] = useState('');
    const [studImg3, setImg3] = useState('');
    const [uploading, setUploading] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
    
        Swal.fire('Successful', 'Studio Data Has been Successfully Added', 'success').then(result => {
            history.push('/studEveMgt')
        });
    };

    const uploadFileHandler = async (e, setImage) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true);

        try {
            const { data } = await axios.post('http://localhost:6500/api/uploads/image', formData);
            setImage(data);
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                            <center><h4>Insert Studio</h4></center>
                            <br/>
                            <form onSubmit={submitHandler}>
                                <div className="form-group mb-3">
                                    <input id="Enter Studio Name" type="text" placeholder="Enter Studio Name" required className="form-control"
                                    value={studHallName} onChange={(e) => setHallName(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <input id="input seats" type="text" placeholder="Enter maximum seatings" required className="form-control"
                                    value={studSeats} onChange={(e) => setSeats(e.target.value)}/>
                                </div>
                                <div className="form-group mb-3">
                                    <input id="input description" type="text" placeholder="Enter studio description" required className="form-control"
                                    value={studDes} onChange={(e) => setDes(e.target.value)}/>
                                </div>
                                <Form.Group controlId='image'>
                                    <div className="form-group bn">
                                        <Form.Label>Add Image</Form.Label>
                                        <Form.Control type='text' className="form-control" required placeholder='Enter Document URL'
                                        value={studImg1} onChange={(e) => setImg1(e.target.value)}></Form.Control>
                                    </div>
                                </Form.Group>
                                <br/>
                                <button type="submit" className="btn btn-outline-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudioInsertScreen;
