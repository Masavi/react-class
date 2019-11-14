import React from 'react';
import Contadores from './components/Contadores';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container className="pt-4">
      <Contadores />
    </Container>
  );
}

export default App;
