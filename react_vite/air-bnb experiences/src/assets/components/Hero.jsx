import React from "react"
import photogrid from "../images/photo-grid.png"

export default function Hero() {
   return (
    <section>
        <div className="photo-grid">
            <img src={photogrid} alt="photogrid" className="photo-grid-img"/>
        </div>
        <div>
            <h1 className="online-experiences-h1">Online Experiences</h1>
            <p className="online-experiences-tagline">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home</p>
        </div>
</section>    
   ) 
}