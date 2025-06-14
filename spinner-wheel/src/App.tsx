import React from 'react';
import './App.css';
import Wheel from './components/Wheel';

function App() {
  return (
    <div style={{
      display: 'flex',
      // alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Wheel />
    </div>
  );
};

export default App;
