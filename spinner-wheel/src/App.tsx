import React from 'react';
import './App.css';
import MainPanel from './components/MainPanel';

function App() {
  return (
    <div style={{
      display: 'flex',
      // alignItems: 'center',
      justifyContent: 'center',
    }}>
      <MainPanel />
    </div>
  );
};

export default App;
