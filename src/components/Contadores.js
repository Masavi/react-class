import React, { Component } from 'react';
import Contador from './Contador';

class Contadores extends Component {
    state = { 
        contadores: [
            { id: 0, titulo: 'Alpha',   valor: 0 },
            { id: 1, titulo: 'Bravo',   valor: -2 },
            { id: 2, titulo: 'Charlie', valor: 4 },
            { id: 3, titulo: 'Delta',   valor: -6 },
            { id: 4, titulo: 'Gamma',   valor: 8 },
        ],
    }

    eliminarContador = (id) => {
        const contadores = this.state.contadores.filter( contador => contador.id !== id);
        this.setState({
            contadores,
        })
    };

    render() { 
        return ( 
            <React.Fragment>
                { this.state.contadores.map( contador => {
                    return <Contador
                        key={contador.id}
                        id={contador.id}
                        titulo={contador.titulo} 
                        valor={contador.valor} 
                        eliminar={this.eliminarContador}/>
                })}
            </React.Fragment>
        );
    }
}
 
export default Contadores;