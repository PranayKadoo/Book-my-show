import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import Cards from './Cards';
import './CardsComp.css'
import game1 from './game1.jpg'
import game2 from './game2.jpg'
import game3 from './game3.jpg'
import game4 from './game4.jpg'

class Games extends Component {
    
    render() {
        return (
            <div className='movies'>
            <Container fluid={true} className="align-items-center">
            <div className='movieIn'>

            <Row noGutters>
              <Col lg={3} md={4}  sm={6} xs={12}>
               <Cards img={game1} name='Call of Duty Mobile Tournament' dec="India’s first COD mobile tournament on India's most loved online ticketing platform"/>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
              <Cards img={game2} name='Free Fire Solo And Squad (Bermuda)'dec='Succession of previous tournament offering a fair opportunity to earn Rs.'/>
              </Col>
              <Col lg={3} md={4}  sm={6} xs={12}>
              <Cards img={game3} name='Flight 9032 Murder Mystery' dec='Breaking News!!! A business tycoon has met a fatal death in Flight 9032. The pilot did an emergency landing from an altitude of 40,000 ft.'/>
              </Col>
              <Col lg={3} md={4}  sm={6} xs={12}>
              <Cards img={game4} name='Lost Treasure of Sundarbans' dec='You are a group of explorers who love traveling to Jungles across the world. This time you choose Sundarbans famous for deadly wild beasts'/>
              </Col>
            </Row>
            </div>

      </Container>  
      </div>
        )
    }
}

export default Games
