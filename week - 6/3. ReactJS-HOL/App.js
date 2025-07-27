import React from 'react';
import './Stylesheets/mystyle.css';
import CalculateScore from './component/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        name="John Doe" 
        school="Green Valley High School" 
        total={450} 
        goal={5} 
      />
    </div>
  );
}

export default App;
