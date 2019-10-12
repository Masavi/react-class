import React from 'react';
import './App.css';
import Contador from './components/Contador';

function App() {
  return (
    <React.Fragment>
      <Contador titulo='Alpha' numero={0} />
      <Contador titulo='Omega' numero={5} />
      <Contador titulo='Gamma' numero={-5} />
    </React.Fragment>
  );
}

export default App;
