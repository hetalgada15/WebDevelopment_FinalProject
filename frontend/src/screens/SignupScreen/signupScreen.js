import React, { useState, useEffect } from 'react'
import './signup.css'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar/navbar.js'

const SignupScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userLogin)
    const { userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            // dispatch(register(name, email, password)) Removed register action dispatch
        }
    }

    return (
        <>
            <Navbar /> {/* Ensure Navbar is still included */}
            <div className="maincontainer">
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="col-md-6 d-none d-md-flex bg-image1"></div>
                        <div className="col-md-6 bg-light">
                            <div className="signup d-flex align-items-center py-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            {message && <p className='error-message'>{message}</p>}
                                            <center>
                                                <h3 className='display-4'>Registration</h3>
                                            </center>
                                            <br/>
                                            <form onSubmit={submitHandler}>
                                                <div className="input-field">
                                                    <input id="inputName" type="text" placeholder="Full Name*" required autoFocus value={name}
                                                           onChange={(e) => setName(e.target.value)} />
                                                </div>
                                                <div className="input-field">
                                                    <input id="inputEmail" type="email" placeholder="Email ID*" required
                                                           value={email}
                                                           onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                                <div className="input-field">
                                                    <input id="inputPassword" type="password" placeholder="Password*" required
                                                           value={password}
                                                           onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                                <div className="input-field">
                                                    <input id="inputPassword" type="password" placeholder="Confirm Password*" required
                                                           value={confirmPassword}
                                                           onChange={(e) => setConfirmPassword(e.target.value)} />
                                                </div>
                                                <br/>
                                                <button type="submit" className="btn btn-dark btn-inline rounded-pill shadow-sm">Sign up</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupScreen
