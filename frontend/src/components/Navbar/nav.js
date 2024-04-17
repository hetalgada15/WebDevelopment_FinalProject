import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../Navbar/nav.css'


const Nav1 = () => {
      return (
            <Navbar className="py-1 justify-content-center nav_bar" >
                  <Nav >
                        < li class="nav-item" >
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/rooms'>SpaTherapy</a>
                        </li>

                        < li class="nav-item" >
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/packages'>Glamour Collection</a>
                        </li>

                        < li class="nav-item" >
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/skincares'>SkinCare</a>
                        </li>

                        < li class="nav-item" >
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/studios'>Creative Studios</a>
                        </li>

                  </Nav>
            </Navbar >
      )
}

export default Nav1
