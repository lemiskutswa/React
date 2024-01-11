import React from "react"
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Card from "./assets/components/Card";
import cardData from "./data.js"


export default function App () {
 
  const dataElements = cardData.map(data => {
    return <Card
    img = {data.img}
    rating= {data.stats.rating}
    reviewCount= {data.stats.reviewCount}
    location = {data.location}
    title={data.title}
    price = {data.price}
  />
  });

  return (
    <div>
      <Navbar />
      <Hero />
      {dataElements}
    </div>
  );
}
