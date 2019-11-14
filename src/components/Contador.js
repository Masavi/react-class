import React, { Component } from 'react';
import { Button, Badge } from 'reactstrap';

class Contador extends Component {
    state = { 
        titulo: 'Alpha',
        contador: 7
    }

    incrementar = () => {
        this.setState({ contador: this.state.contador + 1 })
    }

    decrementar = () => {
        this.setState({ contador: this.state.contador - 1 })
    }

    renderizarContador = () => {
        return this.state.contador === 0
            ? <Badge color="warning" style={{ fontSize: "1.5em" }}>cero</Badge>
            : <Badge style={{ fontSize: "1.5em" }}>{this.state.contador}</Badge>
    }

    render() { 
        return ( 
            <div style={{
                backgroundColor: "#8bfcba",
                width: "250px",
                padding: "10px",
                borderRadius: "20px"
            }}>
                <h2>{this.state.titulo}</h2>
                <div className="d-flex">
                    {this.renderizarContador()}
                    <Button onClick={this.incrementar} className="ml-2" color="primary">+</Button>
                    <Button onClick={this.decrementar} className="ml-2" color="danger">-</Button>
                    <Button className="ml-2" color="warning">Borrar</Button>
                </div>
            </div>
        );
    }
}
 
export default Contador;