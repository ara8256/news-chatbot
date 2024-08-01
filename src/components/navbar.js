import React from "react";
import "../css/navbar.css";
import logo from "../pictures/file.png"
const Navbar = () => {
  return ( 
    <nav class="navbar navbar-light backcol">
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="#" style={{fontSize:"2vh"}}>
        <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
        NewsHub
      </a>
    </div>
  </nav>
  );
};

export default Navbar;
