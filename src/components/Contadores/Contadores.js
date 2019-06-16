import React, { Component } from 'react';
import Contador from '../Contador/Contador';

class Contadores extends Component {
    state = { 
        contadores: [
            { titulo: "Alpha",   valor: 0,  id: 1 },
            { titulo: "Bravo",   valor: 5,  id: 2 },
            { titulo: "Charlie", valor: 10, id: 3 },
        ],
    };

    renderizarContadores = () => {
        return this.state.contadores.map( contador => {
            return <Contador 
                        titulo={contador.titulo} 
                        valor={contador.valor}
                        key={contador.id}
                    />
        })
    };

    render() { 
        return ( 
            <React.Fragment>
                <h2>Contadores</h2>
                { this.renderizarContadores() }
            </React.Fragment>
         );
    }
}
 
export default Contadores;