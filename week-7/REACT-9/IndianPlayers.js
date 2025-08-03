import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Rohit', 'Virat', 'Surya', 'Pant'];
  const RanjiTrophy = ['Jadeja', 'Rahane', 'Pujara', 'Prithvi'];

  const allPlayers = [...T20players, ...RanjiTrophy]; // ES6 Merge

  const oddPlayers = allPlayers.filter((_, index) => index % 2 === 1);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>All Players:</h2>
      <p>{allPlayers.join(', ')}</p>

      <h3>Even Team:</h3>
      <p>{evenPlayers.join(', ')}</p>

      <h3>Odd Team:</h3>
      <p>{oddPlayers.join(', ')}</p>
    </div>
  );
};

export default IndianPlayers;
