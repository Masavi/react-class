import React, { Component } from 'react';
import { Container, Button, Badge } from 'reactstrap';
import '../styles/Contador.css';

class Contador extends Component {
    state = { 
        titulo: this.props.titulo,
        numero: this.props.numero,
    }

    incrementar = () => {
        this.setState({
            numero: this.state.numero + 1,
        });
    }

    decrementar = () => {
        this.setState({
            numero: this.state.numero - 1,
        });
    }

    render() { 
        return (
            <Container className='mt-4 contador-div'>
                <h1>{this.state.titulo}</h1>
                <div className='d-flex align-items-center'>
                    <Badge className='contador-margin' >
                        <span className='contador-num'>
                            {this.state.numero}
                        </span>
                    </Badge>
                    <Button
                        onClick={this.incrementar}
                        className='contador-margin' 
                        color='primary'>+</Button>
                    <Button
                        onClick={this.decrementar}
                        className='contador-margin'  
                        color='danger'>-</Button>
                    <Button color='warning'>Eliminar</Button>
                </div>
            </Container>
        );
    }
}
 
export default Contador;