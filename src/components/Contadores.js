import React, { Component } from 'react';
import Contador from './Contador';

class Contadores extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Contador titulo='Bravo' valor={-2} />
                <Contador titulo='Omega' valor={7} />                
            </React.Fragment>
        );
    }
}
 
export default Contadores;