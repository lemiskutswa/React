import React from "react";
import Logo from "../assets/images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={Logo} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">By Lemis Kutswa</h4>
        </header>
    )
}