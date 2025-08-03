import React, { useState } from 'react';
import Header from './Header';
import Guest from './Guest';
import User from './User';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // Element variable for conditional rendering
  let content;
  if (isLoggedIn) {
    content = <User />;
  } else {
    content = <Guest />;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <Header
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      {content}
    </div>
  );
}
