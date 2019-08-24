import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

class Contador extends Component {
    state = { 
        titulo: 'Alpha',
        valor: 0,
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

    render() { 
        return ( 
            <React.Fragment>
                <h2 className='mt-4'>{this.state.titulo}</h2>
                <div className='d-flex align-items-center'>
                    <Badge style={{fontSize: '1.55em'}}>{this.state.valor}</Badge>
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