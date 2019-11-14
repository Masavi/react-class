import React from 'react';
import Contador from './components/Contador';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container className="pt-4">
      <Contador />
    </Container>
  );
}

export default App;
