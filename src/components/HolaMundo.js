import React, { Component } from 'react';

class HolaMundo extends Component {
    nombre = 'Mauricio';

    render() { 
        return ( 
            <React.Fragment>
                <h1 
                className='miclase'
                style={{color: 'green',fontSize:'100px'}}>
                    Hola, soy {this.nombre}
                </h1>
                <img alt='perro salchicha' src='https://www.purina.es/sites/g/files/mcldtz1656/files/2019-06/Perro%20salchicha%20%28Miniatura%20de%20pelo%20liso%29_400x378_0.jpg'/>
            </React.Fragment>
        );
    }
}
 
export default HolaMundo;