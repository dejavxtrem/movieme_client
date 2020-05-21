import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import JumbotronClass from './components/Jumbotron/Jumbotron';
import TitleImg from './components/titlelist/Title'


class App extends React.Component {

  render () {
    return (
        <Container fluid bsPrefix="containeridea">
          <Row>
            <Col>
            <Navbar expand="lg" variant="dark" bg="dark" fixed="top" className="justify-content-end">
                  <img
                  alt=""
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
              <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Login</Nav.Link>
              <Nav.Link href="#pricing">Sign-up</Nav.Link>
              </Nav>
        </Navbar>
            </Col>
          </Row>
         
          <Row >
            <Col >
            <JumbotronClass/>
            </Col>
          </Row>

          <Row>
          <TitleImg/>
          </Row>
          
        

        </Container>
    )
  }
}

export default App;
