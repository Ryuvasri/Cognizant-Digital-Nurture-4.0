import React from 'react';

export default function SyntheticEventExample() {
  const handleClick = (event) => {
    console.log("Synthetic Event Type:", event.type);
    alert("I was clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>Synthetic Click</button>
    </div>
  );
}
