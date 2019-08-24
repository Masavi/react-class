import React from 'react';
import Contadores from './components/Contadores';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container className='mt-5'>
      <h1>Contadores</h1>
      <Contadores />
    </Container>
  );
}

export default App;
