import React from "react"
//import CardImage from "../images/katie-zaferes.png"
import StarIcon from "../images/star.png"

export default function Card(props) {
    return(
        <div className="cards-section">
            <div className="card-element">
                <div className="card-image-section">
                    <img src= {`src/assets/images/${props.img}`} alt="Main card image" className="card-image"/>
                    <p className="sold-out-text">SOLD OUT</p>
                </div>
                <div className="card-content">
                    <div className="first-row">
                        <img src={StarIcon} alt="star-icon" className="star-icon"/>
                        <p className="rating">{props.rating} <span className="location">({props.reviewCount}) &middot; {props.country}</span></p>
                    </div>
                    <div className="labels">
                        <h2>{props.title}</h2>
                        <p> <span className="price">From ${props.price}</span> / person</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}