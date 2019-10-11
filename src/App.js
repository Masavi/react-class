import React from 'react';
import './App.css';
import HolaMundo from './components/HolaMundo';

function App() {
  return (
    <React.Fragment>
      <h1>Hola desde App.js</h1>
      <HolaMundo
        pasatiempos='Aprender programación'
        ocupacion='Emprendedor' 
        nombre='Humberto'/>
      <HolaMundo
        pasatiempos='Fut'
        ocupacion='Cree que desarrollador' 
        nombre='Miguel'/>
    </React.Fragment>
  );
}

export default App;
