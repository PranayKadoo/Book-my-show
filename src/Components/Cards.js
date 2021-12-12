import React from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

import slider1 from './slider1.png';
 function Cards(props) {
    return (
  <div className='cards'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      {props.dec}
    </Card.Text>
    <Button variant="danger">Book Tickets</Button>
  </Card.Body>
</Card>
 </div>     
     )
}
export default Cards
