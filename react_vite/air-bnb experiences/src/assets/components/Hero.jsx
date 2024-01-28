import React from "react"
import MostPopularImage from "../images/most-popular.png"
import TeamBuildingImage from "../images/team-building.png" 
import FamilyFunImage from "../images/family-fun.png"
import EasyPlanningImage from "../images/easy-planning.png"

export default function Hero() {
    return (
        <section className="hero">
            <h1>New this week</h1>
            <div className="new-this-week">
                <img src={MostPopularImage} alt="most-popular-img" />
                <img src={EasyPlanningImage} alt="easy-planning-img" />
                <img src={FamilyFunImage} alt="family-fun-img" />
                <img src={TeamBuildingImage} alt="team-building-img" />
            </div>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}