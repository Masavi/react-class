import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class CrearArticulo extends Component {
    state = { 
        nombre: '',
        precio: 0,
        existencias: 0,
    }

    inputChange = (event) => {
        switch (event.target.name) {
            case 'nombre':
                this.setState({
                    nombre: event.target.value,
                })
                break;
            case 'precio':
                this.setState({
                    precio: event.target.value,
                })
                break;
            case 'existencias':
                this.setState({
                    existencias: event.target.value,
                })
                break;
            default:
                break;
        }
    }

    submit = () => {
        axios.post('http://localhost:4000/api/articulos/', this.state)
            .then(response => {
                alert('Articulo creado exitosamente')
                console.log(response)
            })
            .catch(() => alert('Error al crear Articulo'));
    }

    render() { 
        return ( 
            <Container className='mt-4'>
                <h1>Crear Artículo</h1>
                <Form>
                    <FormGroup>
                        <Label>Nombre del Artículo</Label>
                        <Input onChange={this.inputChange} type="text" name="nombre" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Precio del Artículo</Label>
                        <Input onChange={this.inputChange} type="number" name="precio" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Existencias del Artículo</Label>
                        <Input onChange={this.inputChange} type="number" name="existencias" />
                    </FormGroup>
                    <Button onClick={this.submit} color='primary'>Crear</Button>
                </Form>
            </Container>
        );
    }
}
 
export default CrearArticulo;