import React from "react";
import { logout } from "../../actions/userAction.js";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import used here
import logo from "../Navbar/navlogo.png";
import "../Navbar/nav.css";
import Swal from "sweetalert2";

const Navbar = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    Swal.fire("Successful", "Successfully Logged Out", "success").then(() => {
      window.location.href = "/login";
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3 header">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="navlogo"
            style={{ width: "60px", height: "50px", paddingRight: "10px" }}
          />
          <div className="tipton_brand">Tipton Hotel</div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <LinkContainer style={{ color: "black" }} to="/cart">
              <Nav.Link>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                Your Cart
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown
                className="profile_name"
                title={userInfo.name}
                id="username"
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item>
                    View your profile
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link className="nav-link active" to="/login">
                <i className="fa fa-user-circle" aria-hidden="true"></i> Member Login
              </Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin">
                <LinkContainer to="/studEveMgt">
                  <NavDropdown.Item>
                    Manage Studios
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/roomManagement">
                  <NavDropdown.Item>
                    Manage Spa Rooms
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/packageManagement">
                  <NavDropdown.Item>
                    Manage Glam Kits
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/skincareManagement">
                  <NavDropdown.Item>
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
