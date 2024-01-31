import React from "react"
import MostPopularImage from "../images/most-popular.png"
import EasyPlanningImage from "../images/easy-planning.png"
import FamilyFunImage from "../images/family-fun.png"
import TeamBuildingImage from "../images/team-building.png"

export default function Hero() {
    return (
        <section className="hero">
            <h1>New this week</h1>
            <div className="new-this-week">
                <div className="show-all-img">
                    <button className="show-all-button">Show All</button>
                    <img src={MostPopularImage} alt="most-popular-image"className="hero-images"/>
                </div>

                <div className="show-all-img">
                    <button className="show-all-button">Show All</button>
                    <img src={EasyPlanningImage} alt="easy-planning-image"className="hero-images"/>
                </div>

                <div className="show-all-img">
                    <button className="show-all-button">Show All</button>
                    <img src={TeamBuildingImage} alt="team-building-image"className="hero-images"/>
                </div>

                <div className="show-all-img">
                    <button className="show-all-button">Show All</button>
                    <img src={FamilyFunImage} alt="family-fun-image"className="hero-images"/>
                </div>
                
            </div>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}