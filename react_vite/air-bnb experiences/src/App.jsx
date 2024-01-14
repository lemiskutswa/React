import React from "react"
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Card from "./assets/components/Card";
import cardData from "./data.js"


export default function App () {
 
  const cards = cardData.map(item => {
    return <Card
    key={item.id}
    img = {item.coverImg}
    rating= {item.stats.rating}
    reviewCount= {item.stats.reviewCount}
    location = {item.location}
    title={item.title}
    price = {item.price}
  />
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
          {cards}
        </section>
      
    </div>
  );
}
