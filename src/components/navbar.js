import React from "react";
import "../css/navbar.css";
import logo from "../pictures/file.png"
import sibot from "../pictures/sibot.png"

const Navbar = () => {
  return ( 
    <nav className="navbar navbar-light backcol">
    <div className="container-fluid d-flex flex-row">
      <a className="navbar-brand text-light" href="#" style={{fontSize:"2vh"}}>
        <img src={logo} alt="" width="40" height="30" className="d-inline-block align-text-top"/>
        NewsHub
      </a>
        <img src={sibot} alt="" width="85" height="24" className="d-inline-block justify-content-left mb-3" />
    </div>
  </nav>
  );
};

export default Navbar;
