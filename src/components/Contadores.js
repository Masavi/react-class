import React, { Component } from 'react';
import Contador from './Contador';

class Contadores extends Component {
    state = {  }

    render() { 
        return ( 
        <React.Fragment>
            <Contador titulo='Alpha' numero={0} />
            <Contador titulo='Omega' numero={5} />
            <Contador titulo='Gamma' numero={-5} />
        </React.Fragment>
        );
    }
}
 
export default Contadores;