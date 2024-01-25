import React from "react"
import StarIcon from "../images/star.png"

export default function Card(props) {

    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="sold-out-badge">{badgeText}</div>}
            <img src={`src/assets/images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src={StarIcon} className="card--star" />
                <span>{props.item.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

