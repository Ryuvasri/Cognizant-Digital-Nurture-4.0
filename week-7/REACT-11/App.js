import React from 'react';
import Counter from './Counter';
import WelcomeButton from './WelcomeButton';
import SyntheticEventExample from './SyntheticEventExample';
import CurrencyConvertor from './CurrencyConvertor';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Event Examples App</h1>
      <Counter />
      <hr />
      <WelcomeButton />
      <hr />
      <SyntheticEventExample />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}
