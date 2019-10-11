import React, { Component } from 'react';

class HolaMundo extends Component {
    state = { 
        nombre: this.props.nombre,
        ocupacion: this.props.ocupacion,
        pasatiempos: this.props.pasatiempos,
    }

    render() { 
        {console.log(this.props)}
        return (
            <React.Fragment>
                <h1>{this.state.nombre}</h1>
                <h2>{this.state.ocupacion}</h2>
                <h3>{this.state.pasatiempos}</h3>
            </React.Fragment>
        );
    }
}
 
export default HolaMundo;