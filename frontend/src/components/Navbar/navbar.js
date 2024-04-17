import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Navbar/tipton-logo.png";
import "../Navbar/nav.css";

const Navbar = (history) => {
const userInfo={name:"Username", isAdmin:true};
  return (
    <nav class="navbar navbar-expand-lg navbar-dark py-3 header">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src={logo}
            style={{ width: "60px", height: "50px", paddingRight: "10px" }}
          ></img>
          <div className="tipton_brand">Tipton Hotel</div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <LinkContainer style={{ color: "black" }} to="/cart">
                <Nav.Link>
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  Your Cart
                </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown
                class="profile_name"
                title={userInfo.name}
                id="username"
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item class="link-dark">
                    View your profile
                  </NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Item onClick={console.log("login-screen")}>
                  <li className="link">Logout</li>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <li class="nav-item">
                <a
                  style={{ color: "black" }}
                  class="nav-link active"
                  aria-current="page"
                  href="/login"
                >
                  <i class="fa fa-user-circle" aria-hidden="true"></i> Member Login
                </a>
              </li>
            )}

            {userInfo && userInfo.isAdmin && (
              <NavDropdown className="link" title="Admin">
                <LinkContainer to="/studEveMgt">
                  <NavDropdown.Item class="link-dark">
                    Manage Studios
                  </NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/roomManagement">
                  <NavDropdown.Item class="link-dark">
                    Manage Spa Rooms
                  </NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/packageManagement">
                  <NavDropdown.Item class="link-dark">
                    Manage Glam Kits
                  </NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/skincareManagement">
                  <NavDropdown.Item class="link-dark">
                    Manage SkinCare Products
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
