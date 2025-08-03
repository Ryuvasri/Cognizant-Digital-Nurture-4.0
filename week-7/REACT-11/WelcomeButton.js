import React from 'react';

export default function WelcomeButton() {
  const sayWelcome = (message) => {
    alert(`Message: ${message}`);
  };

  return (
    <div>
      <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>
    </div>
  );
}
