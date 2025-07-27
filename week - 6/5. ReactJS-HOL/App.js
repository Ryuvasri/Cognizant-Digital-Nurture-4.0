import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <h2>Cohort Dashboard</h2>

      <CohortDetails
        name="React Bootcamp"
        status="ongoing"
        startDate="2024-07-01"
        endDate="2024-08-15"
      />

      <CohortDetails
        name="Python Basics"
        status="completed"
        startDate="2024-05-01"
        endDate="2024-06-30"
      />
    </div>
  );
}

export default App;
