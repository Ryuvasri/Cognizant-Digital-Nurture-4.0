import React from 'react';
import OfficeList from './component/OfficeList';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 24 }}>
      {/* JSX element for heading */}
      <h1>Office Space Rental</h1>

      {/* Render our list of offices */}
      <OfficeList />
    </div>
  );
}
