import React, { Component } from 'react';
import Contador from './Contador';

class Contadores extends Component {
    state = { 
        contadores: [
            { id: 1, titulo: 'Alpha',   contador: -1 },
            { id: 2, titulo: 'Bravo',   contador: 0 },
            { id: 3, titulo: 'Charlie', contador: 1 },
            { id: 4, titulo: 'Delta',   contador: 2 }
        ]
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Contadores</h1>
                {
                    this.state.contadores.map(contador => {
                        return <Contador
                                    key={contador.id}
                                    contador={contador.contador}
                                    titulo={contador.titulo} />
                    })
                }
            </React.Fragment>
        );
    }
}
 
export default Contadores;