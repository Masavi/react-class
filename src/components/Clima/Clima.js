import React, { Component } from 'react';
import {Button, Input, Label, Form, FormGroup} from 'reactstrap';
import axios from 'axios';

class Clima extends Component {
    state = { 
        ciudad: '',
        fecha: null,
        respuesta: 'aun no hay respuesta',
    };

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

    getCiudad = async (ciudad) => {
        const uri = `https://www.metaweather.com/api/location/search/?query=${ciudad}`
        try {
          const response = await axios.get(uri);
          const res_id = response.data.woeid;
          const sendDate = this.state.fecha;
          const final_uri = `https://www.metaweather.com/api/location/${res_id}/${sendDate}/`;
          const final_response = await axios.get(final_uri);
          console.log(final_response);
          if (final_response.status === 200) {
            this.setState({respuesta: final_response.status});
          }
        } catch (error) {
          console.error(error);
        }
      }

    enviarDatos = () => {
        this.getCiudad(this.state.ciudad);
    }

    render() { 
        return (
            <React.Fragment>      
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
                <p><b>
                    { this.state.respuesta }
                </b></p>
            </React.Fragment> 
        );
    }
}
 
export default Clima;