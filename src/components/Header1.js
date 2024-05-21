import React, { useState } from "react";
import "../styles/Header1.css";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Header1 = ({ clicked, setClicked }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileModal, setProfile] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const Profile = () => {
    setProfile(!profileModal);
  };

  return (
    <div className="head1Div1">
      <div>
        <NavLink to="/" className="logoDiv">
          <img src={logo} className="logoImage" />
          <h1 className="logoName">Flowzone</h1>
        </NavLink>
      </div>

      <div className="navList">
        <NavLink to="/about" style={{ textDecoration: "none" }}>
          <h3 className="navItems"> Home</h3>
        </NavLink>
        <NavLink to="/about" style={{ textDecoration: "none" }}>
          <h3 className="navItems"> Features</h3>
        </NavLink>
        {/* <NavLink to="/termsofuse" style={{ textDecoration: "none" }}>
          <h3 className="navItems"> Benefits </h3>
        </NavLink> */}
        <NavLink to="/riskwarning" style={{ textDecoration: "none" }}>
          <h3 className="navItems"> Reviews</h3>
        </NavLink>
      </div>

      <div className="authLinks">
        <NavLink to="/register" className="signBtn">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Header1;
