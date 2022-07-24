import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((card) => (
    <Card
      key={card.id}
      img={card.coverImg}
      title={card.title}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      price={card.price}
      location={card.location}
    />
  ));
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards">{cards}</section>
    </div>
  );
}

export default App;
