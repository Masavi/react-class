import React, { Component } from 'react';
import {Badge, Container, Button} from 'reactstrap';

class Contador extends Component {
    state = { 
        titulo: this.props.titulo,
        valor: this.props.valor,
    };

    // componentDidMount(){
    //     console.log(this.state);
    //     console.log(this.props);
    // };

    incrementarContador = () => {
        this.setState({
            valor: this.state.valor + 1
        });
    };

    decrementarContador = () => {
        this.setState({
            valor: this.state.valor - 1
        });
    };

    cambiarEstilos = () => {
        if (this.state.valor === 0) return this.setState({valor: 'cero'});
    };

    mostrarContador = () => {
        if (this.state.valor === 0) {
            return  <Badge color="warning">
                        <span style={{fontSize:20}}>
                            cero
                        </span>
                    </Badge>;
        } else if (this.state.valor > 0) {
            return  <Badge color="success">
                        <span style={{fontSize:20}}>
                            {this.state.valor}
                        </span>
                    </Badge>;
        } else if (this.state.valor < 0) {
            return  <Badge color="danger">
                        <span style={{fontSize:20}}>
                            {this.state.valor}
                        </span>
                    </Badge>;
        }
    };

    eliminarContador = () => {
        console.log("Se elimina el contador...");
    };

    render() { 
        return ( 
            <Container style={{
                width: "350px",
                border: "2px solid black",
                borderRadius: '5px',
            }}>
                <h2 className="ml-2">
                    {this.state.titulo}
                </h2>
                <Button 
                    onClick={this.incrementarContador}
                    className="m-2" 
                    color="primary">
                        +
                </Button>
                { this.mostrarContador() }
                <Button 
                    onClick={this.decrementarContador}
                    className="m-2" 
                    color="danger">
                        -
                </Button>
                <Button 
                    onClick={this.eliminarContador}
                    className="ml-5" 
                    color="warning">
                        Eliminar
                </Button>
            </Container>
        );
    }
}
 
export default Contador;