import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

class Contador extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h2 className='mt-4'>Contador</h2>
                <div className='d-flex align-items-center'>
                    <Badge style={{fontSize: '1.55em'}}>3</Badge>
                    <Button 
                        className='ml-2 mr-2'
                        color='primary'>+</Button>
                    <Button color='danger'>-</Button>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Contador;