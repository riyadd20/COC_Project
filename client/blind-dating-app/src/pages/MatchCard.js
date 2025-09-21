import React from "react";
import "./MatchCard.css";

const MatchCard = ({ name, age, interests }) => {
  return (
    <div className="match-card">
      <h2>It's a Match!</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Interests: {interests}</p>
    </div>
  );
};

export default MatchCard;
