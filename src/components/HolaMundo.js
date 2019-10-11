import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

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
                <div>
                    <Card>
                        <CardImg style={{height: '100px', width: '100px'}}
                        top width="100%" src="https://www.purina.es/sites/g/files/mcldtz1656/files/2019-06/Perro%20salchicha%20%28Miniatura%20de%20pelo%20liso%29_400x378_0.jpg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment>
        );
    }
}
 
export default HolaMundo;