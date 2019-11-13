import React, { Component } from 'react';

class HolaMundo extends Component {

    mostrarTexto = () => {
        return 'Hola, soy un texto!';
    }

    render() { 
        return ( 
            <span>{this.mostrarTexto()}</span>
        );
    }
}
 
export default HolaMundo;