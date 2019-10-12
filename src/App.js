import React from 'react';
import './App.css';
import Contador from './components/Contador';

function App() {
  return (
    <React.Fragment>
      <Contador titulo='Alpha' numero={0} />
    </React.Fragment>
  );
}

export default App;
