import React, { Component } from 'react';
import {Button, Input, Label, Form, FormGroup} from 'reactstrap';

class Clima extends Component {
    state = { 
        ciudad: '',
        fecha: null,
    }

    manejarInputs = (e) => {
        // console.log(e.target.name, e.target.value);
        switch (e.target.name) {
            case 'ciudad':
                this.setState({ciudad: e.target.value})
                break;
            case 'fecha':
                this.setState({fecha: e.target.value})
                break;
            default:
                break;
        };
    };

    enviarDatos = () => {
        console.log(this.state);
    };

    render() { 
        return ( 
            <Form>
                <FormGroup>
                    <Label>Ciudad</Label>
                    <Input 
                    onChange={ (e) => this.manejarInputs(e) }
                    className="mb-3"
                    type="text"
                    name="ciudad"
                    id="id_ciudad"
                    placeholder="Introduce la ciudad a buscar"/>
                    <Label>Fecha</Label>

                    <Input
                    onChange={ (e) => this.manejarInputs(e) } 
                    type="datetime"
                    name="fecha"
                    id="id_fecha"
                    placeholder="Introduce la fecha mm/dd/yyyy"/>
                    
                    <Button 
                        onClick={this.enviarDatos}
                        className="mt-3"
                        color="info">
                            Enviar
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}
 
export default Clima;