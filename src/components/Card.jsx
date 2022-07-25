import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={`/src/images/${props.img}`} className="card--image" />
      <div className="card--stats">
        <img src="/src/images/star.png" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
