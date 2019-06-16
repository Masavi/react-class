import React, { Component } from 'react';
import {Button, Input, Label, Form, FormGroup} from 'reactstrap';

class Clima extends Component {
    state = {  }

    render() { 
        return ( 
            <Form>
                <FormGroup>
                    <Label>Ciudad</Label>
                    <Input 
                    className="mb-3"
                    type="text"
                    name="ciudad"
                    id="id_ciudad"
                    placeholder="Introduce la ciudad a buscar"/>
                    <Label>Fecha</Label>
                    <Input 
                    type="datetime"
                    name="fecha"
                    id="id_fecha"
                    placeholder="Introduce la fecha mm/dd/yyyy"/>
                    <Button 
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