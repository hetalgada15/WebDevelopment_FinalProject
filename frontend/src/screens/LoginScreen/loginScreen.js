import React, { useState, useEffect } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

const LoginScreen = ({ location, history }) => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const dispatch = useDispatch()
      const userLogin = useSelector(state => state.userLogin)
      const { userInfo } = userLogin

      const redirect = location.search ? location.search.split('=')[1] : '/'

      useEffect(() => {
            if (userInfo) {
                  history.push(redirect)
            }
      }, [history, userInfo, redirect])
     
      const submitHandler = (e) => {
            e.preventDefault()
            // Login dispatch action removed
            // Dispatch code or any related action should be placed here if needed
      }

      return (
            <>
                  <div className="maincontainer">
                        <div className="container-fluid">
                              <div className="row no-gutter">

                                    <div className="col-md-6 d-none d-md-flex bg-image"></div>

                                    <div className="col-md-6 bg-light">
                                          <div className="login d-flex align-items-center py-5">

                                                <div className="container">
                                                      <div className="row">
                                                            <div className="col-lg-10 col-xl-7 mx-auto">
                                                                  <h2 className="display-4">Welcome!</h2>
                                                                  <form onSubmit={submitHandler} >
                                                                        <div className="input-field">
                                                                              <input className='email' id="inputEmail" type="email" placeholder="Email ID*" required="" autoFocus="" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                                        </div>
                                                                        <div className="input-field">
                                                                              <input className='password' id="inputPassword" type="password" placeholder="Password*" required="" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                                        </div>
                                                                        <button type="submit" className="btn btn-dark btn-inline text-uppercase rounded-pill shadow-sm">Login</button>
                                                                        <div className="text-center d-flex justify-content-between mt-4"><p>New User? <Link to="/signup" className="text-muted">
                                                                              <u>Register Here</u></Link></p></div>
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

export default LoginScreen
