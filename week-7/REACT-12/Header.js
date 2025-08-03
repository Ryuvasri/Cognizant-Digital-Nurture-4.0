import React from 'react';

export default function Header({ isLoggedIn, handleLogin, handleLogout }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>Flight Ticket Booking App</h1>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
