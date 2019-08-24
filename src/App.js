import React from 'react';
import Contador from './components/Contador';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container className='mt-5'>
      <h1>Contadores</h1>
      <Contador />
    </Container>
  );
}

export default App;
