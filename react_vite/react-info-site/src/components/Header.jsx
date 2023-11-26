import React from "react"
import logo from "./react-logo.png"

export default function Header() {
    return (
        <nav className="nav-bar">
            <img src={logo} alt="logo" className="nav-logo"/>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
  }