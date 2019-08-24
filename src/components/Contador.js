import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

class Contador extends Component {
    state = { 
        titulo: this.props.titulo,
        valor: this.props.valor,
    }

    incrementar = () => {
        this.setState({
            valor: this.state.valor + 1,
        });
    }

    decrementar = () => {
        this.setState({
            valor: this.state.valor - 1,
        });
    }

    renderValor = () => {
        if (this.state.valor > 0) {
            return <Badge
                color='primary'
                style={{fontSize: '1.55em'}}>{this.state.valor}</Badge>
        } else if (this.state.valor < 0) {
            return <Badge 
                color='danger'
                style={{fontSize: '1.55em'}}>{this.state.valor}</Badge>
        } else {
            return <Badge 
                color='warning'
                style={{fontSize: '1.55em'}}>cero</Badge>
        }
    }

    render() { 
        return ( 
            <React.Fragment>
                <h2 className='mt-4'>{this.state.titulo}</h2>
                <div className='d-flex align-items-center'>
                    { this.renderValor() }
                    <Button
                        onClick={this.incrementar}
                        className='ml-2 mr-2'
                        color='primary'>+</Button>
                    <Button 
                        onClick={this.decrementar}
                        color='danger'>-</Button>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Contador;