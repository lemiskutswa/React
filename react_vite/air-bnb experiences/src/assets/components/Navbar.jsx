import React from "react"
//import ReactDOM from "react-dom/client"
import logo from "../images/airbnb-logo.png"

export default function Navbar () {
  return (
    <nav className="navigation-bar">
      <div className="nav-logo">
        <img src={logo} alt="logo" className="nav--logo"/>
      </div>

      <div>
        <button className="air-bnb-home">AirBnB Your Home</button>
      </div>
    </nav>
  );
}