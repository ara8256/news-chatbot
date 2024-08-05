import React from "react";
import "../css/navbar.css";
import logo from "../pictures/file.png"
const Navbar = () => {
  return ( 
    <nav className="navbar navbar-light backcol">
    <div className="container-fluid">
      <a className="navbar-brand text-light" href="#" style={{fontSize:"2vh"}}>
        <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
        NewsHub
      </a>
    </div>
  </nav>
  );
};

export default Navbar;
