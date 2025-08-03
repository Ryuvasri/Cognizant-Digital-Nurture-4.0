import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 85 },
    { name: 'Rohit', score: 65 },
    { name: 'Dhoni', score: 90 },
    { name: 'Hardik', score: 55 },
    { name: 'Kohli', score: 95 },
    { name: 'Pant', score: 45 },
    { name: 'Bumrah', score: 70 },
    { name: 'Shami', score: 60 },
    { name: 'Ashwin', score: 75 },
    { name: 'Surya', score: 40 },
    { name: 'Rahul', score: 82 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with Score below 70:</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
