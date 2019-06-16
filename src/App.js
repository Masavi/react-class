import React from 'react';
import Contador from './components/Contador/Contador';

function App() {
  return (
    <div className="container">
      <br/>
      <h1>Hola Mundo</h1>
      <Contador 
        titulo={"Gamma"} 
        valor={10}/>
    </div>
  );
}

export default App;
