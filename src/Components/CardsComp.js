import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import Cards from './Cards';
import './CardsComp.css'
import movie1 from './movie1.jpg'
import movie2 from './movie2.jpeg'
import movie3 from './movie3.jpg'
import movie4 from './movie4.jpg'

class CardsComp extends Component {
    
    render() {
        return (
            <div className='movies'>
            <Container fluid={true} className="align-items-center">
            <div className='movieIn'>

            <Row noGutters>
              <Col lg={3} md={4}  sm={6} xs={12}>
               <Cards img={movie1} name='House of Gucci' dec='When Patrizia Reggiani, an outsider from humble beginnings, marries into the Gucci family, her unbridled ambition triggers a reckless spiral of betrayal, decadence, revenge, and ultimately...murder.'/>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
              <Cards img={movie2} name='Encanto'dec='The Madrigals are an extraordinary family who live in the mountains of Colombia called the Encanto where every child blessed with a unique gift, except Mirabel. But she may be the Madrigals last hope.'/>
              </Col>
              <Col lg={3} md={4}  sm={6} xs={12}>
              <Cards img={movie3} name='Eternals' dec='Based on Jack Kirby`s Eternals, Marvel Studios brings yet another thrilling superhero flick with the saga of The Eternals, a race of immortal beings who lived on Earth....'/>
              </Col>
              <Col lg={3} md={4}  sm={6} xs={12}>
              <Cards img={movie4} name='No Time To Die' dec='Bond has left active service. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help, leading Bond onto the trail of a mysterious...'/>
              </Col>
            </Row>
            </div>

      </Container>  
      </div>
        )
    }
}

export default CardsComp
