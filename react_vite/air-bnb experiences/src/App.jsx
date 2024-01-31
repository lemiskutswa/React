import React from "react"
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Card from "./assets/components/Card";
import cardData from "./data.js"


export default function App () {
 
  const cards = cardData.map(item => {
    return <Card
    key={item.id}
    item={item} //same as {...item} -> Using the spread operator {but not as advisable}
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
