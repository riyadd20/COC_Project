// const icebreakers = [
    // "What's your favorite hobby?",
    // "What's the best vacation you've ever taken?",
    // "Do you have any pets?",
    // "What's your favorite book/movie/TV show?",
    // "What do you like to do for fun?",
    // "Where did you grow up?",
    // "What's your favorite type of food?",
    // "Do you play any sports?",
    // "What kind of music do you like?",
    // "What's your dream job?",
    // "Do you have any siblings?",
    // "What's the best concert you've ever been to?",
//   ];
  

import React from 'react';

const IceBreakers = ({ handleIceBreakerClick }) => {
  const iceBreakers = [
    'What is your favorite hobby?',
    'What is your favorite travel destination?',
    'What was the last book you read?',
    'What is your favorite movie genre?',
    'What is your favorite music genre?',
  ];

  return (
    <div className="ice-breakers-container">
      {iceBreakers.map((iceBreaker, index) => (
        <button key={index} onClick={() => handleIceBreakerClick(iceBreaker)}>{iceBreaker}</button>
      ))}
    </div>
  );
};

export default IceBreakers;
