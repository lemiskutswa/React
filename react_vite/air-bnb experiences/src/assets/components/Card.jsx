import React from "react"
//import CardImage from "../images/katie-zaferes.png"
import StarIcon from "../images/star.png"


//AGENDA TOMORROW: Look through each HTML CSS and JS to find the problem

export default function Card(props) {

    return(
<div className="card">
            {props.openSpots === 0 && <div className="sold-out-badge">SOLD OUT</div>}
            <img src={`src/assets/images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src={StarIcon} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

