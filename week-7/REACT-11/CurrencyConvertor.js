import React, { useState } from 'react';

export default function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const rupeeValue = parseFloat(rupees);
    const converted = (rupeeValue / 90).toFixed(2); // Approx conversion
    setEuro(converted);
  };

  return (
    <div>
      <h3>Currency Convertor (INR ➝ Euro)</h3>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in INR"
      />
      <button onClick={handleSubmit}>Convert</button>
      <p>Converted Amount: € {euro}</p>
    </div>
  );
}
