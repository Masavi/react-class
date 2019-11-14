import React, { Component } from 'react';
import Contador from './Contador';

class Contadores extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <h1>Contadores</h1>
                <Contador titulo="Alpha" contador={0} />
                <Contador titulo="Bravo" contador={-5} />
                <Contador titulo="Charlie" contador={5} />
            </React.Fragment>
        );
    }
}
 
export default Contadores;