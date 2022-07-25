import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => (
    <Card
      key={item.id}
      img={item.coverImg}
      title={item.title}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      price={item.price}
      location={item.location}
      openSpots={item.openSpots}
    />
  ));
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
