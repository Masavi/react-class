import React, { Component } from 'react';
import Contador from './Contador';

class Contadores extends Component {
    state = { 
        contadores: [
            { titulo: 'Alpha', numero: 0 },
            { titulo: 'Bravo', numero: 1 },
            { titulo: 'Charlie', numero: 2 },
            { titulo: 'Delta', numero: 4 },
            { titulo: 'Foxtrot', numero: 7 },
        ]
    }

    render() { 
        return ( 
        <React.Fragment>
            { this.state.contadores.map( (contador) => {
                return <Contador 
                            titulo={contador.titulo} 
                            numero={contador.numero} />
            })}
        </React.Fragment>
        );
    }
}
 
export default Contadores;