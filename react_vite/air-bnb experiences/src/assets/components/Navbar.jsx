import React from "react"
//import ReactDOM from "react-dom/client"
import logo from "../images/airbnb-logo.png"
import photogrid from "../images/photo-grid.png"

export default function Navbar () {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo" className="logo-image"/>
      </div>
      <div className="photo-grid">
        <img src={photogrid} alt="photogrid" className="photo-grid-img"/>
      </div>
      <div>
        <h1 className="online-experiences-h1">Online Experiences</h1>
      </div>
    </nav>
  );
}