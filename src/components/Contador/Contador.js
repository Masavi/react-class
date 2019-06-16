import React, { Component } from 'react';
import {Badge, Container, Button} from 'reactstrap';

class Contador extends Component {
    state = {  }
    render() { 
        return ( 
            <Container style={{
                width: "300px",
                border: "2px solid black"
            }}>
                <h2 className="ml-2">Hola</h2>
                <Button className="m-2" color="primary">+</Button>
                <Badge>
                    <span
                    style={{
                        fontSize: 20
                    }}>
                        5
                    </span>
                </Badge>
                <Button className="m-2" color="danger">-</Button>
                <Button className="ml-5" color="warning">Eliminar</Button>
            </Container>
        );
    }
}
 
export default Contador;