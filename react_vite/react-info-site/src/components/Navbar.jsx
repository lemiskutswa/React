import React from "react"
import logo from "./react-logo.png"

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <div className="logo-title">
                <img src={logo} alt="logo" className="nav-logo"/>
                <h1>React Facts</h1>
            </div>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
  }