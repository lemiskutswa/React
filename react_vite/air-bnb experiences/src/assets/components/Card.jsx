import React from "react"
import CardImage from "../images/katie-zaferes.png"
import StarIcon from "../images/star.png"

export default function () {
    return(
        <section className="cards-section">
            <div className="card-element">
                <div className="card-image-section">
                    <img src= {CardImage} alt="Main card image" className="card-image"/>
                    <p className="sold-out-text">SOLD OUT</p>
                </div>
                <div className="card-content">
                    <div className="first-row">
                        <img src={StarIcon} alt="star-icon" className="star-icon"/>
                        <p className="rating">5.0 <span className="location">(6) &middot; USA</span></p>
                    </div>
                    <div className="labels">
                        <h2>Life lessons with Katie Zaferes</h2>
                        <p> <span className="price">From $136</span> / person</p>
                    </div>
                </div>
            </div>
            
        </section>

    )
}