import React from 'react';
import Contador from './components/Contador';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container className='mt-5'>
      <h1>Contadores</h1>
      <Contador titulo='Bravo' valor={-2} />
      <Contador titulo='Omega' valor={7} />
    </Container>
  );
}

export default App;
