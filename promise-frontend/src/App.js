import React from 'react';
import Promises from './Promises'; //component with promise syntax
import AsyncComp from './Async'; //component with async await
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Promises />
      {/* <AsyncComp /> */}
    </div>
  );
}

export default App;
