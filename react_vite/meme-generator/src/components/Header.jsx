import React from "react";
import Logo from "../assets/images/troll-face.png"

export default function Header() {
    return (
        <div className="header">
            <header className="title-logo">
                <img src={Logo} alt="troll-face-logo" />
                <h2>Meme Generator</h2>
            </header>

            <div className="course-project">
                <p>React Course Project 3</p>
            </div>
        </div>

    )
}