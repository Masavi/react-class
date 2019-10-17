import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';
const api = 'http://localhost:4000/api/articulos/';

class Articulos extends Component {
    state = { 
        articulos: [],
    }

    componentDidMount() {
        axios.get(api)
            .then(response => this.setState({ articulos: response.data.items }))
            .catch(error => console.log(error));
    }

    render() { 
        return (
            <Container>
                <h1 className='mt-4'> Artículos del Supermercado </h1>
                { this.state.articulos.map( articulo => {
                    return (
                        <div
                            style={{border: '2px green dotted'}} 
                            className='mb-4'>
                            <h2> {articulo.nombre} </h2>
                            <h3> {articulo._id} </h3>
                            <span> {`Precio: $${articulo.precio}`}</span>
                        </div>
                    );
                })}
            </Container> 
        );
    }
}
 
export default Articulos;